import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { GUESTS_ROUTES } from './features/guests/guests.routes';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./features/auth/login/login.component').then(c => c.LoginComponent) 
  },
  { 
    path: 'register', 
    loadComponent: () => import('./features/auth/register/register.component').then(c => c.RegisterComponent) 
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canActivate: [authGuard] 
  },
  { 
    path: 'rooms', 
    loadChildren: () => import('./features/rooms/rooms.routes').then(r => r.ROOMS_ROUTES),
    canActivate: [authGuard] 
  },
  { 
    path: 'guests', 
    children: GUESTS_ROUTES,
    canActivate: [authGuard] 
  },
  { 
    path: 'reservations', 
    loadChildren: () => import('./features/reservations/reservations.routes').then(r => r.RESERVATIONS_ROUTES),
    canActivate: [authGuard] 
  },
  { 
    path: 'invoices', 
    loadChildren: () => import('./features/invoices/invoices.routes').then(r => r.INVOICES_ROUTES),
    canActivate: [authGuard] 
  },
  { 
    path: 'staff', 
    loadChildren: () => import('./features/staff/staff.routes').then(r => r.STAFF_ROUTES),
    canActivate: [authGuard],
    canMatch: [RoleGuard],
    data: { roles: ['ROLE_OWNER', 'ROLE_MANAGER'] }
  },
  { 
    path: 'inventory', 
    loadChildren: () => import('./features/inventory/inventory.routes').then(r => r.INVENTORY_ROUTES),
    canActivate: [authGuard],
    canMatch: [RoleGuard],
    data: { roles: ['ROLE_OWNER', 'ROLE_MANAGER'] }
  },
  /* Reports module not yet implemented
  { 
    path: 'reports', 
    loadChildren: () => import('./features/reports/reports.routes').then(r => r.REPORTS_ROUTES),
    canActivate: [authGuard],
    canMatch: [RoleGuard],
    data: { roles: ['ROLE_OWNER', 'ROLE_MANAGER'] }
  },
  */
  { 
    path: '**', 
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(c => c.NotFoundComponent) 
  }
]; 