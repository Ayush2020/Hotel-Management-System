import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    RouterModule
  ],
  template: `
    <mat-toolbar color="primary">
      <div class="logo">
        <span>HMS</span>
      </div>
      <span class="spacer"></span>
      <div class="user-actions">
        <button mat-icon-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
        </button>
        <mat-menu #userMenu="matMenu">
          <span class="user-info mat-typography">
            <p class="username">{{ (authService.currentUser$ | async)?.username }}</p>
            <p class="user-role">{{ getUserRole() }}</p>
          </span>
          <button mat-menu-item (click)="logout()">
            <mat-icon>exit_to_app</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    
    .logo {
      font-size: 20px;
      font-weight: 500;
    }
    
    .user-info {
      padding: 0 16px;
      margin-bottom: 0;
    }
    
    .username {
      font-weight: 500;
      margin-bottom: 0;
    }
    
    .user-role {
      font-size: 12px;
      color: #666;
      margin-top: 0;
    }
  `]
})
export class HeaderComponent {
  authService = inject(AuthService);
  
  getUserRole(): string {
    const roles = this.authService.getUserRoles();
    if (roles.includes('ROLE_OWNER')) return 'Owner';
    if (roles.includes('ROLE_MANAGER')) return 'Manager';
    if (roles.includes('ROLE_RECEPTIONIST')) return 'Receptionist';
    return 'User';
  }
  
  logout(): void {
    this.authService.logout();
  }
} 