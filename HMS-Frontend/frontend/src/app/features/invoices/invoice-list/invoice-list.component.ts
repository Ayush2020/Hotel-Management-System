import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice } from '../../../core/models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <h1>Invoices</h1>
        <button mat-raised-button color="primary" routerLink="new">
          <mat-icon>add</mat-icon> Create Invoice
        </button>
      </div>

      <mat-card>
        <mat-card-content>
          <mat-form-field appearance="outline" class="search-field">
            <mat-label>Search</mat-label>
            <input matInput [formControl]="searchControl" placeholder="Search invoices...">
            <mat-icon matSuffix>search</mat-icon>
          </mat-form-field>

          <div class="mat-elevation-z8 table-container">
            <table mat-table [dataSource]="invoices" matSort (matSortChange)="sortData($event)">
              <!-- Invoice Number Column -->
              <ng-container matColumnDef="invoiceNumber">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Invoice #</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.invoiceNumber }}</td>
              </ng-container>

              <!-- Guest Name Column -->
              <ng-container matColumnDef="guestName">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Guest</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.guestName }}</td>
              </ng-container>

              <!-- Room Number Column -->
              <ng-container matColumnDef="roomNumber">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Room</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.roomNumber }}</td>
              </ng-container>

              <!-- Issue Date Column -->
              <ng-container matColumnDef="issueDate">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Issue Date</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.issueDate | date:'mediumDate' }}</td>
              </ng-container>

              <!-- Due Date Column -->
              <ng-container matColumnDef="dueDate">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Date</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.dueDate | date:'mediumDate' }}</td>
              </ng-container>

              <!-- Amount Column -->
              <ng-container matColumnDef="totalAmount">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>
                <td mat-cell *matCellDef="let invoice">{{ invoice.totalAmount | currency }}</td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                <td mat-cell *matCellDef="let invoice" [ngClass]="getStatusClass(invoice.status)">
                  {{ invoice.status }}
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let invoice">
                  <button mat-icon-button [routerLink]="[invoice.id]" matTooltip="View">
                    <mat-icon>visibility</mat-icon>
                  </button>
                  <button mat-icon-button [routerLink]="[invoice.id, 'edit']" matTooltip="Edit">
                    <mat-icon>edit</mat-icon>
                  </button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"
                  [routerLink]="[row.id]" class="clickable-row"></tr>
            </table>

            <mat-paginator [length]="totalInvoices"
                          [pageSize]="pageSize"
                          [pageSizeOptions]="[5, 10, 25, 50]"
                          (page)="handlePageEvent($event)">
            </mat-paginator>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .search-field {
      width: 100%;
      margin-bottom: 20px;
    }
    .table-container {
      position: relative;
      min-height: 400px;
      overflow: auto;
    }
    table {
      width: 100%;
    }
    .clickable-row {
      cursor: pointer;
    }
    .clickable-row:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    .status-paid {
      color: green;
      font-weight: bold;
    }
    .status-unpaid {
      color: red;
      font-weight: bold;
    }
    .status-partially-paid {
      color: orange;
      font-weight: bold;
    }
  `]
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  displayedColumns: string[] = ['invoiceNumber', 'guestName', 'roomNumber', 'issueDate', 'dueDate', 'totalAmount', 'status', 'actions'];
  totalInvoices: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  searchControl = new FormControl('');

  private invoiceService = inject(InvoiceService);

  ngOnInit(): void {
    this.loadInvoices();
    
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.pageIndex = 0;
      this.loadInvoices();
    });
  }

  loadInvoices(): void {
    const searchTerm = this.searchControl.value || '';
    this.invoiceService.getInvoices(this.pageIndex, this.pageSize, searchTerm)
      .subscribe((result: {invoices: Invoice[], total: number}) => {
        this.invoices = result.invoices;
        this.totalInvoices = result.total;
      });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadInvoices();
  }

  sortData(sort: Sort): void {
    // Handle sorting logic here
    this.loadInvoices();
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'status-paid';
      case 'unpaid':
        return 'status-unpaid';
      case 'partially paid':
        return 'status-partially-paid';
      default:
        return '';
    }
  }
} 