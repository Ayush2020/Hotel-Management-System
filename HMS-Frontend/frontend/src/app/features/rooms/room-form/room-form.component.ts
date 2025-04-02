import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { 
  FormBuilder, 
  FormGroup, 
  FormArray, 
  ReactiveFormsModule, 
  Validators 
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { environment } from '../../../../environments/environment';
import { switchMap, catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

interface Room {
  id?: number;
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
  selector: 'app-room-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="room-form-container">
      <div class="loading-overlay" *ngIf="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <div class="back-button">
        <button mat-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon> Back to Rooms
        </button>
      </div>
      
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ isEditMode ? 'Edit Room' : 'Add New Room' }}</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="roomForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Room Number</mat-label>
                <input matInput formControlName="roomNumber" placeholder="e.g. 101" required>
                <mat-error *ngIf="roomForm.get('roomNumber')?.hasError('required')">
                  Room number is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Floor</mat-label>
                <input matInput type="number" formControlName="floor" placeholder="e.g. 1" required>
                <mat-error *ngIf="roomForm.get('floor')?.hasError('required')">
                  Floor is required
                </mat-error>
              </mat-form-field>
            </div>
            
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Room Type</mat-label>
                <mat-select formControlName="type" required>
                  <mat-option value="STANDARD">Standard</mat-option>
                  <mat-option value="DELUXE">Deluxe</mat-option>
                  <mat-option value="SUITE">Suite</mat-option>
                  <mat-option value="EXECUTIVE">Executive</mat-option>
                </mat-select>
                <mat-error *ngIf="roomForm.get('type')?.hasError('required')">
                  Room type is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Status</mat-label>
                <mat-select formControlName="status" required>
                  <mat-option value="AVAILABLE">Available</mat-option>
                  <mat-option value="OCCUPIED">Occupied</mat-option>
                  <mat-option value="MAINTENANCE">Maintenance</mat-option>
                </mat-select>
                <mat-error *ngIf="roomForm.get('status')?.hasError('required')">
                  Status is required
                </mat-error>
              </mat-form-field>
            </div>
            
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Price per Night</mat-label>
                <input matInput type="number" formControlName="price" placeholder="e.g. 150.00" required>
                <span matTextPrefix>$&nbsp;</span>
                <mat-error *ngIf="roomForm.get('price')?.hasError('required')">
                  Price is required
                </mat-error>
                <mat-error *ngIf="roomForm.get('price')?.hasError('min')">
                  Price must be greater than 0
                </mat-error>
              </mat-form-field>
              
              <mat-form-field appearance="outline">
                <mat-label>Capacity</mat-label>
                <input matInput type="number" formControlName="capacity" placeholder="e.g. 2" required>
                <mat-error *ngIf="roomForm.get('capacity')?.hasError('required')">
                  Capacity is required
                </mat-error>
                <mat-error *ngIf="roomForm.get('capacity')?.hasError('min')">
                  Capacity must be greater than 0
                </mat-error>
              </mat-form-field>
            </div>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea 
                matInput 
                formControlName="description" 
                placeholder="Enter room description"
                rows="4">
              </textarea>
            </mat-form-field>
            
            <div class="amenities-section">
              <h3>Amenities</h3>
              <div class="amenities-input">
                <mat-form-field appearance="outline" class="amenity-input">
                  <mat-label>Add Amenity</mat-label>
                  <input 
                    matInput 
                    [value]="newAmenity"
                    (input)="newAmenity = $any($event).target.value"
                    (keydown.enter)="addAmenity($event)"
                    placeholder="e.g. WiFi">
                </mat-form-field>
                <button 
                  type="button" 
                  mat-mini-fab 
                  color="primary" 
                  (click)="addAmenity()"
                  [disabled]="!newAmenity.trim()">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
              
              <mat-chip-set formArrayName="amenities" class="amenities-list">
                <mat-chip *ngFor="let amenity of amenitiesArray.controls; let i = index" [removable]="true" (removed)="removeAmenity(i)">
                  {{ amenity.value }}
                  <mat-icon matChipRemove>cancel</mat-icon>
                </mat-chip>
                <mat-chip *ngIf="amenitiesArray.length === 0" disabled>
                  No amenities added
                </mat-chip>
              </mat-chip-set>
            </div>
            
            <div class="image-urls-section">
              <h3>Image URLs</h3>
              <div formArrayName="images">
                <div *ngFor="let image of imagesArray.controls; let i = index" class="image-url-row">
                  <mat-form-field appearance="outline" class="image-url-input">
                    <mat-label>Image URL {{ i + 1 }}</mat-label>
                    <input matInput [formControlName]="i" placeholder="https://example.com/image.jpg">
                  </mat-form-field>
                  <button type="button" mat-icon-button color="warn" (click)="removeImage(i)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
                
                <button type="button" mat-stroked-button color="primary" (click)="addImage()">
                  <mat-icon>add_photo_alternate</mat-icon> Add Image URL
                </button>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" mat-button (click)="goBack()">Cancel</button>
              <button 
                type="submit" 
                mat-raised-button 
                color="primary" 
                [disabled]="roomForm.invalid || loading">
                {{ isEditMode ? 'Update Room' : 'Create Room' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .room-form-container {
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
    
    .amenities-section,
    .image-urls-section {
      margin-bottom: 24px;
    }
    
    h3 {
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }
    
    .amenities-input {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    
    .amenity-input {
      flex: 1;
    }
    
    .amenities-list {
      margin-top: 8px;
    }
    
    .image-url-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    
    .image-url-input {
      flex: 1;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }
  `]
})
export class RoomFormComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  
  roomForm: FormGroup;
  isEditMode = false;
  loading = false;
  newAmenity = '';
  
  readonly separatorKeysCodes = [ENTER, COMMA];
  
  constructor() {
    this.roomForm = this.fb.group({
      roomNumber: ['', Validators.required],
      type: ['STANDARD', Validators.required],
      price: [100, [Validators.required, Validators.min(0.01)]],
      capacity: [2, [Validators.required, Validators.min(1)]],
      status: ['AVAILABLE', Validators.required],
      amenities: this.fb.array([]),
      description: [''],
      floor: [1, Validators.required],
      images: this.fb.array([])
    });
  }
  
  get amenitiesArray() {
    return this.roomForm.get('amenities') as FormArray;
  }
  
  get imagesArray() {
    return this.roomForm.get('images') as FormArray;
  }
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const roomId = params.get('id');
        if (roomId) {
          this.isEditMode = true;
          this.loading = true;
          const baseUrl = environment.apiUrl;
          return this.http.get<Room>(`${baseUrl}/rooms/${roomId}`).pipe(
            catchError(error => {
              console.error('Error loading room details', error);
              this.snackBar.open('Failed to load room details. Please try again later.', 'Close', { duration: 5000 });
              return of(null);
            }),
            finalize(() => this.loading = false)
          );
        }
        return of(null);
      })
    ).subscribe(room => {
      if (room) {
        this.populateForm(room);
      }
    });
  }
  
  populateForm(room: Room): void {
    this.roomForm.patchValue({
      roomNumber: room.roomNumber,
      type: room.type,
      price: room.price,
      capacity: room.capacity,
      status: room.status,
      description: room.description,
      floor: room.floor
    });
    
    // Clear and repopulate amenities
    this.amenitiesArray.clear();
    if (room.amenities && room.amenities.length > 0) {
      room.amenities.forEach(amenity => {
        this.amenitiesArray.push(this.fb.control(amenity));
      });
    }
    
    // Clear and repopulate images
    this.imagesArray.clear();
    if (room.images && room.images.length > 0) {
      room.images.forEach(image => {
        this.imagesArray.push(this.fb.control(image));
      });
    }
  }
  
  addAmenity(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    
    const value = this.newAmenity.trim();
    if (value) {
      // Check for duplicates
      const existing = this.amenitiesArray.value.find((a: string) => 
        a.toLowerCase() === value.toLowerCase()
      );
      
      if (!existing) {
        this.amenitiesArray.push(this.fb.control(value));
      }
      this.newAmenity = '';
    }
  }
  
  removeAmenity(index: number): void {
    this.amenitiesArray.removeAt(index);
  }
  
  addImage(): void {
    this.imagesArray.push(this.fb.control(''));
  }
  
  removeImage(index: number): void {
    this.imagesArray.removeAt(index);
  }
  
  onSubmit(): void {
    if (this.roomForm.invalid) {
      return;
    }
    
    this.loading = true;
    const formValue = this.roomForm.value;
    
    // Filter out empty image URLs
    formValue.images = formValue.images.filter((url: string) => url.trim() !== '');
    
    const baseUrl = environment.apiUrl;
    
    if (this.isEditMode) {
      const roomId = this.route.snapshot.paramMap.get('id');
      this.http.put<Room>(`${baseUrl}/rooms/${roomId}`, formValue)
        .pipe(
          catchError(error => {
            console.error('Error updating room', error);
            this.snackBar.open('Failed to update room. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open(`Room ${formValue.roomNumber} updated successfully`, 'Close', { duration: 3000 });
            this.router.navigate(['/rooms', roomId]);
          }
        });
    } else {
      this.http.post<Room>(`${baseUrl}/rooms`, formValue)
        .pipe(
          catchError(error => {
            console.error('Error creating room', error);
            this.snackBar.open('Failed to create room. Please try again later.', 'Close', { duration: 5000 });
            return of(null);
          }),
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          if (response) {
            this.snackBar.open(`Room ${formValue.roomNumber} created successfully`, 'Close', { duration: 3000 });
            this.router.navigate(['/rooms']);
          }
        });
    }
  }
  
  goBack(): void {
    this.location.back();
  }
} 