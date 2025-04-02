import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../environments/environment';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

interface Room {
  id: number;
  roomNumber: string;
  type: string;
  price: number;
  capacity: number;
  status: 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';
  amenities: string[];
  description: string;
  floor: number;
  images?: string[];
}

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="room-detail-container">
      <div class="loading-overlay" *ngIf="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <div class="back-button">
        <button mat-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon> Back to Rooms
        </button>
      </div>
      
      <mat-card *ngIf="room" class="room-card">
        <mat-card-header>
          <mat-card-title>Room {{ room.roomNumber }}</mat-card-title>
          <mat-card-subtitle>{{ room.type | titlecase }} Room</mat-card-subtitle>
          
          <div class="header-actions">
            <span class="status-chip" [ngClass]="getStatusClass(room.status)">
              {{ room.status | titlecase }}
            </span>
            
            <button mat-icon-button color="primary" matTooltip="Edit Room" (click)="editRoom()">
              <mat-icon>edit</mat-icon>
            </button>
            
            <button mat-icon-button color="warn" matTooltip="Delete Room" (click)="confirmDeleteRoom()">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </mat-card-header>
        
        <div class="room-image-container">
          <img *ngIf="room.images && room.images.length > 0; else placeholderImage" 
               [src]="room.images[0]" 
               alt="Room image" 
               class="room-image">
          <ng-template #placeholderImage>
            <div class="placeholder-image">
              <mat-icon>hotel</mat-icon>
              <p>No Image Available</p>
            </div>
          </ng-template>
        </div>
        
        <mat-card-content>
          <div class="room-info-grid">
            <div class="info-item">
              <div class="info-label">Floor</div>
              <div class="info-value">{{ room.floor }}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">Price</div>
              <div class="info-value">{{ room.price | currency }}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">Capacity</div>
              <div class="info-value">{{ room.capacity }} {{ room.capacity > 1 ? 'People' : 'Person' }}</div>
            </div>
          </div>
          
          <mat-divider class="section-divider"></mat-divider>
          
          <div class="room-description">
            <h3>Description</h3>
            <p>{{ room.description || 'No description available.' }}</p>
          </div>
          
          <mat-divider class="section-divider"></mat-divider>
          
          <div class="room-amenities">
            <h3>Amenities</h3>
            <mat-chip-set>
              <mat-chip *ngFor="let amenity of room.amenities">
                {{ amenity }}
              </mat-chip>
              <mat-chip *ngIf="!room.amenities || room.amenities.length === 0" disabled>
                No amenities listed
              </mat-chip>
            </mat-chip-set>
          </div>
        </mat-card-content>
        
        <mat-card-actions>
          <button mat-raised-button color="primary" *ngIf="room.status === 'AVAILABLE'" (click)="bookRoom()">
            Book Room
          </button>
          <button mat-raised-button color="accent" *ngIf="room.status === 'OCCUPIED'" (click)="viewReservation()">
            View Reservation
          </button>
          <button mat-raised-button color="warn" *ngIf="room.status === 'MAINTENANCE'" (click)="markAsAvailable()">
            Mark as Available
          </button>
        </mat-card-actions>
      </mat-card>
      
      <div class="not-found" *ngIf="notFound">
        <h2>Room Not Found</h2>
        <p>The room you are looking for could not be found.</p>
        <button mat-raised-button color="primary" (click)="goBack()">Go Back to Rooms</button>
      </div>
    </div>
  `,
  styles: [`
    .room-detail-container {
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
    
    .room-card {
      margin-bottom: 24px;
    }
    
    mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
    }
    
    .status-chip {
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .status-available {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .status-occupied {
      background-color: #e3f2fd;
      color: #1565c0;
    }
    
    .status-maintenance {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .room-image-container {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 4px;
      margin-bottom: 24px;
    }
    
    .room-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder-image {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
    }
    
    .placeholder-image mat-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
    }
    
    .room-info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .info-item {
      text-align: center;
    }
    
    .info-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 4px;
    }
    
    .info-value {
      font-size: 18px;
      font-weight: 500;
    }
    
    .section-divider {
      margin: 24px 0;
    }
    
    .room-description h3,
    .room-amenities h3 {
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }
    
    .room-description p {
      margin: 0;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.87);
    }
    
    mat-card-actions {
      padding: 16px;
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
export class RoomDetailComponent implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  room: Room | null = null;
  loading = false;
  notFound = false;
  
  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.pipe(
      switchMap(params => {
        const roomId = params.get('id');
        if (!roomId) {
          return of(null);
        }
        
        const baseUrl = environment.apiUrl;
        return this.http.get<Room>(`${baseUrl}/rooms/${roomId}`).pipe(
          catchError(error => {
            console.error('Error loading room details', error);
            if (error.status === 404) {
              this.notFound = true;
            } else {
              this.snackBar.open('Failed to load room details. Please try again later.', 'Close', { duration: 5000 });
            }
            return of(null);
          })
        );
      }),
      finalize(() => this.loading = false)
    ).subscribe(room => {
      this.room = room;
    });
  }
  
  getStatusClass(status: string): string {
    switch (status) {
      case 'AVAILABLE': return 'status-available';
      case 'OCCUPIED': return 'status-occupied';
      case 'MAINTENANCE': return 'status-maintenance';
      default: return '';
    }
  }
  
  goBack(): void {
    this.location.back();
  }
  
  editRoom(): void {
    if (this.room) {
      this.router.navigate(['/rooms', this.room.id, 'edit']);
    }
  }
  
  confirmDeleteRoom(): void {
    if (this.room && confirm(`Are you sure you want to delete room ${this.room.roomNumber}?`)) {
      this.deleteRoom();
    }
  }
  
  deleteRoom(): void {
    if (!this.room) return;
    
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.delete(`${baseUrl}/rooms/${this.room.id}`)
      .pipe(
        catchError(error => {
          console.error('Error deleting room', error);
          this.snackBar.open('Failed to delete room. Please try again later.', 'Close', { duration: 5000 });
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        if (response !== null) {
          this.snackBar.open(`Room ${this.room?.roomNumber} deleted successfully`, 'Close', { duration: 3000 });
          this.router.navigate(['/rooms']);
        }
      });
  }
  
  bookRoom(): void {
    if (this.room) {
      this.router.navigate(['/reservations/new'], { 
        queryParams: { roomId: this.room.id } 
      });
    }
  }
  
  viewReservation(): void {
    // In a real app, we would get the current reservation ID for this room
    // and navigate to that reservation's details page
    this.snackBar.open('This feature is not implemented yet.', 'Close', { duration: 3000 });
  }
  
  markAsAvailable(): void {
    if (!this.room) return;
    
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.patch(`${baseUrl}/rooms/${this.room.id}`, { status: 'AVAILABLE' })
      .pipe(
        catchError(error => {
          console.error('Error updating room status', error);
          this.snackBar.open('Failed to update room status. Please try again later.', 'Close', { duration: 5000 });
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        if (response !== null) {
          this.snackBar.open(`Room ${this.room?.roomNumber} is now available`, 'Close', { duration: 3000 });
          // Refresh room data
          this.ngOnInit();
        }
      });
  }
} 