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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

interface Reservation {
  id: number;
  guestId: number;
  roomId: number;
  roomNumber: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  createdAt: string;
}

@Component({
  selector: 'app-reservation-list',
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  template: `
    <div class="reservation-list-container">
      <h1 class="mat-headline-4">Reservation Management</h1>
      
      <div class="actions-bar">
        <button mat-raised-button color="primary" (click)="navigateToAddReservation()">
          <mat-icon>add</mat-icon> New Reservation
        </button>
      </div>
      
      <mat-card class="filter-card">
        <mat-card-content>
          <form [formGroup]="filterForm">
            <div class="filter-row">
              <mat-form-field appearance="outline">
                <mat-label>Search</mat-label>
                <input matInput formControlName="search" placeholder="Guest name, room...">
                <mat-icon matSuffix>search</mat-icon>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Status</mat-label>
                <mat-select formControlName="status">
                  <mat-option value="">All Statuses</mat-option>
                  <mat-option value="CONFIRMED">Confirmed</mat-option>
                  <mat-option value="PENDING">Pending</mat-option>
                  <mat-option value="CHECKED_IN">Checked In</mat-option>
                  <mat-option value="CHECKED_OUT">Checked Out</mat-option>
                  <mat-option value="CANCELLED">Cancelled</mat-option>
                </mat-select>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Payment Status</mat-label>
                <mat-select formControlName="paymentStatus">
                  <mat-option value="">All Payment Statuses</mat-option>
                  <mat-option value="PAID">Paid</mat-option>
                  <mat-option value="PENDING">Pending</mat-option>
                  <mat-option value="PARTIAL">Partial Payment</mat-option>
                  <mat-option value="CANCELLED">Cancelled</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            
            <div class="filter-row">
              <mat-form-field appearance="outline">
                <mat-label>Check-in Date From</mat-label>
                <input matInput [matDatepicker]="checkInFromPicker" formControlName="checkInDateFrom">
                <mat-datepicker-toggle matIconSuffix [for]="checkInFromPicker"></mat-datepicker-toggle>
                <mat-datepicker #checkInFromPicker></mat-datepicker>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Check-in Date To</mat-label>
                <input matInput [matDatepicker]="checkInToPicker" formControlName="checkInDateTo">
                <mat-datepicker-toggle matIconSuffix [for]="checkInToPicker"></mat-datepicker-toggle>
                <mat-datepicker #checkInToPicker></mat-datepicker>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Check-out Date From</mat-label>
                <input matInput [matDatepicker]="checkOutFromPicker" formControlName="checkOutDateFrom">
                <mat-datepicker-toggle matIconSuffix [for]="checkOutFromPicker"></mat-datepicker-toggle>
                <mat-datepicker #checkOutFromPicker></mat-datepicker>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Check-out Date To</mat-label>
                <input matInput [matDatepicker]="checkOutToPicker" formControlName="checkOutDateTo">
                <mat-datepicker-toggle matIconSuffix [for]="checkOutToPicker"></mat-datepicker-toggle>
                <mat-datepicker #checkOutToPicker></mat-datepicker>
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
        
        <table mat-table [dataSource]="reservations" matSort (matSortChange)="sortData($event)">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.id }} </td>
          </ng-container>
          
          <ng-container matColumnDef="guestName">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Guest </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.guestName }} </td>
          </ng-container>
          
          <ng-container matColumnDef="roomNumber">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Room </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.roomNumber }} </td>
          </ng-container>
          
          <ng-container matColumnDef="checkInDate">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Check-in </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.checkInDate | date }} </td>
          </ng-container>
          
          <ng-container matColumnDef="checkOutDate">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Check-out </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.checkOutDate | date }} </td>
          </ng-container>
          
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
            <td mat-cell *matCellDef="let reservation">
              <span class="status-chip" [ngClass]="getStatusClass(reservation.status)">
                {{ reservation.status }}
              </span>
            </td>
          </ng-container>
          
          <ng-container matColumnDef="paymentStatus">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Payment </th>
            <td mat-cell *matCellDef="let reservation">
              <span class="payment-chip" [ngClass]="getPaymentStatusClass(reservation.paymentStatus)">
                {{ reservation.paymentStatus }}
              </span>
            </td>
          </ng-container>
          
          <ng-container matColumnDef="totalAmount">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>
            <td mat-cell *matCellDef="let reservation"> {{ reservation.totalAmount | currency }} </td>
          </ng-container>
          
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Actions </th>
            <td mat-cell *matCellDef="let reservation">
              <button mat-icon-button color="primary" matTooltip="View Details" (click)="viewReservation(reservation)">
                <mat-icon>visibility</mat-icon>
              </button>
              <button mat-icon-button color="accent" matTooltip="Edit Reservation" (click)="editReservation(reservation)">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" matTooltip="Cancel Reservation" 
                (click)="confirmCancelReservation(reservation)" 
                *ngIf="reservation.status !== 'CANCELLED' && reservation.status !== 'CHECKED_OUT'">
                <mat-icon>cancel</mat-icon>
              </button>
              <button mat-icon-button color="primary" matTooltip="Check In" 
                (click)="checkInReservation(reservation)" 
                *ngIf="reservation.status === 'CONFIRMED'">
                <mat-icon>login</mat-icon>
              </button>
              <button mat-icon-button color="primary" matTooltip="Check Out" 
                (click)="checkOutReservation(reservation)" 
                *ngIf="reservation.status === 'CHECKED_IN'">
                <mat-icon>logout</mat-icon>
              </button>
            </td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="viewReservation(row)" class="reservation-row"></tr>
          
          <tr class="mat-row" *matNoDataRow>
            <td class="mat-cell no-data" [attr.colspan]="displayedColumns.length">
              No reservations found matching the filter criteria
            </td>
          </tr>
        </table>
        
        <mat-paginator 
          [length]="totalReservations"
          [pageSize]="pageSize"
          [pageSizeOptions]="[10, 25, 50, 100]"
          (page)="pageChange($event)">
        </mat-paginator>
      </div>
    </div>
  `,
  styles: [`
    .reservation-list-container {
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
      margin-bottom: 16px;
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
    
    .reservation-row {
      cursor: pointer;
    }
    
    .reservation-row:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    
    .status-chip, .payment-chip {
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 12px;
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
export class ReservationListComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  
  filterForm: FormGroup;
  reservations: Reservation[] = [];
  loading = false;
  displayedColumns: string[] = ['id', 'guestName', 'roomNumber', 'checkInDate', 'checkOutDate', 'status', 'paymentStatus', 'totalAmount', 'actions'];
  
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalReservations = 0;
  
  // Sorting
  currentSort: Sort = { active: 'checkInDate', direction: 'asc' };
  
  constructor() {
    this.filterForm = this.fb.group({
      search: [''],
      status: [''],
      paymentStatus: [''],
      checkInDateFrom: [null],
      checkInDateTo: [null],
      checkOutDateFrom: [null],
      checkOutDateTo: [null]
    });
  }
  
  ngOnInit(): void {
    this.loadReservations();
  }
  
  loadReservations(): void {
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
    if (filters.status) params.status = filters.status;
    if (filters.paymentStatus) params.paymentStatus = filters.paymentStatus;
    
    // Format dates for API
    if (filters.checkInDateFrom) {
      params.checkInDateFrom = this.formatDate(filters.checkInDateFrom);
    }
    if (filters.checkInDateTo) {
      params.checkInDateTo = this.formatDate(filters.checkInDateTo);
    }
    if (filters.checkOutDateFrom) {
      params.checkOutDateFrom = this.formatDate(filters.checkOutDateFrom);
    }
    if (filters.checkOutDateTo) {
      params.checkOutDateTo = this.formatDate(filters.checkOutDateTo);
    }
    
    this.http.get<any>(`${baseUrl}/reservations`, { params })
      .pipe(
        catchError(error => {
          console.error('Error loading reservations', error);
          this.snackBar.open('Failed to load reservations. Please try again later.', 'Close', { duration: 5000 });
          return of({ content: [], totalElements: 0 });
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        // Handle both paginated and non-paginated responses
        if (response.content && Array.isArray(response.content)) {
          this.reservations = response.content;
          this.totalReservations = response.totalElements || response.content.length;
        } else if (Array.isArray(response)) {
          this.reservations = response;
          this.totalReservations = response.length;
        } else {
          this.reservations = [];
          this.totalReservations = 0;
        }
      });
  }
  
  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  applyFilters(): void {
    this.currentPage = 0;
    this.loadReservations();
  }
  
  resetFilters(): void {
    this.filterForm.reset({
      search: '',
      status: '',
      paymentStatus: '',
      checkInDateFrom: null,
      checkInDateTo: null,
      checkOutDateFrom: null,
      checkOutDateTo: null
    });
    this.currentPage = 0;
    this.loadReservations();
  }
  
  pageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReservations();
  }
  
  sortData(sort: Sort): void {
    this.currentSort = sort;
    this.loadReservations();
  }
  
  getStatusClass(status: string): string {
    status = status.toLowerCase().replace(/_/g, '-');
    return `status-${status}`;
  }
  
  getPaymentStatusClass(status: string): string {
    status = status.toLowerCase().replace(/_/g, '-');
    return `payment-${status}`;
  }
  
  navigateToAddReservation(): void {
    this.router.navigate(['/reservations/new']);
  }
  
  viewReservation(reservation: Reservation): void {
    this.router.navigate(['/reservations', reservation.id]);
  }
  
  editReservation(reservation: Reservation): void {
    event?.stopPropagation(); // Prevent row click navigation
    this.router.navigate(['/reservations', reservation.id, 'edit']);
  }
  
  confirmCancelReservation(reservation: Reservation): void {
    event?.stopPropagation(); // Prevent row click navigation
    if (confirm(`Are you sure you want to cancel reservation #${reservation.id}?`)) {
      this.updateReservationStatus(reservation.id, 'CANCELLED');
    }
  }
  
  checkInReservation(reservation: Reservation): void {
    event?.stopPropagation(); // Prevent row click navigation
    this.updateReservationStatus(reservation.id, 'CHECKED_IN');
  }
  
  checkOutReservation(reservation: Reservation): void {
    event?.stopPropagation(); // Prevent row click navigation
    this.updateReservationStatus(reservation.id, 'CHECKED_OUT');
  }
  
  updateReservationStatus(reservationId: number, status: string): void {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.patch<Reservation>(`${baseUrl}/reservations/${reservationId}/status`, { status })
      .pipe(
        catchError(error => {
          console.error(`Error updating reservation status to ${status}`, error);
          this.snackBar.open(`Failed to update reservation status. Please try again later.`, 'Close', { duration: 5000 });
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        if (response !== null) {
          const statusText = status.replace(/_/g, ' ').toLowerCase();
          this.snackBar.open(`Reservation successfully ${statusText}`, 'Close', { duration: 3000 });
          this.loadReservations();
        }
      });
  }
} 