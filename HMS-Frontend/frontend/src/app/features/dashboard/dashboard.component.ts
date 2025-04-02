import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface DashboardSummary {
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  totalGuests: number;
  todayArrivals: number;
  todayDepartures: number;
  totalReservations: number;
}

interface QuickAction {
  label: string;
  icon: string;
  color: string;
  route: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="dashboard-container">
      <h1 class="mat-headline-4">Dashboard</h1>
      
      <div class="welcome-card">
        <h2 class="mat-headline-5">Welcome, {{ (authService.currentUser$ | async)?.username }}!</h2>
        <p class="mat-body-1">{{ welcomeMessage }}</p>
      </div>
      
      <div class="stats-container">
        <mat-card *ngFor="let stat of stats" class="stat-card" [ngClass]="stat.color">
          <mat-card-content>
            <mat-icon class="stat-icon">{{ stat.icon }}</mat-icon>
            <div class="stat-content">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      
      <h2 class="mat-headline-5 section-title">Quick Actions</h2>
      
      <div class="actions-container">
        <mat-card *ngFor="let action of quickActions" class="action-card" (click)="navigateTo(action.route)">
          <mat-card-content>
            <mat-icon [ngClass]="action.color">{{ action.icon }}</mat-icon>
            <h3 class="mat-headline-6">{{ action.label }}</h3>
            <p class="mat-body-1">{{ action.description }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 16px;
    }
    
    .welcome-card {
      background-color: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }
    
    .section-title {
      margin: 32px 0 16px;
    }
    
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .stat-card {
      height: 100px;
    }
    
    .stat-card mat-card-content {
      display: flex;
      align-items: center;
      height: 100%;
    }
    
    .stat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-right: 16px;
    }
    
    .stat-content {
      display: flex;
      flex-direction: column;
    }
    
    .stat-value {
      font-size: 32px;
      font-weight: 500;
    }
    
    .stat-label {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
    
    .actions-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    
    .action-card {
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .action-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .action-card mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      margin-bottom: 16px;
    }
    
    /* Colors */
    .color-primary { color: #3f51b5; }
    .color-accent { color: #ff4081; }
    .color-warn { color: #f44336; }
    .color-success { color: #4caf50; }
    .color-info { color: #2196f3; }
    
    .bg-primary { background-color: #e8eaf6; }
    .bg-accent { background-color: #fce4ec; }
    .bg-warn { background-color: #ffebee; }
    .bg-success { background-color: #e8f5e9; }
    .bg-info { background-color: #e3f2fd; }
  `]
})
export class DashboardComponent implements OnInit {
  private http = inject(HttpClient);
  authService = inject(AuthService);
  private router = inject(Router);
  
  welcomeMessage = 'Welcome to the Hotel Management System dashboard.';
  dashboardSummary: DashboardSummary = {
    totalRooms: 0,
    availableRooms: 0,
    occupiedRooms: 0,
    totalGuests: 0,
    todayArrivals: 0,
    todayDepartures: 0,
    totalReservations: 0
  };
  
  stats = [
    { label: 'Total Rooms', value: 0, icon: 'hotel', color: 'bg-primary' },
    { label: 'Available Rooms', value: 0, icon: 'meeting_room', color: 'bg-success' },
    { label: 'Occupied Rooms', value: 0, icon: 'no_meeting_room', color: 'bg-accent' },
    { label: 'Today\'s Arrivals', value: 0, icon: 'flight_land', color: 'bg-info' },
    { label: 'Today\'s Departures', value: 0, icon: 'flight_takeoff', color: 'bg-warn' },
    { label: 'Total Guests', value: 0, icon: 'people', color: 'bg-primary' }
  ];
  
  quickActions: QuickAction[] = [
    {
      label: 'New Reservation',
      icon: 'add_circle',
      color: 'color-primary',
      route: '/reservations/new',
      description: 'Create a new reservation for a guest'
    },
    {
      label: 'Check-in Guest',
      icon: 'login',
      color: 'color-success',
      route: '/reservations/check-in',
      description: 'Check-in a guest with an existing reservation'
    },
    {
      label: 'Check-out Guest',
      icon: 'logout',
      color: 'color-warn',
      route: '/reservations/check-out',
      description: 'Check-out a guest and generate invoice'
    },
    {
      label: 'Add New Guest',
      icon: 'person_add',
      color: 'color-info',
      route: '/guests/new',
      description: 'Register a new guest in the system'
    }
  ];
  
  ngOnInit(): void {
    this.loadDashboardData();
  }
  
  loadDashboardData(): void {
    const baseUrl = environment.apiUrl;
    
    forkJoin({
      rooms: this.http.get<any>(`${baseUrl}/rooms`).pipe(
        catchError(() => [])
      ),
      availableRooms: this.http.get<any>(`${baseUrl}/rooms/available`).pipe(
        catchError(() => [])
      ),
      arrivals: this.http.get<any>(`${baseUrl}/reservations/arrivals`).pipe(
        catchError(() => [])
      ),
      departures: this.http.get<any>(`${baseUrl}/reservations/departures`).pipe(
        catchError(() => [])
      ),
      guests: this.http.get<any>(`${baseUrl}/guests`).pipe(
        catchError(() => [])
      ),
      reservations: this.http.get<any>(`${baseUrl}/reservations`).pipe(
        catchError(() => [])
      )
    }).subscribe({
      next: (data) => {
        // Update dashboard summary
        this.dashboardSummary = {
          totalRooms: data.rooms.length || 0,
          availableRooms: data.availableRooms.length || 0,
          occupiedRooms: (data.rooms.length || 0) - (data.availableRooms.length || 0),
          totalGuests: data.guests.length || 0,
          todayArrivals: data.arrivals.length || 0,
          todayDepartures: data.departures.length || 0,
          totalReservations: data.reservations.length || 0
        };
        
        // Update stats
        this.stats[0].value = this.dashboardSummary.totalRooms;
        this.stats[1].value = this.dashboardSummary.availableRooms;
        this.stats[2].value = this.dashboardSummary.occupiedRooms;
        this.stats[3].value = this.dashboardSummary.todayArrivals;
        this.stats[4].value = this.dashboardSummary.todayDepartures;
        this.stats[5].value = this.dashboardSummary.totalGuests;
      },
      error: (error) => {
        console.error('Error loading dashboard data', error);
      }
    });
  }
  
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
} 