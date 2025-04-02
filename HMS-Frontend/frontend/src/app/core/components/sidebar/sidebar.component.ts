import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  requiredRoles?: string[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidebar-container">
      <div class="sidebar-header">
        <h2 class="mat-h2">Hotel Management</h2>
      </div>
      
      <mat-nav-list>
        <a mat-list-item 
           *ngFor="let item of navItems" 
           [routerLink]="item.route" 
           routerLinkActive="active-link"
           [hidden]="!canShowNavItem(item)">
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
      </mat-nav-list>
    </div>
  `,
  styles: [`
    .sidebar-container {
      height: 100%;
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .sidebar-header {
      padding: 16px;
      border-bottom: 1px solid #eee;
    }
    
    .mat-h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }
    
    .active-link {
      background-color: rgba(0, 0, 0, 0.05);
      color: #3f51b5;
      font-weight: 500;
    }
  `]
})
export class SidebarComponent {
  authService = inject(AuthService);
  
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Reservations', icon: 'book_online', route: '/reservations' },
    { label: 'Rooms', icon: 'hotel', route: '/rooms' },
    { label: 'Guests', icon: 'people', route: '/guests' },
    { label: 'Invoices', icon: 'receipt', route: '/invoices' },
    { 
      label: 'Staff', 
      icon: 'badge', 
      route: '/staff', 
      requiredRoles: ['ROLE_OWNER', 'ROLE_MANAGER'] 
    },
    { 
      label: 'Inventory', 
      icon: 'inventory', 
      route: '/inventory', 
      requiredRoles: ['ROLE_OWNER', 'ROLE_MANAGER'] 
    },
    { 
      label: 'Reports', 
      icon: 'analytics', 
      route: '/reports', 
      requiredRoles: ['ROLE_OWNER', 'ROLE_MANAGER'] 
    }
  ];
  
  canShowNavItem(item: NavItem): boolean {
    if (!item.requiredRoles || item.requiredRoles.length === 0) {
      return true;
    }
    
    return item.requiredRoles.some(role => this.authService.hasRole(role));
  }
} 