import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice } from '../../../core/models/invoice.model';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule
  ],
  template: `
    <div class="container" *ngIf="invoice">
      <div class="header">
        <div class="title">
          <h1>Invoice #{{ invoice.invoiceNumber }}</h1>
          <span [ngClass]="getStatusClass(invoice.status)" class="status-badge">{{ invoice.status }}</span>
        </div>
        <div class="actions">
          <button mat-raised-button color="primary" [routerLink]="['/invoices', invoice.id, 'edit']">
            <mat-icon>edit</mat-icon> Edit
          </button>
          <button mat-raised-button color="accent" (click)="printInvoice()">
            <mat-icon>print</mat-icon> Print
          </button>
          <button mat-raised-button color="warn" (click)="deleteInvoice()">
            <mat-icon>delete</mat-icon> Delete
          </button>
        </div>
      </div>

      <div class="content">
        <mat-card>
          <mat-card-content>
            <div class="invoice-header">
              <div class="hotel-info">
                <h2>Hotel Name</h2>
                <p>123 Hotel Street</p>
                <p>City, State ZIP</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info&#64;hotel.com</p>
              </div>
              <div class="invoice-info">
                <p><strong>Invoice #:</strong> {{ invoice.invoiceNumber }}</p>
                <p><strong>Issue Date:</strong> {{ invoice.issueDate | date:'mediumDate' }}</p>
                <p><strong>Due Date:</strong> {{ invoice.dueDate | date:'mediumDate' }}</p>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="billing-info">
              <div class="guest-info">
                <h3>Bill To:</h3>
                <p><strong>{{ invoice.guestName }}</strong></p>
                <p>{{ invoice.guestEmail }}</p>
                <p>{{ invoice.guestPhone }}</p>
                <p>{{ invoice.guestAddress }}</p>
              </div>
              <div class="reservation-info">
                <h3>Reservation Details:</h3>
                <p><strong>Room:</strong> {{ invoice.roomNumber }}</p>
                <p><strong>Check-in:</strong> {{ invoice.checkInDate | date:'mediumDate' }}</p>
                <p><strong>Check-out:</strong> {{ invoice.checkOutDate | date:'mediumDate' }}</p>
                <p><strong>Stay Duration:</strong> {{ invoice.stayDuration }} nights</p>
              </div>
            </div>

            <div class="invoice-items">
              <h3>Invoice Items</h3>
              <table mat-table [dataSource]="invoice.items" class="items-table">
                <!-- Description Column -->
                <ng-container matColumnDef="description">
                  <th mat-header-cell *matHeaderCellDef>Description</th>
                  <td mat-cell *matCellDef="let item">{{ item.description }}</td>
                  <td mat-footer-cell *matFooterCellDef>Total</td>
                </ng-container>

                <!-- Quantity Column -->
                <ng-container matColumnDef="quantity">
                  <th mat-header-cell *matHeaderCellDef>Quantity</th>
                  <td mat-cell *matCellDef="let item">{{ item.quantity }}</td>
                  <td mat-footer-cell *matFooterCellDef></td>
                </ng-container>

                <!-- Unit Price Column -->
                <ng-container matColumnDef="unitPrice">
                  <th mat-header-cell *matHeaderCellDef>Unit Price</th>
                  <td mat-cell *matCellDef="let item">{{ item.unitPrice | currency }}</td>
                  <td mat-footer-cell *matFooterCellDef></td>
                </ng-container>

                <!-- Amount Column -->
                <ng-container matColumnDef="amount">
                  <th mat-header-cell *matHeaderCellDef>Amount</th>
                  <td mat-cell *matCellDef="let item">{{ item.amount | currency }}</td>
                  <td mat-footer-cell *matFooterCellDef>{{ invoice.totalAmount | currency }}</td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>
              </table>

              <div class="payment-summary">
                <div class="summary-row">
                  <span>Subtotal:</span>
                  <span>{{ invoice.subtotal | currency }}</span>
                </div>
                <div class="summary-row">
                  <span>Tax ({{ invoice.taxRate }}%):</span>
                  <span>{{ invoice.taxAmount | currency }}</span>
                </div>
                <div class="summary-row total">
                  <span>Total:</span>
                  <span>{{ invoice.totalAmount | currency }}</span>
                </div>
                <div class="summary-row" *ngIf="invoice.amountPaid > 0">
                  <span>Amount Paid:</span>
                  <span>{{ invoice.amountPaid | currency }}</span>
                </div>
                <div class="summary-row balance" *ngIf="invoice.balanceDue > 0">
                  <span>Balance Due:</span>
                  <span>{{ invoice.balanceDue | currency }}</span>
                </div>
              </div>
            </div>

            <div class="notes">
              <h3>Notes</h3>
              <p>{{ invoice.notes || 'No notes available' }}</p>
            </div>

            <div class="payment-info">
              <h3>Payment Methods</h3>
              <p>Credit Card, Cash, Bank Transfer</p>
              <p>Account details: Bank Account #1234567890</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

    <div class="loading" *ngIf="!invoice">
      Loading invoice...
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
    .title {
      display: flex;
      align-items: center;
    }
    .status-badge {
      padding: 5px 10px;
      border-radius: 4px;
      margin-left: 10px;
      font-weight: bold;
    }
    .actions button {
      margin-left: 10px;
    }
    .content {
      margin-bottom: 30px;
    }
    .invoice-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .billing-info {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    .guest-info, .reservation-info {
      width: 48%;
    }
    .invoice-items {
      margin: 20px 0;
    }
    .items-table {
      width: 100%;
    }
    .payment-summary {
      width: 300px;
      margin-left: auto;
      margin-top: 20px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
    .total, .balance {
      font-weight: bold;
      font-size: 1.1em;
      border-top: 1px solid #ccc;
      padding-top: 10px;
      margin-top: 5px;
    }
    .notes, .payment-info {
      margin-top: 20px;
    }
    .status-paid {
      background-color: #d4edda;
      color: #155724;
    }
    .status-unpaid {
      background-color: #f8d7da;
      color: #721c24;
    }
    .status-partially-paid {
      background-color: #fff3cd;
      color: #856404;
    }
    .mat-column-description {
      flex: 2;
    }
    .mat-column-quantity, .mat-column-unitPrice, .mat-column-amount {
      flex: 1;
    }
  `]
})
export class InvoiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private invoiceService = inject(InvoiceService);
  private dialog = inject(MatDialog);

  invoice: Invoice | null = null;
  displayedColumns: string[] = ['description', 'quantity', 'unitPrice', 'amount'];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadInvoice(id);
      }
    });
  }

  loadInvoice(id: string): void {
    this.invoiceService.getInvoiceById(id).subscribe(
      invoice => {
        this.invoice = invoice;
      },
      error => {
        console.error('Error loading invoice:', error);
        // Handle error, e.g., redirect to not found page
      }
    );
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

  printInvoice(): void {
    window.print();
  }

  deleteInvoice(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Invoice',
        message: 'Are you sure you want to delete this invoice? This action cannot be undone.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.invoice && this.invoice.id) {
        this.invoiceService.deleteInvoice(this.invoice.id).subscribe(
          () => {
            this.router.navigate(['/invoices']);
          },
          (error: any) => {
            console.error('Error deleting invoice:', error);
            // Handle error
          }
        );
      }
    });
  }
} 