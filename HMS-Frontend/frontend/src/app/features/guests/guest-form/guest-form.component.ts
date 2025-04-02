import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../environments/environment';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

interface Guest {
  id?: number;
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
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-guest-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="guest-form-container">
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
          <mat-card-title>{{ isEditMode ? 'Edit Guest' : 'Add New Guest' }}</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="guestForm" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h3>Personal Information</h3>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>First Name</mat-label>
                  <input matInput formControlName="firstName" required>
                  <mat-error *ngIf="guestForm.get('firstName')?.hasError('required')">
                    First name is required
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Last Name</mat-label>
                  <input matInput formControlName="lastName" required>
                  <mat-error *ngIf="guestForm.get('lastName')?.hasError('required')">
                    Last name is required
                  </mat-error>
                </mat-form-field>
              </div>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>Email</mat-label>
                  <input matInput formControlName="email" type="email">
                  <mat-error *ngIf="guestForm.get('email')?.hasError('email')">
                    Please enter a valid email
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Phone</mat-label>
                  <input matInput formControlName="phone">
                </mat-form-field>
              </div>
              
              <div class="vip-checkbox">
                <mat-checkbox formControlName="vip">VIP Guest</mat-checkbox>
              </div>
            </div>
            
            <mat-divider></mat-divider>
            
            <div class="form-section">
              <h3>Identification</h3>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>ID Type</mat-label>
                  <mat-select formControlName="identificationType">
                    <mat-option value="PASSPORT">Passport</mat-option>
                    <mat-option value="DRIVERS_LICENSE">Driver's License</mat-option>
                    <mat-option value="NATIONAL_ID">National ID</mat-option>
                    <mat-option value="OTHER">Other</mat-option>
                  </mat-select>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>ID Number</mat-label>
                  <input matInput formControlName="identificationNumber">
                </mat-form-field>
              </div>
            </div>
            
            <mat-divider></mat-divider>
            
            <div class="form-section">
              <h3>Address</h3>
              
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Address</mat-label>
                <input matInput formControlName="address">
              </mat-form-field>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>City</mat-label>
                  <input matInput formControlName="city">
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>State/Province</mat-label>
                  <input matInput formControlName="state">
                </mat-form-field>
              </div>
              
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>Country</mat-label>
                  <input matInput formControlName="country">
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Postal Code</mat-label>
                  <input matInput formControlName="postalCode">
                </mat-form-field>
              </div>
            </div>
            
            <mat-divider></mat-divider>
            
            <div class="form-section">
              <h3>Additional Information</h3>
              
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Notes</mat-label>
                <textarea 
                  matInput 
                  formControlName="notes" 
                  placeholder="Enter any additional information about the guest"
                  rows="4">
                </textarea>
              </mat-form-field>
            </div>
            
            <div class="form-actions">
              <button type="button" mat-button (click)="goBack()">Cancel</button>
              <button 
                type="submit" 
                mat-raised-button 
                color="primary" 
                [disabled]="guestForm.invalid || loading">
                {{ isEditMode ? 'Update Guest' : 'Create Guest' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .guest-form-container {
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
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .form-row mat-form-field {
      flex: 1;
    }
    
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    
    .vip-checkbox {
      margin-bottom: 16px;
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
export class GuestFormComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  guestForm: FormGroup;
  isEditMode = false;
  loading = false;
  
  constructor() {
    this.guestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      postalCode: [''],
      identificationNumber: [''],
      identificationType: [''],
      notes: [''],
      vip: [false]
    });
  }
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const guestId = params.get('id');
        if (guestId) {
          this.isEditMode = true;
          this.loading = true;
          const baseUrl = environment.apiUrl;
          return this.http.get<Guest>(`${baseUrl}/guests/${guestId}`).pipe(
            catchError(error => {
              console.error('Error loading guest details', error);
              this.snackBar.open('Failed to load guest details. Please try again later.', 'Close', { duration: 5000 });
              return of(null);
            }),
            finalize(() => this.loading = false)
          );
        }
        return of(null);
      })
    ).subscribe(guest => {
      if (guest) {
        this.populateForm(guest);
      }
    });
  }
  
  populateForm(guest: Guest): void {
    this.guestForm.patchValue({
      firstName: guest.firstName,
      lastName: guest.lastName,
      email: guest.email,
      phone: guest.phone,
      address: guest.address,
      city: guest.city,
      state: guest.state,
      country: guest.country,
      postalCode: guest.postalCode,
      identificationNumber: guest.identificationNumber,
      identificationType: guest.identificationType,
      notes: guest.notes,
      vip: guest.vip
    });
  }
  
  onSubmit(): void {
    if (this.guestForm.invalid) {
      return;
    }
    
    this.loading = true;
    const formValue = this.guestForm.value;
    const baseUrl = environment.apiUrl;
    
    if (this.isEditMode) {
      const guestId = this.route.snapshot.paramMap.get('id');
      this.http.put<Guest>(`${baseUrl}/guests/${guestId}`, formValue)
        .pipe(
          catchError(error => {
            console.error('Error updating guest', error);
            this.snackBar.open('Failed to update guest. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open(`Guest ${formValue.firstName} ${formValue.lastName} updated successfully`, 'Close', { duration: 3000 });
            this.router.navigate(['/guests', guestId]);
          }
        });
    } else {
      this.http.post<Guest>(`${baseUrl}/guests`, formValue)
        .pipe(
          catchError(error => {
            console.error('Error creating guest', error);
            this.snackBar.open('Failed to create guest. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open(`Guest ${formValue.firstName} ${formValue.lastName} created successfully`, 'Close', { duration: 3000 });
            this.router.navigate(['/guests']);
          }
        });
    }
  }
  
  goBack(): void {
    this.location.back();
  }
} 