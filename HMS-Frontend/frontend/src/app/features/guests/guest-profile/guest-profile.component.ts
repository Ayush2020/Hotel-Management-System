import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { environment } from '../../../../environments/environment';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  identificationNumber: string;
  identificationType: string;
  notes: string;
  vip: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Reservation {
  id: number;
  guestId: number;
  roomId: number;
  roomNumber: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  createdAt: string;
}

interface Room {
  id: number;
  roomNumber: string;
  type: string;
}

@Component({
  selector: 'app-guest-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  template: `
    <div class="guest-profile-container">
      <div class="loading-overlay" *ngIf="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <div class="back-button">
        <button mat-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon> Back to Guests
        </button>
      </div>
      
      <ng-container *ngIf="guest; else notFound">
        <div class="profile-header">
          <div class="guest-info">
            <h1 class="guest-name">
              {{ guest.firstName }} {{ guest.lastName }}
              <mat-icon *ngIf="guest.vip" color="warn" matTooltip="VIP Guest">star</mat-icon>
            </h1>
            <p class="guest-id">ID: {{ guest.id }}</p>
          </div>
          
          <div class="header-actions">
            <button mat-stroked-button color="primary" (click)="createReservation()">
              <mat-icon>add</mat-icon> New Reservation
            </button>
            <button mat-icon-button color="primary" matTooltip="Edit Guest" (click)="editGuest()">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" matTooltip="Delete Guest" (click)="confirmDeleteGuest()">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
        
        <mat-card class="profile-card">
          <mat-tab-group animationDuration="0ms">
            <mat-tab label="Guest Information">
              <div class="tab-content">
                <div class="info-section">
                  <h2>Contact Information</h2>
                  <div class="info-grid">
                    <div class="info-item">
                      <mat-icon>email</mat-icon>
                      <div>
                        <div class="info-label">Email</div>
                        <div class="info-value">{{ guest.email || 'Not provided' }}</div>
                      </div>
                    </div>
                    
                    <div class="info-item">
                      <mat-icon>phone</mat-icon>
                      <div>
                        <div class="info-label">Phone</div>
                        <div class="info-value">{{ guest.phone || 'Not provided' }}</div>
                      </div>
                    </div>
                    
                    <div class="info-item">
                      <mat-icon>location_on</mat-icon>
                      <div>
                        <div class="info-label">Address</div>
                        <div class="info-value address-value">
                          <ng-container *ngIf="guest.address; else noAddress">
                            {{ guest.address }}<br>
                            {{ guest.city }}, {{ guest.state }} {{ guest.postalCode }}<br>
                            {{ guest.country }}
                          </ng-container>
                          <ng-template #noAddress>Not provided</ng-template>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="info-section">
                  <h2>Identification</h2>
                  <div class="info-grid">
                    <div class="info-item">
                      <mat-icon>badge</mat-icon>
                      <div>
                        <div class="info-label">ID Type</div>
                        <div class="info-value">{{ guest.identificationType || 'Not provided' }}</div>
                      </div>
                    </div>
                    
                    <div class="info-item">
                      <mat-icon>pin</mat-icon>
                      <div>
                        <div class="info-label">ID Number</div>
                        <div class="info-value">{{ guest.identificationNumber || 'Not provided' }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <mat-divider></mat-divider>
                
                <div class="info-section">
                  <h2>Additional Information</h2>
                  <div class="notes-section">
                    <h3>Notes</h3>
                    <p class="notes-content">{{ guest.notes || 'No notes available' }}</p>
                  </div>
                  
                  <div class="dates-section">
                    <div class="date-item">
                      <div class="date-label">Created</div>
                      <div class="date-value">{{ guest.createdAt | date:'medium' }}</div>
                    </div>
                    <div class="date-item">
                      <div class="date-label">Last Updated</div>
                      <div class="date-value">{{ guest.updatedAt | date:'medium' }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </mat-tab>
            
            <mat-tab label="Reservations" [disabled]="!reservations || reservations.length === 0">
              <div class="tab-content">
                <h2>Reservation History</h2>
                
                <table mat-table [dataSource]="reservations" class="reservations-table">
                  <ng-container matColumnDef="id">
                    <th mat-header-cell *matHeaderCellDef>ID</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.id }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="roomNumber">
                    <th mat-header-cell *matHeaderCellDef>Room</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.roomNumber }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="checkInDate">
                    <th mat-header-cell *matHeaderCellDef>Check-in</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.checkInDate | date }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="checkOutDate">
                    <th mat-header-cell *matHeaderCellDef>Check-out</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.checkOutDate | date }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="status">
                    <th mat-header-cell *matHeaderCellDef>Status</th>
                    <td mat-cell *matCellDef="let reservation">
                      <span class="status-chip" [ngClass]="getStatusClass(reservation.status)">
                        {{ reservation.status }}
                      </span>
                    </td>
                  </ng-container>
                  
                  <ng-container matColumnDef="totalAmount">
                    <th mat-header-cell *matHeaderCellDef>Amount</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.totalAmount | currency }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="paymentStatus">
                    <th mat-header-cell *matHeaderCellDef>Payment</th>
                    <td mat-cell *matCellDef="let reservation">{{ reservation.paymentStatus }}</td>
                  </ng-container>
                  
                  <ng-container matColumnDef="actions">
                    <th mat-header-cell *matHeaderCellDef>Actions</th>
                    <td mat-cell *matCellDef="let reservation">
                      <button mat-icon-button color="primary" matTooltip="View Reservation Details" (click)="viewReservation(reservation)">
                        <mat-icon>visibility</mat-icon>
                      </button>
                    </td>
                  </ng-container>
                  
                  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                  
                  <tr class="mat-row" *matNoDataRow>
                    <td class="mat-cell no-data" [attr.colspan]="displayedColumns.length">
                      No reservations found for this guest
                    </td>
                  </tr>
                </table>
              </div>
            </mat-tab>
          </mat-tab-group>
        </mat-card>
      </ng-container>
      
      <ng-template #notFound>
        <div class="not-found" *ngIf="!loading">
          <h2>Guest Not Found</h2>
          <p>The guest you are looking for could not be found.</p>
          <button mat-raised-button color="primary" (click)="goBack()">Go Back to Guests</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .guest-profile-container {
      padding: 16px;
      position: relative;
      max-width: 1000px;
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
    
    .profile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    
    .guest-name {
      font-size: 28px;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .guest-id {
      color: rgba(0, 0, 0, 0.54);
      margin: 4px 0 0;
    }
    
    .header-actions {
      display: flex;
      gap: 8px;
    }
    
    .profile-card {
      margin-bottom: 24px;
    }
    
    .tab-content {
      padding: 24px;
    }
    
    .info-section {
      margin-bottom: 24px;
    }
    
    h2 {
      font-size: 20px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 16px;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .info-item {
      display: flex;
      gap: 16px;
    }
    
    .info-item mat-icon {
      color: rgba(0, 0, 0, 0.54);
    }
    
    .info-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 4px;
    }
    
    .info-value {
      font-size: 16px;
    }
    
    .address-value {
      line-height: 1.5;
    }
    
    mat-divider {
      margin: 24px 0;
    }
    
    .notes-section {
      margin-bottom: 24px;
    }
    
    h3 {
      font-size: 16px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 8px;
    }
    
    .notes-content {
      margin: 0;
      line-height: 1.5;
      white-space: pre-line;
    }
    
    .dates-section {
      display: flex;
      gap: 24px;
    }
    
    .date-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 4px;
    }
    
    .date-value {
      font-size: 14px;
    }
    
    .reservations-table {
      width: 100%;
    }
    
    .status-chip {
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .status-confirmed {
      background-color: #e3f2fd;
      color: #1565c0;
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
    
    .no-data {
      text-align: center;
      padding: 16px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class GuestProfileComponent implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  guest: Guest | null = null;
  reservations: Reservation[] = [];
  loading = false;
  displayedColumns: string[] = ['id', 'roomNumber', 'checkInDate', 'checkOutDate', 'status', 'totalAmount', 'paymentStatus', 'actions'];
  
  ngOnInit(): void {
    this.loadGuestData();
  }
  
  loadGuestData(): void {
    this.loading = true;
    
    this.route.paramMap.pipe(
      switchMap(params => {
        const guestId = params.get('id');
        if (!guestId) {
          return of(null);
        }
        
        const baseUrl = environment.apiUrl;
        
        return forkJoin({
          guest: this.http.get<Guest>(`${baseUrl}/guests/${guestId}`).pipe(
            catchError(error => {
              console.error('Error loading guest details', error);
              if (error.status !== 404) {
                this.snackBar.open('Failed to load guest details. Please try again later.', 'Close', { duration: 5000 });
              }
              return of(null);
            })
          ),
          reservations: this.http.get<Reservation[]>(`${baseUrl}/reservations?guestId=${guestId}`).pipe(
            catchError(error => {
              console.error('Error loading reservations', error);
              return of([]);
            })
          )
        }).pipe(
          finalize(() => this.loading = false)
        );
      })
    ).subscribe(data => {
      if (data) {
        this.guest = data.guest;
        this.reservations = data.reservations || [];
      }
    });
  }
  
  getStatusClass(status: string): string {
    status = status.toLowerCase();
    if (status.includes('confirmed')) return 'status-confirmed';
    if (status.includes('checked-in')) return 'status-checked-in';
    if (status.includes('checked-out')) return 'status-checked-out';
    if (status.includes('cancelled')) return 'status-cancelled';
    return '';
  }
  
  goBack(): void {
    this.location.back();
  }
  
  editGuest(): void {
    if (this.guest) {
      this.router.navigate(['/guests', this.guest.id, 'edit']);
    }
  }
  
  confirmDeleteGuest(): void {
    if (this.guest && confirm(`Are you sure you want to delete the guest ${this.guest.firstName} ${this.guest.lastName}?`)) {
      this.deleteGuest();
    }
  }
  
  deleteGuest(): void {
    if (!this.guest) return;
    
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.delete(`${baseUrl}/guests/${this.guest.id}`)
      .pipe(
        catchError(error => {
          console.error('Error deleting guest', error);
          this.snackBar.open('Failed to delete guest. Please try again later.', 'Close', { duration: 5000 });
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        if (response !== null) {
          this.snackBar.open(`Guest ${this.guest?.firstName} ${this.guest?.lastName} deleted successfully`, 'Close', { duration: 3000 });
          this.router.navigate(['/guests']);
        }
      });
  }
  
  createReservation(): void {
    if (this.guest) {
      this.router.navigate(['/reservations/new'], { 
        queryParams: { guestId: this.guest.id } 
      });
    }
  }
  
  viewReservation(reservation: Reservation): void {
    this.router.navigate(['/reservations', reservation.id]);
  }
} 