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
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vip: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-guest-list',
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
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  template: `
    <div class="guest-list-container">
      <h1 class="mat-headline-4">Guest Management</h1>
      
      <div class="actions-bar">
        <button mat-raised-button color="primary" (click)="navigateToAddGuest()">
          <mat-icon>person_add</mat-icon> Add New Guest
        </button>
      </div>
      
      <mat-card class="filter-card">
        <mat-card-content>
          <form [formGroup]="filterForm">
            <div class="filter-row">
              <mat-form-field appearance="outline">
                <mat-label>Search</mat-label>
                <input matInput formControlName="search" placeholder="Name, email, phone...">
                <mat-icon matSuffix>search</mat-icon>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>VIP Status</mat-label>
                <mat-select formControlName="vip">
                  <mat-option value="">All Guests</mat-option>
                  <mat-option [value]="true">VIP Guests</mat-option>
                  <mat-option [value]="false">Regular Guests</mat-option>
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
        
        <table mat-table [dataSource]="guests" matSort (matSortChange)="sortData($event)">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
            <td mat-cell *matCellDef="let guest"> {{ guest.id }} </td>
          </ng-container>
          
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
            <td mat-cell *matCellDef="let guest"> 
              {{ guest.firstName }} {{ guest.lastName }}
              <mat-icon *ngIf="guest.vip" color="warn" class="vip-icon">star</mat-icon>
            </td>
          </ng-container>
          
          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>
            <td mat-cell *matCellDef="let guest"> {{ guest.email || 'Not provided' }} </td>
          </ng-container>
          
          <ng-container matColumnDef="phone">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>
            <td mat-cell *matCellDef="let guest"> {{ guest.phone || 'Not provided' }} </td>
          </ng-container>
          
          <ng-container matColumnDef="createdAt">
            <th mat-header-cell *matHeaderCellDef mat-sort-header> Created At </th>
            <td mat-cell *matCellDef="let guest"> {{ guest.createdAt | date }} </td>
          </ng-container>
          
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Actions </th>
            <td mat-cell *matCellDef="let guest">
              <button mat-icon-button color="primary" matTooltip="View Guest" (click)="viewGuest(guest)">
                <mat-icon>visibility</mat-icon>
              </button>
              <button mat-icon-button color="accent" matTooltip="Edit Guest" (click)="editGuest(guest)">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" matTooltip="Delete Guest" (click)="confirmDeleteGuest(guest)">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="viewGuest(row)" class="guest-row"></tr>
          
          <tr class="mat-row" *matNoDataRow>
            <td class="mat-cell no-data" [attr.colspan]="displayedColumns.length">
              No guests found matching the filter criteria
            </td>
          </tr>
        </table>
        
        <mat-paginator 
          [length]="totalGuests"
          [pageSize]="pageSize"
          [pageSizeOptions]="[10, 25, 50, 100]"
          (page)="pageChange($event)">
        </mat-paginator>
      </div>
    </div>
  `,
  styles: [`
    .guest-list-container {
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
    
    .vip-icon {
      font-size: 16px;
      height: 16px;
      width: 16px;
      vertical-align: middle;
      margin-left: 4px;
    }
    
    .guest-row {
      cursor: pointer;
    }
    
    .guest-row:hover {
      background-color: rgba(0, 0, 0, 0.04);
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
export class GuestListComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  
  filterForm: FormGroup;
  guests: Guest[] = [];
  loading = false;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'createdAt', 'actions'];
  
  // Pagination
  currentPage = 0;
  pageSize = 10;
  totalGuests = 0;
  
  // Sorting
  currentSort: Sort = { active: 'id', direction: 'desc' };
  
  constructor() {
    this.filterForm = this.fb.group({
      search: [''],
      vip: ['']
    });
  }
  
  ngOnInit(): void {
    this.loadGuests();
  }
  
  loadGuests(): void {
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
    if (filters.vip !== '') params.vip = filters.vip;
    
    this.http.get<any>(`${baseUrl}/guests`, { params })
      .pipe(
        catchError(error => {
          console.error('Error loading guests', error);
          this.snackBar.open('Failed to load guests. Please try again later.', 'Close', { duration: 5000 });
          return of({ content: [], totalElements: 0 });
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(response => {
        // Handle both paginated and non-paginated responses
        if (response.content && Array.isArray(response.content)) {
          this.guests = response.content;
          this.totalGuests = response.totalElements || response.content.length;
        } else if (Array.isArray(response)) {
          this.guests = response;
          this.totalGuests = response.length;
        } else {
          this.guests = [];
          this.totalGuests = 0;
        }
      });
  }
  
  applyFilters(): void {
    this.currentPage = 0;
    this.loadGuests();
  }
  
  resetFilters(): void {
    this.filterForm.reset({
      search: '',
      vip: ''
    });
    this.currentPage = 0;
    this.loadGuests();
  }
  
  pageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadGuests();
  }
  
  sortData(sort: Sort): void {
    this.currentSort = sort;
    this.loadGuests();
  }
  
  navigateToAddGuest(): void {
    this.router.navigate(['/guests/new']);
  }
  
  viewGuest(guest: Guest): void {
    this.router.navigate(['/guests', guest.id]);
  }
  
  editGuest(guest: Guest): void {
    event?.stopPropagation(); // Prevent row click navigation
    this.router.navigate(['/guests', guest.id, 'edit']);
  }
  
  confirmDeleteGuest(guest: Guest): void {
    event?.stopPropagation(); // Prevent row click navigation
    if (confirm(`Are you sure you want to delete guest ${guest.firstName} ${guest.lastName}?`)) {
      this.deleteGuest(guest);
    }
  }
  
  deleteGuest(guest: Guest): void {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    
    this.http.delete(`${baseUrl}/guests/${guest.id}`)
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
          this.snackBar.open(`Guest ${guest.firstName} ${guest.lastName} deleted successfully`, 'Close', { duration: 3000 });
          this.loadGuests();
        }
      });
  }
} 