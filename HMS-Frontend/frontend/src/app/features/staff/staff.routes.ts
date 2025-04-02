import { Routes } from '@angular/router';

export const STAFF_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./staff-list/staff-list.component').then(c => c.StaffListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./staff-form/staff-form.component').then(c => c.StaffFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./staff-detail/staff-detail.component').then(c => c.StaffDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./staff-form/staff-form.component').then(c => c.StaffFormComponent)
  }
]; 