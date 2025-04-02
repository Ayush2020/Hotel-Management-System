import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../environments/environment';
import { catchError, debounceTime, finalize, map, startWith, switchMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';

interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vip: boolean;
}

interface Room {
  id: number;
  roomNumber: string;
  type: string;
  price: number;
  capacity: number;
  status: string;
  floor: number;
}

interface Reservation {
  id?: number;
  guestId: number;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  notes: string;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="reservation-form-container">
      <div class="loading-overlay" *ngIf="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <div class="back-button">
        <button mat-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon> Back
        </button>
      </div>
      
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ isEditMode ? 'Edit Reservation' : 'Create New Reservation' }}</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="reservationForm" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h3>Guest Information</h3>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Guest</mat-label>
                  <input 
                    type="text" 
                    matInput 
                    formControlName="guestSearch" 
                    [matAutocomplete]="autoGuest"
                    placeholder="Search by name, email or phone"
                    required>
                  <mat-autocomplete #autoGuest="matAutocomplete" [displayWith]="displayGuestFn">
                    <mat-option *ngFor="let guest of filteredGuests$ | async" [value]="guest">
                      {{ guest.firstName }} {{ guest.lastName }} 
                      <span class="option-email">{{ guest.email }}</span>
                      <mat-icon *ngIf="guest.vip" color="warn" class="vip-icon">star</mat-icon>
                    </mat-option>
                  </mat-autocomplete>
                  <mat-error *ngIf="reservationForm.get('guestSearch')?.hasError('required')">
                    Guest is required
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div *ngIf="selectedGuest" class="guest-info">
                <div class="info-row">
                  <span class="info-label">Name:</span>
                  <span class="info-value">{{ selectedGuest.firstName }} {{ selectedGuest.lastName }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email:</span>
                  <span class="info-value">{{ selectedGuest.email || 'Not provided' }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Phone:</span>
                  <span class="info-value">{{ selectedGuest.phone || 'Not provided' }}</span>
                </div>
              </div>
            </div>
            
            <mat-divider></mat-divider>
            
            <div class="form-section">
              <h3>Room Selection</h3>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Room</mat-label>
                  <mat-select formControlName="roomId" required>
                    <mat-option *ngFor="let room of availableRooms" [value]="room.id">
                      {{ room.roomNumber }} - {{ room.type }} ({{ room.capacity }} person) - {{ room.price | currency }}
                    </mat-option>
                  </mat-select>
                  <mat-error *ngIf="reservationForm.get('roomId')?.hasError('required')">
                    Room selection is required
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div *ngIf="selectedRoom" class="room-info">
                <div class="info-row">
                  <span class="info-label">Room Number:</span>
                  <span class="info-value">{{ selectedRoom.roomNumber }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Type:</span>
                  <span class="info-value">{{ selectedRoom.type }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Capacity:</span>
                  <span class="info-value">{{ selectedRoom.capacity }} person</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Price per night:</span>
                  <span class="info-value">{{ selectedRoom.price | currency }}</span>
                </div>
              </div>
            </div>
            
            <mat-divider></mat-divider>
            
            <div class="form-section">
              <h3>Reservation Details</h3>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>Check-in Date</mat-label>
                  <input matInput [matDatepicker]="checkInPicker" formControlName="checkInDate" required>
                  <mat-datepicker-toggle matIconSuffix [for]="checkInPicker"></mat-datepicker-toggle>
                  <mat-datepicker #checkInPicker></mat-datepicker>
                  <mat-error *ngIf="reservationForm.get('checkInDate')?.hasError('required')">
                    Check-in date is required
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Check-out Date</mat-label>
                  <input matInput [matDatepicker]="checkOutPicker" formControlName="checkOutDate" required>
                  <mat-datepicker-toggle matIconSuffix [for]="checkOutPicker"></mat-datepicker-toggle>
                  <mat-datepicker #checkOutPicker></mat-datepicker>
                  <mat-error *ngIf="reservationForm.get('checkOutDate')?.hasError('required')">
                    Check-out date is required
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>Status</mat-label>
                  <mat-select formControlName="status" required>
                    <mat-option value="CONFIRMED">Confirmed</mat-option>
                    <mat-option value="PENDING">Pending</mat-option>
                    <mat-option value="CHECKED_IN">Checked In</mat-option>
                    <mat-option value="CHECKED_OUT">Checked Out</mat-option>
                    <mat-option value="CANCELLED">Cancelled</mat-option>
                  </mat-select>
                  <mat-error *ngIf="reservationForm.get('status')?.hasError('required')">
                    Status is required
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Payment Status</mat-label>
                  <mat-select formControlName="paymentStatus" required>
                    <mat-option value="PAID">Paid</mat-option>
                    <mat-option value="PENDING">Pending</mat-option>
                    <mat-option value="PARTIAL">Partial Payment</mat-option>
                    <mat-option value="CANCELLED">Cancelled</mat-option>
                  </mat-select>
                  <mat-error *ngIf="reservationForm.get('paymentStatus')?.hasError('required')">
                    Payment status is required
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Total Amount</mat-label>
                  <input type="number" matInput formControlName="totalAmount" required>
                  <span matTextPrefix>$&nbsp;</span>
                  <mat-error *ngIf="reservationForm.get('totalAmount')?.hasError('required')">
                    Total amount is required
                  </mat-error>
                  <mat-error *ngIf="reservationForm.get('totalAmount')?.hasError('min')">
                    Amount must be greater than 0
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Notes</mat-label>
                  <textarea 
                    matInput 
                    formControlName="notes" 
                    placeholder="Additional information or special requests"
                    rows="4">
                  </textarea>
                </mat-form-field>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" mat-button (click)="goBack()">Cancel</button>
              <button 
                type="submit" 
                mat-raised-button 
                color="primary" 
                [disabled]="reservationForm.invalid || loading">
                {{ isEditMode ? 'Update Reservation' : 'Create Reservation' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .reservation-form-container {
      padding: 16px;
      position: relative;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    
    .back-button {
      margin-bottom: 16px;
    }
    
    .form-section {
      margin: 24px 0;
    }
    
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 16px;
    }
    
    .form-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .form-row mat-form-field {
      flex: 1 1 200px;
    }
    
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    
    .option-email {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-left: 8px;
    }
    
    .vip-icon {
      font-size: 16px;
      height: 16px;
      width: 16px;
      vertical-align: middle;
      margin-left: 4px;
    }
    
    .guest-info, .room-info {
      background-color: #f5f5f5;
      padding: 16px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    
    .info-row {
      margin-bottom: 8px;
    }
    
    .info-row:last-child {
      margin-bottom: 0;
    }
    
    .info-label {
      font-weight: 500;
      margin-right: 8px;
    }
    
    mat-divider {
      margin: 16px 0;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }
  `]
})
export class ReservationFormComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  reservationForm: FormGroup;
  isEditMode = false;
  loading = false;
  
  // Guest selection
  guests: Guest[] = [];
  filteredGuests$: Observable<Guest[]>;
  selectedGuest: Guest | null = null;
  
  // Room selection
  availableRooms: Room[] = [];
  selectedRoom: Room | null = null;
  
  constructor() {
    this.reservationForm = this.fb.group({
      guestSearch: ['', Validators.required],
      guestId: ['', Validators.required],
      roomId: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      status: ['CONFIRMED', Validators.required],
      totalAmount: [0, [Validators.required, Validators.min(0.01)]],
      paymentStatus: ['PENDING', Validators.required],
      notes: ['']
    });
    
    // Set up guest search filtering
    this.filteredGuests$ = this.reservationForm.get('guestSearch')!.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => {
        const search = typeof value === 'string' ? value.toLowerCase() : '';
        if (search === '') {
          return this.guests.slice(0, 10); // Show first 10 guests when no search
        }
        
        return this.guests.filter(guest => 
          guest.firstName.toLowerCase().includes(search) || 
          guest.lastName.toLowerCase().includes(search) || 
          (guest.email && guest.email.toLowerCase().includes(search)) ||
          (guest.phone && guest.phone.includes(search))
        ).slice(0, 10); // Limit to 10 results
      })
    );
    
    // Update guestId when a guest is selected
    this.reservationForm.get('guestSearch')!.valueChanges.subscribe(value => {
      if (value && typeof value !== 'string') {
        this.selectedGuest = value;
        this.reservationForm.patchValue({ guestId: value.id });
      } else {
        this.selectedGuest = null;
        this.reservationForm.patchValue({ guestId: '' });
      }
    });
    
    // Update selected room when roomId changes
    this.reservationForm.get('roomId')!.valueChanges.subscribe(roomId => {
      this.selectedRoom = this.availableRooms.find(room => room.id === roomId) || null;
      if (this.selectedRoom) {
        this.calculateTotalAmount();
      }
    });
    
    // Calculate total when dates change
    this.reservationForm.get('checkInDate')!.valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
    
    this.reservationForm.get('checkOutDate')!.valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  }
  
  ngOnInit(): void {
    this.loading = true;
    
    // Check for pre-selected guest from query params
    this.route.queryParamMap.subscribe(params => {
      const guestId = params.get('guestId');
      if (guestId) {
        this.loadSelectedGuest(Number(guestId));
      }
    });
    
    // Check if in edit mode
    this.route.paramMap.pipe(
      switchMap(params => {
        const reservationId = params.get('id');
        
        // Load guests and rooms in parallel
        const baseUrl = environment.apiUrl;
        const guestsRequest = this.http.get<Guest[]>(`${baseUrl}/guests`).pipe(
          catchError(error => {
            console.error('Error loading guests', error);
            this.snackBar.open('Failed to load guests. Please try again later.', 'Close', { duration: 5000 });
            return of([]);
          })
        );
        
        const roomsRequest = this.http.get<Room[]>(`${baseUrl}/rooms?status=AVAILABLE`).pipe(
          catchError(error => {
            console.error('Error loading rooms', error);
            this.snackBar.open('Failed to load available rooms. Please try again later.', 'Close', { duration: 5000 });
            return of([]);
          })
        );
        
        // If in edit mode, also load the reservation details
        if (reservationId) {
          this.isEditMode = true;
          const reservationRequest = this.http.get<Reservation>(`${baseUrl}/reservations/${reservationId}`).pipe(
            catchError(error => {
              console.error('Error loading reservation details', error);
              this.snackBar.open('Failed to load reservation details. Please try again later.', 'Close', { duration: 5000 });
              return of(null);
            })
          );
          
          return forkJoin({
            guests: guestsRequest,
            rooms: roomsRequest,
            reservation: reservationRequest
          });
        } else {
          return forkJoin({
            guests: guestsRequest,
            rooms: roomsRequest,
            reservation: of(null)
          });
        }
      }),
      finalize(() => this.loading = false)
    ).subscribe(data => {
      this.guests = data.guests;
      this.availableRooms = data.rooms;
      
      if (data.reservation) {
        this.populateForm(data.reservation);
      }
    });
  }
  
  loadSelectedGuest(guestId: number): void {
    const baseUrl = environment.apiUrl;
    this.http.get<Guest>(`${baseUrl}/guests/${guestId}`)
      .pipe(
        catchError(error => {
          console.error('Error loading guest details', error);
          return of(null);
        })
      )
      .subscribe(guest => {
        if (guest) {
          this.selectedGuest = guest;
          this.reservationForm.patchValue({
            guestSearch: guest,
            guestId: guest.id
          });
        }
      });
  }
  
  populateForm(reservation: Reservation): void {
    // Load the full guest details first
    const baseUrl = environment.apiUrl;
    this.http.get<Guest>(`${baseUrl}/guests/${reservation.guestId}`)
      .pipe(
        catchError(error => {
          console.error('Error loading guest details', error);
          return of(null);
        })
      )
      .subscribe(guest => {
        if (guest) {
          this.selectedGuest = guest;
          
          // Format dates
          const checkInDate = new Date(reservation.checkInDate);
          const checkOutDate = new Date(reservation.checkOutDate);
          
          this.reservationForm.patchValue({
            guestSearch: guest,
            guestId: reservation.guestId,
            roomId: reservation.roomId,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            status: reservation.status,
            totalAmount: reservation.totalAmount,
            paymentStatus: reservation.paymentStatus,
            notes: reservation.notes
          });
          
          // For edit mode, we also need to load the current room, even if not "available"
          if (!this.availableRooms.some(r => r.id === reservation.roomId)) {
            this.http.get<Room>(`${baseUrl}/rooms/${reservation.roomId}`)
              .pipe(
                catchError(error => {
                  console.error('Error loading room details', error);
                  return of(null);
                })
              )
              .subscribe(room => {
                if (room) {
                  this.availableRooms.push(room);
                  this.selectedRoom = room;
                }
              });
          } else {
            this.selectedRoom = this.availableRooms.find(room => room.id === reservation.roomId) || null;
          }
        }
      });
  }
  
  calculateTotalAmount(): void {
    const checkInDate = this.reservationForm.get('checkInDate')?.value;
    const checkOutDate = this.reservationForm.get('checkOutDate')?.value;
    
    if (this.selectedRoom && checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const nights = Math.max(1, Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
      
      const totalAmount = this.selectedRoom.price * nights;
      this.reservationForm.patchValue({ totalAmount });
    }
  }
  
  displayGuestFn(guest: Guest): string {
    return guest ? `${guest.firstName} ${guest.lastName}` : '';
  }
  
  onSubmit(): void {
    if (this.reservationForm.invalid) {
      return;
    }
    
    this.loading = true;
    const formValue = this.reservationForm.value;
    const baseUrl = environment.apiUrl;
    
    // Format dates for API
    const checkInDate = new Date(formValue.checkInDate);
    const checkOutDate = new Date(formValue.checkOutDate);
    
    const reservation: Reservation = {
      guestId: formValue.guestId,
      roomId: formValue.roomId,
      checkInDate: checkInDate.toISOString().split('T')[0],
      checkOutDate: checkOutDate.toISOString().split('T')[0],
      status: formValue.status,
      totalAmount: formValue.totalAmount,
      paymentStatus: formValue.paymentStatus,
      notes: formValue.notes
    };
    
    if (this.isEditMode) {
      const reservationId = this.route.snapshot.paramMap.get('id');
      this.http.put<Reservation>(`${baseUrl}/reservations/${reservationId}`, reservation)
        .pipe(
          catchError(error => {
            console.error('Error updating reservation', error);
            this.snackBar.open('Failed to update reservation. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open('Reservation updated successfully', 'Close', { duration: 3000 });
            this.router.navigate(['/reservations', reservationId]);
          }
        });
    } else {
      this.http.post<Reservation>(`${baseUrl}/reservations`, reservation)
        .pipe(
          catchError(error => {
            console.error('Error creating reservation', error);
            this.snackBar.open('Failed to create reservation. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open('Reservation created successfully', 'Close', { duration: 3000 });
            this.router.navigate(['/reservations']);
          }
        });
    }
  }
  
  goBack(): void {
    this.location.back();
  }
} 