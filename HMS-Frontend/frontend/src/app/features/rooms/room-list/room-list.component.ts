import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { catchError, finalize } from 'rxjs/operators';
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
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="room-list-container">
      <h1 class="mat-headline-4">Room Management</h1>
      
      <div class="actions-bar">
        <button mat-raised-button color="primary" (click)="navigateToAddRoom()">
          <mat-icon>add</mat-icon> Add New Room
        </button>
      </div>
      
      <mat-card class="filter-card">
        <mat-card-content>
          <form [formGroup]="filterForm">
            <div class="filter-row">
              <mat-form-field appearance="outline">
                <mat-label>Search</mat-label>
                <input matInput formControlName="search" placeholder="Room number, description...">
                <mat-icon matSuffix>search</mat-icon>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Room Type</mat-label>
                <mat-select formControlName="type">
                  <mat-option value="">All Types</mat-option>
                  <mat-option value="STANDARD">Standard</mat-option>
                  <mat-option value="DELUXE">Deluxe</mat-option>
                  <mat-option value="SUITE">Suite</mat-option>
                  <mat-option value="EXECUTIVE">Executive</mat-option>
                </mat-select>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Status</mat-label>
                <mat-select formControlName="status">
                  <mat-option value="">All Status</mat-option>
                  <mat-option value="AVAILABLE">Available</mat-option>
                  <mat-option value="OCCUPIED">Occupied</mat-option>
                  <mat-option value="MAINTENANCE">Maintenance</mat-option>
                </mat-select>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Floor</mat-label>
                <mat-select formControlName="floor">
                  <mat-option value="">All Floors</mat-option>
                  <mat-option *ngFor="let floor of floors" [value]="floor">
                    {{ floor }}
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            
            <div class="filter-actions">
              <button mat-button color="primary" (click)="applyFilters()">Apply Filters</button>
              <button mat-button (click)="resetFilters()">Reset</button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
      
      <div class="table-container mat-elevation-z2">
        <div class="loading-overlay" *ngIf="loading">
          <mat-spinner diameter="40"></mat-spinner>
        </div>
        
        <table mat-table [dataSource]="rooms" matSort (matSortChange)="sortData($event)">
          <ng-container matColumnDef="roomNumber">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Room # </th>
            <td mat-cell *matCellDef="let room"> {{ room.roomNumber }} </td>
          </ng-container>
          
          <ng-container matColumnDef="type">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>
            <td mat-cell *matCellDef="let room"> {{ room.type | titlecase }} </td>
          </ng-container>
          
          <ng-container matColumnDef="price">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>
            <td mat-cell *matCellDef="let room"> {{ room.price | currency }} </td>
          </ng-container>
          
          <ng-container matColumnDef="capacity">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Capacity </th>
            <td mat-cell *matCellDef="let room"> {{ room.capacity }} </td>
          </ng-container>
          
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
            <td mat-cell *matCellDef="let room"> 
              <span class="status-chip" [ngClass]="getStatusClass(room.status)">
                {{ room.status | titlecase }}
              </span>
            </td>
          </ng-container>
          
          <ng-container matColumnDef="floor">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Floor </th>
            <td mat-cell *matCellDef="let room"> {{ room.floor }} </td>
          </ng-container>
          
          <ng-container matColumnDef="amenities">
            <th mat-header-cell *matHeaderCellDef> Amenities </th>
            <td mat-cell *matCellDef="let room"> 
              <div class="amenities-container">
                <mat-chip-set>
                  <mat-chip *ngFor="let amenity of room.amenities | slice:0:2">
                    {{ amenity }}
                  </mat-chip>
                  <mat-chip *ngIf="room.amenities.length > 2">
                    +{{ room.amenities.length - 2 }}
                  </mat-chip>
                </mat-chip-set>
              </div>
            </td>
          </ng-container>
          
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Actions </th>
            <td mat-cell *matCellDef="let room">
              <button mat-icon-button color="primary" (click)="viewRoom(room)">
                <mat-icon>visibility</mat-icon>
              </button>
              <button mat-icon-button color="accent" (click)="editRoom(room)">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="confirmDeleteRoom(room)">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          
          <tr class="mat-row" *matNoDataRow>
            <td class="mat-cell no-data" [attr.colspan]="displayedColumns.length">
              No rooms found matching the filter criteria
            </td>
          </tr>
        </table>
        
        <mat-paginator 
          [length]="totalRooms"
          [pageSize]="pageSize"
          [pageSizeOptions]="[10, 25, 50, 100]"
          (page)="pageChange($event)">
        </mat-paginator>
      </div>
    </div>
  `,
  styles: [`
    .room-list-container {
      padding: 16px;
    }
    
    .actions-bar {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 16px;
    }
    
    .filter-card {
      margin-bottom: 16px;
    }
    
    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .filter-row mat-form-field {
      flex: 1 1 200px;
    }
    
    .filter-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    
    .table-container {
      position: relative;
      overflow: auto;
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
    
    table {
      width: 100%;
    }
    
    .mat-mdc-cell {
      padding: 8px 4px;
    }
    
    .status-chip {
      padding: 4px 8px;
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
    
    .amenities-container {
      max-width: 200px;
    }
    
    mat-paginator {
      margin-top: 0;
    }
    
    .no-data {
      text-align: center;
      padding: 16px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class RoomListComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  
  filterForm: FormGroup;
  rooms: Room[] = [];
  loading = false;
  displayedColumns: string[] = ['roomNumber', 'type', 'price', 'capacity', 'status', 'floor', 'amenities', 'actions'];
  floors: number[] = [1, 2, 3, 4, 5]; // Example floors
  
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalRooms = 0;
  
  // Sorting
  currentSort: Sort = { active: 'roomNumber', direction: 'asc' };
  
  constructor() {
    this.filterForm = this.fb.group({
      search: [''],
      type: [''],
      status: [''],
      floor: ['']
    });
  }
  
  ngOnInit(): void {
    this.loadRooms();
  }
  
  loadRooms(): void {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    // Build query params
    const params: any = {
      page: this.currentPage,
      size: this.pageSize,
      sort: `${this.currentSort.active},${this.currentSort.direction}`
    };
    
    // Add filter params if they exist
    const filters = this.filterForm.value;
    if (filters.search) params.search = filters.search;
    if (filters.type) params.type = filters.type;
    if (filters.status) params.status = filters.status;
    if (filters.floor) params.floor = filters.floor;
    
    this.http.get<any>(`${baseUrl}/rooms`, { params })
      .pipe(
        catchError(error => {
          console.error('Error loading rooms', error);
          this.snackBar.open('Failed to load rooms. Please try again later.', 'Close', { duration: 5000 });
          return of({ content: [], totalElements: 0 });
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        // Handle both paginated and non-paginated responses
        if (response.content && Array.isArray(response.content)) {
          this.rooms = response.content;
          this.totalRooms = response.totalElements || response.content.length;
        } else if (Array.isArray(response)) {
          this.rooms = response;
          this.totalRooms = response.length;
        } else {
          this.rooms = [];
          this.totalRooms = 0;
        }
      });
  }
  
  applyFilters(): void {
    this.currentPage = 0;
    this.loadRooms();
  }
  
  resetFilters(): void {
    this.filterForm.reset({
      search: '',
      type: '',
      status: '',
      floor: ''
    });
    this.currentPage = 0;
    this.loadRooms();
  }
  
  pageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRooms();
  }
  
  sortData(sort: Sort): void {
    this.currentSort = sort;
    this.loadRooms();
  }
  
  getStatusClass(status: string): string {
    switch (status) {
      case 'AVAILABLE': return 'status-available';
      case 'OCCUPIED': return 'status-occupied';
      case 'MAINTENANCE': return 'status-maintenance';
      default: return '';
    }
  }
  
  navigateToAddRoom(): void {
    this.router.navigate(['/rooms/new']);
  }
  
  viewRoom(room: Room): void {
    this.router.navigate(['/rooms', room.id]);
  }
  
  editRoom(room: Room): void {
    this.router.navigate(['/rooms', room.id, 'edit']);
  }
  
  confirmDeleteRoom(room: Room): void {
    if (confirm(`Are you sure you want to delete room ${room.roomNumber}?`)) {
      this.deleteRoom(room);
    }
  }
  
  deleteRoom(room: Room): void {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.delete(`${baseUrl}/rooms/${room.id}`)
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
          this.snackBar.open(`Room ${room.roomNumber} deleted successfully`, 'Close', { duration: 3000 });
          this.loadRooms();
        }
      });
  }
} 