import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

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
  floor: number;
}

interface Reservation {
  id: number;
  guestId: number;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatDialogModule
  ],
  template: `
    <div class="reservation-detail-container">
      <div class="loading-overlay" *ngIf="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <div class="back-button">
        <button mat-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon> Back to Reservations
        </button>
      </div>
      
      <ng-container *ngIf="reservation; else notFound">
        <div class="header-section">
          <div class="reservation-info">
            <h1 class="reservation-title">
              Reservation #{{ reservation.id }}
            </h1>
            <div class="status-badges">
              <span class="status-chip" [ngClass]="getStatusClass(reservation.status)">
                {{ reservation.status }}
              </span>
              <span class="payment-chip" [ngClass]="getPaymentStatusClass(reservation.paymentStatus)">
                {{ reservation.paymentStatus }}
              </span>
            </div>
          </div>
          
          <div class="action-buttons">
            <button 
              mat-raised-button 
              color="primary" 
              *ngIf="reservation.status === 'CONFIRMED'" 
              (click)="checkInReservation()">
              <mat-icon>login</mat-icon> Check-in Guest
            </button>
            <button 
              mat-raised-button 
              color="primary" 
              *ngIf="reservation.status === 'CHECKED_IN'" 
              (click)="checkOutReservation()">
              <mat-icon>logout</mat-icon> Check-out Guest
            </button>
            <button 
              mat-stroked-button 
              color="primary" 
              *ngIf="reservation.status !== 'CANCELLED' && reservation.status !== 'CHECKED_OUT'" 
              (click)="editReservation()">
              <mat-icon>edit</mat-icon> Edit
            </button>
            <button 
              mat-stroked-button 
              color="warn" 
              *ngIf="reservation.status !== 'CANCELLED' && reservation.status !== 'CHECKED_OUT'" 
              (click)="confirmCancelReservation()">
              <mat-icon>cancel</mat-icon> Cancel Reservation
            </button>
          </div>
        </div>
        
        <div class="content-section">
          <div class="details-card">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Reservation Details</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="detail-section">
                  <h3>Dates</h3>
                  <div class="detail-grid">
                    <div class="detail-item">
                      <div class="detail-label">Check-in Date</div>
                      <div class="detail-value">{{ reservation.checkInDate | date:'mediumDate' }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Check-out Date</div>
                      <div class="detail-value">{{ reservation.checkOutDate | date:'mediumDate' }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Length of Stay</div>
                      <div class="detail-value">{{ calculateNights() }} night(s)</div>
                    </div>
                  </div>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="detail-section">
                  <h3>Payment</h3>
                  <div class="detail-grid">
                    <div class="detail-item">
                      <div class="detail-label">Total Amount</div>
                      <div class="detail-value">{{ reservation.totalAmount | currency }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Payment Status</div>
                      <div class="detail-value payment-status">
                        <span class="payment-chip" [ngClass]="getPaymentStatusClass(reservation.paymentStatus)">
                          {{ reservation.paymentStatus }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <mat-divider *ngIf="reservation.notes"></mat-divider>
                
                <div class="detail-section" *ngIf="reservation.notes">
                  <h3>Notes</h3>
                  <div class="notes-content">{{ reservation.notes }}</div>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="detail-section">
                  <h3>System Information</h3>
                  <div class="detail-grid">
                    <div class="detail-item">
                      <div class="detail-label">Created</div>
                      <div class="detail-value">{{ reservation.createdAt | date:'medium' }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Last Updated</div>
                      <div class="detail-value">{{ reservation.updatedAt | date:'medium' }}</div>
                    </div>
                  </div>
                </div>
              </mat-card-content>
            </mat-card>
          </div>
          
          <div class="related-cards">
            <mat-card class="guest-card" *ngIf="guest">
              <mat-card-header>
                <mat-card-title>Guest Information</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="guest-name">
                  {{ guest.firstName }} {{ guest.lastName }}
                  <mat-icon *ngIf="guest.vip" color="warn" matTooltip="VIP Guest">star</mat-icon>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="contact-details">
                  <div class="contact-item" *ngIf="guest.email">
                    <mat-icon>email</mat-icon>
                    <span>{{ guest.email }}</span>
                  </div>
                  <div class="contact-item" *ngIf="guest.phone">
                    <mat-icon>phone</mat-icon>
                    <span>{{ guest.phone }}</span>
                  </div>
                </div>
                
                <div class="card-actions">
                  <button mat-button color="primary" (click)="viewGuest()">
                    <mat-icon>person</mat-icon> View Guest Details
                  </button>
                </div>
              </mat-card-content>
            </mat-card>
            
            <mat-card class="room-card" *ngIf="room">
              <mat-card-header>
                <mat-card-title>Room Details</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="room-header">
                  <h3>Room {{ room.roomNumber }}</h3>
                  <div class="room-type">{{ room.type }}</div>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="room-details">
                  <div class="room-detail-item">
                    <div class="detail-label">Floor</div>
                    <div class="detail-value">{{ room.floor }}</div>
                  </div>
                  <div class="room-detail-item">
                    <div class="detail-label">Capacity</div>
                    <div class="detail-value">{{ room.capacity }} person(s)</div>
                  </div>
                  <div class="room-detail-item">
                    <div class="detail-label">Price per Night</div>
                    <div class="detail-value">{{ room.price | currency }}</div>
                  </div>
                </div>
                
                <div class="card-actions">
                  <button mat-button color="primary" (click)="viewRoom()">
                    <mat-icon>hotel</mat-icon> View Room Details
                  </button>
                </div>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </ng-container>
      
      <ng-template #notFound>
        <div class="not-found" *ngIf="!loading">
          <h2>Reservation Not Found</h2>
          <p>The reservation you are looking for could not be found.</p>
          <button mat-raised-button color="primary" (click)="goBack()">Go Back to Reservations</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .reservation-detail-container {
      padding: 16px;
      position: relative;
      max-width: 1200px;
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
    
    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .reservation-title {
      font-size: 28px;
      margin: 0 0 8px 0;
    }
    
    .status-badges {
      display: flex;
      gap: 8px;
    }
    
    .status-chip, .payment-chip {
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
      display: inline-block;
      text-transform: capitalize;
    }
    
    .status-confirmed {
      background-color: #e3f2fd;
      color: #1565c0;
    }
    
    .status-pending {
      background-color: #fff8e1;
      color: #ff8f00;
    }
    
    .status-checked-in {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .status-checked-out {
      background-color: #f5f5f5;
      color: #616161;
    }
    
    .status-cancelled {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .payment-paid {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .payment-pending {
      background-color: #fff8e1;
      color: #ff8f00;
    }
    
    .payment-partial {
      background-color: #e0f7fa;
      color: #00838f;
    }
    
    .payment-cancelled {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .action-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    .content-section {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 24px;
    }
    
    @media (max-width: 960px) {
      .content-section {
        grid-template-columns: 1fr;
      }
    }
    
    .details-card, .related-cards {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    mat-card {
      margin-bottom: 24px;
    }
    
    .detail-section {
      margin-bottom: 24px;
    }
    
    .detail-section:last-child {
      margin-bottom: 0;
    }
    
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin: 0 0 16px 0;
    }
    
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    
    .detail-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 4px;
    }
    
    .detail-value {
      font-size: 16px;
    }
    
    .payment-status {
      margin-top: 4px;
    }
    
    .notes-content {
      white-space: pre-line;
      line-height: 1.5;
    }
    
    mat-divider {
      margin: 24px 0;
    }
    
    .guest-name {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .contact-details {
      margin: 16px 0;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    
    .contact-item mat-icon {
      color: rgba(0, 0, 0, 0.54);
      font-size: 18px;
      height: 18px;
      width: 18px;
    }
    
    .room-header {
      margin-bottom: 16px;
    }
    
    .room-header h3 {
      margin: 0;
    }
    
    .room-type {
      color: rgba(0, 0, 0, 0.54);
      font-size: 14px;
    }
    
    .room-details {
      margin: 16px 0;
    }
    
    .room-detail-item {
      margin-bottom: 12px;
    }
    
    .card-actions {
      margin-top: 16px;
    }
    
    .not-found {
      text-align: center;
      padding: 32px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .not-found h2 {
      margin-top: 0;
      color: rgba(0, 0, 0, 0.87);
    }
    
    .not-found p {
      margin-bottom: 24px;
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class ReservationDetailComponent implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  reservation: Reservation | null = null;
  guest: Guest | null = null;
  room: Room | null = null;
  loading = false;
  
  ngOnInit(): void {
    this.loadReservationData();
  }
  
  loadReservationData(): void {
    this.loading = true;
    
    this.route.paramMap.pipe(
      switchMap(params => {
        const reservationId = params.get('id');
        if (!reservationId) {
          return of(null);
        }
        
        const baseUrl = environment.apiUrl;
        
        return this.http.get<Reservation>(`${baseUrl}/reservations/${reservationId}`).pipe(
          catchError(error => {
            console.error('Error loading reservation details', error);
            if (error.status !== 404) {
              this.snackBar.open('Failed to load reservation details. Please try again later.', 'Close', { duration: 5000 });
            }
            return of(null);
          }),
          switchMap(reservation => {
            if (!reservation) {
              return of(null);
            }
            
            return forkJoin({
              reservation: of(reservation),
              guest: this.http.get<Guest>(`${baseUrl}/guests/${reservation.guestId}`).pipe(
                catchError(error => {
                  console.error('Error loading guest details', error);
                  return of(null);
                })
              ),
              room: this.http.get<Room>(`${baseUrl}/rooms/${reservation.roomId}`).pipe(
                catchError(error => {
                  console.error('Error loading room details', error);
                  return of(null);
                })
              )
            });
          }),
          finalize(() => this.loading = false)
        );
      })
    ).subscribe(data => {
      if (data) {
        this.reservation = data.reservation;
        this.guest = data.guest;
        this.room = data.room;
      }
    });
  }
  
  calculateNights(): number {
    if (!this.reservation) return 0;
    
    const checkIn = new Date(this.reservation.checkInDate);
    const checkOut = new Date(this.reservation.checkOutDate);
    
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.round(timeDiff / (1000 * 3600 * 24));
  }
  
  getStatusClass(status: string): string {
    status = status.toLowerCase().replace(/_/g, '-');
    return `status-${status}`;
  }
  
  getPaymentStatusClass(status: string): string {
    status = status.toLowerCase().replace(/_/g, '-');
    return `payment-${status}`;
  }
  
  goBack(): void {
    this.location.back();
  }
  
  editReservation(): void {
    if (this.reservation) {
      this.router.navigate(['/reservations', this.reservation.id, 'edit']);
    }
  }
  
  viewGuest(): void {
    if (this.guest) {
      this.router.navigate(['/guests', this.guest.id]);
    }
  }
  
  viewRoom(): void {
    if (this.room) {
      this.router.navigate(['/rooms', this.room.id]);
    }
  }
  
  confirmCancelReservation(): void {
    if (this.reservation && confirm('Are you sure you want to cancel this reservation?')) {
      this.updateReservationStatus('CANCELLED');
    }
  }
  
  checkInReservation(): void {
    if (this.reservation) {
      this.updateReservationStatus('CHECKED_IN');
    }
  }
  
  checkOutReservation(): void {
    if (this.reservation) {
      this.updateReservationStatus('CHECKED_OUT');
    }
  }
  
  updateReservationStatus(status: string): void {
    if (!this.reservation) return;
    
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.patch<Reservation>(`${baseUrl}/reservations/${this.reservation.id}/status`, { status })
      .pipe(
        catchError(error => {
          console.error(`Error updating reservation status to ${status}`, error);
          this.snackBar.open('Failed to update reservation status. Please try again later.', 'Close', { duration: 5000 });
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        if (response) {
          const statusText = status.replace(/_/g, ' ').toLowerCase();
          this.snackBar.open(`Reservation successfully ${statusText}`, 'Close', { duration: 3000 });
          this.loadReservationData();
        }
      });
  }
} 