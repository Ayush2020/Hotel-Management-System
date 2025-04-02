import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InvoiceService } from '../../../core/services/invoice.service';
import { GuestService } from '../../../core/services/guest.service';
import { RoomService } from '../../../core/services/room.service';
import { ReservationService } from '../../../core/services/reservation.service';
import { Invoice } from '../../../core/models/invoice.model';
import { Guest } from '../../../core/models/guest.model';
import { Room } from '../../../core/models/room.model';
import { Reservation } from '../../../core/models/reservation.model';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatAutocompleteModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ isEditMode ? 'Edit Invoice' : 'Create New Invoice' }}</h1>
        <button mat-button color="primary" routerLink="/invoices">
          <mat-icon>arrow_back</mat-icon> Back to Invoices
        </button>
      </div>

      <mat-card>
        <mat-card-content>
          <form [formGroup]="invoiceForm" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h2>Basic Information</h2>
              <div class="row">
                <mat-form-field appearance="outline">
                  <mat-label>Invoice Number</mat-label>
                  <input matInput formControlName="invoiceNumber" placeholder="INV-00001">
                  <mat-error *ngIf="invoiceForm.get('invoiceNumber')?.hasError('required')">
                    Invoice number is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Issue Date</mat-label>
                  <input matInput [matDatepicker]="issueDatePicker" formControlName="issueDate">
                  <mat-datepicker-toggle matSuffix [for]="issueDatePicker"></mat-datepicker-toggle>
                  <mat-datepicker #issueDatePicker></mat-datepicker>
                  <mat-error *ngIf="invoiceForm.get('issueDate')?.hasError('required')">
                    Issue date is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Due Date</mat-label>
                  <input matInput [matDatepicker]="dueDatePicker" formControlName="dueDate">
                  <mat-datepicker-toggle matSuffix [for]="dueDatePicker"></mat-datepicker-toggle>
                  <mat-datepicker #dueDatePicker></mat-datepicker>
                  <mat-error *ngIf="invoiceForm.get('dueDate')?.hasError('required')">
                    Due date is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Status</mat-label>
                  <mat-select formControlName="status">
                    <mat-option value="Unpaid">Unpaid</mat-option>
                    <mat-option value="Partially Paid">Partially Paid</mat-option>
                    <mat-option value="Paid">Paid</mat-option>
                  </mat-select>
                  <mat-error *ngIf="invoiceForm.get('status')?.hasError('required')">
                    Status is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <h2>Reservation Details</h2>
              <div class="row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Reservation</mat-label>
                  <mat-select formControlName="reservationId" (selectionChange)="onReservationChange($event.value)">
                    <mat-option *ngFor="let reservation of reservations" [value]="reservation.id">
                      {{ reservation.id }} - {{ reservation.guestName }} ({{ reservation.checkInDate | date }} to {{ reservation.checkOutDate | date }})
                    </mat-option>
                  </mat-select>
                </mat-form-field>
              </div>

              <div class="row">
                <mat-form-field appearance="outline">
                  <mat-label>Guest</mat-label>
                  <input matInput formControlName="guestName" [matAutocomplete]="autoGuest">
                  <mat-autocomplete #autoGuest="matAutocomplete" [displayWith]="displayGuest">
                    <mat-option *ngFor="let guest of filteredGuests | async" [value]="guest">
                      {{ guest.firstName }} {{ guest.lastName }}
                    </mat-option>
                  </mat-autocomplete>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Room</mat-label>
                  <input matInput formControlName="roomNumber" [matAutocomplete]="autoRoom">
                  <mat-autocomplete #autoRoom="matAutocomplete" [displayWith]="displayRoom">
                    <mat-option *ngFor="let room of filteredRooms | async" [value]="room">
                      {{ room.roomNumber }} - {{ room.type }}
                    </mat-option>
                  </mat-autocomplete>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Check-in Date</mat-label>
                  <input matInput [matDatepicker]="checkInPicker" formControlName="checkInDate">
                  <mat-datepicker-toggle matSuffix [for]="checkInPicker"></mat-datepicker-toggle>
                  <mat-datepicker #checkInPicker></mat-datepicker>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Check-out Date</mat-label>
                  <input matInput [matDatepicker]="checkOutPicker" formControlName="checkOutDate">
                  <mat-datepicker-toggle matSuffix [for]="checkOutPicker"></mat-datepicker-toggle>
                  <mat-datepicker #checkOutPicker></mat-datepicker>
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <div class="section-header">
                <h2>Invoice Items</h2>
                <button type="button" mat-raised-button color="primary" (click)="addItem()">
                  <mat-icon>add</mat-icon> Add Item
                </button>
              </div>

              <table mat-table [dataSource]="itemsFormArray.controls" class="items-table">
                <!-- Description Column -->
                <ng-container matColumnDef="description">
                  <th mat-header-cell *matHeaderCellDef>Description</th>
                  <td mat-cell *matCellDef="let itemControl; let i = index">
                    <mat-form-field appearance="outline">
                      <input matInput [formControl]="getFormControl(itemControl, 'description')" placeholder="Room charge, Service, etc.">
                    </mat-form-field>
                  </td>
                </ng-container>

                <!-- Quantity Column -->
                <ng-container matColumnDef="quantity">
                  <th mat-header-cell *matHeaderCellDef>Quantity</th>
                  <td mat-cell *matCellDef="let itemControl; let i = index">
                    <mat-form-field appearance="outline">
                      <input matInput type="number" [formControl]="getFormControl(itemControl, 'quantity')" min="1" (input)="updateItemAmount(i)">
                    </mat-form-field>
                  </td>
                </ng-container>

                <!-- Unit Price Column -->
                <ng-container matColumnDef="unitPrice">
                  <th mat-header-cell *matHeaderCellDef>Unit Price</th>
                  <td mat-cell *matCellDef="let itemControl; let i = index">
                    <mat-form-field appearance="outline">
                      <input matInput type="number" [formControl]="getFormControl(itemControl, 'unitPrice')" min="0" step="0.01" (input)="updateItemAmount(i)">
                    </mat-form-field>
                  </td>
                </ng-container>

                <!-- Amount Column -->
                <ng-container matColumnDef="amount">
                  <th mat-header-cell *matHeaderCellDef>Amount</th>
                  <td mat-cell *matCellDef="let itemControl; let i = index">
                    <mat-form-field appearance="outline">
                      <input matInput type="number" [formControl]="getFormControl(itemControl, 'amount')" readonly>
                    </mat-form-field>
                  </td>
                </ng-container>

                <!-- Actions Column -->
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef>Actions</th>
                  <td mat-cell *matCellDef="let itemControl; let i = index">
                    <button type="button" mat-icon-button color="warn" (click)="removeItem(i)">
                      <mat-icon>delete</mat-icon>
                    </button>
                  </td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
              </table>
            </div>

            <div class="form-section">
              <h2>Payment Summary</h2>
              <div class="row">
                <mat-form-field appearance="outline">
                  <mat-label>Subtotal</mat-label>
                  <input matInput formControlName="subtotal" readonly>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Tax Rate (%)</mat-label>
                  <input matInput type="number" formControlName="taxRate" min="0" max="100" (input)="updateTotals()">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Tax Amount</mat-label>
                  <input matInput formControlName="taxAmount" readonly>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Total Amount</mat-label>
                  <input matInput formControlName="totalAmount" readonly>
                </mat-form-field>
              </div>

              <div class="row" *ngIf="invoiceForm.get('status')?.value !== 'Unpaid'">
                <mat-form-field appearance="outline">
                  <mat-label>Amount Paid</mat-label>
                  <input matInput type="number" formControlName="amountPaid" min="0" (input)="updateBalanceDue()">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Balance Due</mat-label>
                  <input matInput formControlName="balanceDue" readonly>
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <h2>Notes</h2>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Notes</mat-label>
                <textarea matInput formControlName="notes" rows="4" placeholder="Add any notes or special instructions here"></textarea>
              </mat-form-field>
            </div>

            <div class="actions">
              <button mat-button routerLink="/invoices">Cancel</button>
              <button type="submit" mat-raised-button color="primary" [disabled]="invoiceForm.invalid">
                {{ isEditMode ? 'Update Invoice' : 'Create Invoice' }}
              </button>
            </div>
          </form>
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
    .form-section {
      margin-bottom: 30px;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .row mat-form-field {
      flex: 1;
      min-width: 200px;
    }
    .full-width {
      width: 100%;
    }
    .items-table {
      width: 100%;
    }
    .mat-column-description {
      min-width: 250px;
    }
    .mat-column-quantity, .mat-column-unitPrice, .mat-column-amount {
      min-width: 150px;
    }
    .mat-column-actions {
      width: 70px;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;
    }
  `]
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  isEditMode = false;
  invoiceId: string | null = null;
  reservations: Reservation[] = [];
  guests: Guest[] = [];
  rooms: Room[] = [];
  filteredGuests: Observable<Guest[]> = of([]);
  filteredRooms: Observable<Room[]> = of([]);
  displayedColumns: string[] = ['description', 'quantity', 'unitPrice', 'amount', 'actions'];

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private invoiceService = inject(InvoiceService);
  private guestService = inject(GuestService);
  private roomService = inject(RoomService);
  private reservationService = inject(ReservationService);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.invoiceForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadData();
    
    this.route.paramMap.subscribe(params => {
      this.invoiceId = params.get('id');
      if (this.invoiceId) {
        this.isEditMode = true;
        this.loadInvoice(this.invoiceId);
      } else {
        // Initialize with one item for new invoices
        this.addItem();
      }
    });

    this.setupAutocomplete();
  }

  createForm(): FormGroup {
    return this.fb.group({
      invoiceNumber: ['', Validators.required],
      issueDate: [new Date(), Validators.required],
      dueDate: [new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), Validators.required], // 14 days from now
      status: ['Unpaid', Validators.required],
      reservationId: [''],
      guestName: ['', Validators.required],
      guestEmail: [''],
      guestPhone: [''],
      guestAddress: [''],
      roomNumber: ['', Validators.required],
      checkInDate: [null],
      checkOutDate: [null],
      stayDuration: [0],
      items: this.fb.array([]),
      subtotal: [0],
      taxRate: [10], // Default tax rate
      taxAmount: [0],
      totalAmount: [0],
      amountPaid: [0],
      balanceDue: [0],
      notes: ['']
    });
  }

  get itemsFormArray(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      amount: [0]
    });

    this.itemsFormArray.push(itemGroup);
    this.updateTotals();
  }

  removeItem(index: number): void {
    this.itemsFormArray.removeAt(index);
    this.updateTotals();
  }

  getFormControl(control: any, name: string): any {
    return control.get(name);
  }

  updateItemAmount(index: number): void {
    const items = this.itemsFormArray.controls;
    const item = items[index] as FormGroup;
    const quantity = item.get('quantity')?.value || 0;
    const unitPrice = item.get('unitPrice')?.value || 0;
    const amount = quantity * unitPrice;
    
    item.get('amount')?.setValue(amount, { emitEvent: false });
    this.updateTotals();
  }

  updateTotals(): void {
    // Calculate subtotal
    let subtotal = 0;
    for (const control of this.itemsFormArray.controls) {
      subtotal += control.get('amount')?.value || 0;
    }
    
    // Update form values
    const taxRate = this.invoiceForm.get('taxRate')?.value || 0;
    const taxAmount = subtotal * (taxRate / 100);
    const totalAmount = subtotal + taxAmount;
    
    this.invoiceForm.patchValue({
      subtotal: subtotal,
      taxAmount: taxAmount,
      totalAmount: totalAmount
    });
    
    this.updateBalanceDue();
  }

  updateBalanceDue(): void {
    const totalAmount = this.invoiceForm.get('totalAmount')?.value || 0;
    const amountPaid = this.invoiceForm.get('amountPaid')?.value || 0;
    const balanceDue = Math.max(0, totalAmount - amountPaid);
    
    this.invoiceForm.patchValue({
      balanceDue: balanceDue
    });
    
    // Update status based on payment
    if (amountPaid <= 0) {
      this.invoiceForm.get('status')?.setValue('Unpaid');
    } else if (amountPaid >= totalAmount) {
      this.invoiceForm.get('status')?.setValue('Paid');
    } else {
      this.invoiceForm.get('status')?.setValue('Partially Paid');
    }
  }

  loadData(): void {
    // Load reservations
    this.reservationService.getReservations(undefined, undefined, '').subscribe(
      (result: any) => {
        this.reservations = Array.isArray(result) ? result : result.reservations;
      }
    );
    
    // Load guests
    this.guestService.getGuests(undefined, undefined, '').subscribe(
      (result: any) => {
        this.guests = Array.isArray(result) ? result : result.guests;
      }
    );
    
    // Load rooms
    this.roomService.getRooms(undefined, undefined, '').subscribe(
      (result: any) => {
        this.rooms = Array.isArray(result) ? result : result.rooms;
      }
    );
  }

  loadInvoice(id: string): void {
    this.invoiceService.getInvoiceById(id).subscribe(
      (invoice: Invoice) => {
        // Clear existing items
        while (this.itemsFormArray.length) {
          this.itemsFormArray.removeAt(0);
        }
        
        // Add invoice items
        for (const item of invoice.items) {
          const itemGroup = this.fb.group({
            description: [item.description, Validators.required],
            quantity: [item.quantity, [Validators.required, Validators.min(1)]],
            unitPrice: [item.unitPrice, [Validators.required, Validators.min(0)]],
            amount: [item.amount]
          });
          this.itemsFormArray.push(itemGroup);
        }
        
        // Update the form with invoice data
        this.invoiceForm.patchValue({
          invoiceNumber: invoice.invoiceNumber,
          issueDate: new Date(invoice.issueDate),
          dueDate: new Date(invoice.dueDate),
          status: invoice.status,
          reservationId: invoice.reservationId,
          guestName: invoice.guestName,
          guestEmail: invoice.guestEmail,
          guestPhone: invoice.guestPhone,
          guestAddress: invoice.guestAddress,
          roomNumber: invoice.roomNumber,
          checkInDate: invoice.checkInDate ? new Date(invoice.checkInDate) : null,
          checkOutDate: invoice.checkOutDate ? new Date(invoice.checkOutDate) : null,
          stayDuration: invoice.stayDuration,
          subtotal: invoice.subtotal,
          taxRate: invoice.taxRate,
          taxAmount: invoice.taxAmount,
          totalAmount: invoice.totalAmount,
          amountPaid: invoice.amountPaid,
          balanceDue: invoice.balanceDue,
          notes: invoice.notes
        });
      },
      (error: any) => {
        console.error('Error loading invoice:', error);
        this.snackBar.open('Error loading invoice', 'Close', { duration: 3000 });
      }
    );
  }

  setupAutocomplete(): void {
    // Guest autocomplete
    this.filteredGuests = this.invoiceForm.get('guestName')!.valueChanges.pipe(
      startWith(''),
      map(value => this.filterGuests(value))
    );
    
    // Room autocomplete
    this.filteredRooms = this.invoiceForm.get('roomNumber')!.valueChanges.pipe(
      startWith(''),
      map(value => this.filterRooms(value))
    );
  }

  filterGuests(value: string | Guest): Guest[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.guests.filter(guest => 
      `${guest.firstName} ${guest.lastName}`.toLowerCase().includes(filterValue)
    );
  }

  filterRooms(value: string | Room): Room[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.rooms.filter(room => 
      room.roomNumber.toLowerCase().includes(filterValue) || 
      room.type.toLowerCase().includes(filterValue)
    );
  }

  displayGuest(guest: Guest): string {
    return guest ? `${guest.firstName} ${guest.lastName}` : '';
  }

  displayRoom(room: Room): string {
    return room ? `${room.roomNumber} - ${room.type}` : '';
  }

  onReservationChange(reservationId: string): void {
    const reservation = this.reservations.find(r => r.id === reservationId);
    if (reservation) {
      // Populate form with reservation details
      this.invoiceForm.patchValue({
        guestName: reservation.guestName,
        roomNumber: reservation.roomNumber,
        checkInDate: new Date(reservation.checkInDate),
        checkOutDate: new Date(reservation.checkOutDate),
        stayDuration: this.calculateStayDuration(reservation.checkInDate, reservation.checkOutDate)
      });
      
      // Clear existing items
      while (this.itemsFormArray.length) {
        this.itemsFormArray.removeAt(0);
      }
      
      // Add room charge as an item
      const itemGroup = this.fb.group({
        description: [`Room Charge - ${reservation.roomNumber}`, Validators.required],
        quantity: [reservation.stayDuration, [Validators.required, Validators.min(1)]],
        unitPrice: [reservation.roomRate, [Validators.required, Validators.min(0)]],
        amount: [reservation.stayDuration * reservation.roomRate]
      });
      this.itemsFormArray.push(itemGroup);
      
      this.updateTotals();
    }
  }

  calculateStayDuration(checkIn: string | Date, checkOut: string | Date): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  onSubmit(): void {
    if (this.invoiceForm.invalid) {
      return;
    }
    
    const formValue = this.invoiceForm.value;
    
    // Map form values to Invoice model
    const invoice: Invoice = {
      id: this.invoiceId || undefined,
      invoiceNumber: formValue.invoiceNumber,
      issueDate: formValue.issueDate,
      dueDate: formValue.dueDate,
      status: formValue.status,
      reservationId: formValue.reservationId,
      guestName: typeof formValue.guestName === 'string' ? formValue.guestName : formValue.guestName.firstName + ' ' + formValue.guestName.lastName,
      guestEmail: formValue.guestEmail,
      guestPhone: formValue.guestPhone,
      guestAddress: formValue.guestAddress,
      roomNumber: typeof formValue.roomNumber === 'string' ? formValue.roomNumber : formValue.roomNumber.roomNumber,
      checkInDate: formValue.checkInDate,
      checkOutDate: formValue.checkOutDate,
      stayDuration: formValue.stayDuration,
      items: formValue.items,
      subtotal: formValue.subtotal,
      taxRate: formValue.taxRate,
      taxAmount: formValue.taxAmount,
      totalAmount: formValue.totalAmount,
      amountPaid: formValue.amountPaid,
      balanceDue: formValue.balanceDue,
      notes: formValue.notes
    };
    
    if (this.isEditMode) {
      this.invoiceService.updateInvoice(invoice).subscribe(
        () => {
          this.snackBar.open('Invoice updated successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/invoices', this.invoiceId]);
        },
        (error: any) => {
          console.error('Error updating invoice:', error);
          this.snackBar.open('Error updating invoice', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.invoiceService.createInvoice(invoice).subscribe(
        (newInvoice: Invoice) => {
          this.snackBar.open('Invoice created successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/invoices', newInvoice.id]);
        },
        (error: any) => {
          console.error('Error creating invoice:', error);
          this.snackBar.open('Error creating invoice', 'Close', { duration: 3000 });
        }
      );
    }
  }
} 