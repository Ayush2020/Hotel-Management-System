import { Routes } from '@angular/router';

export const GUESTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./guest-list/guest-list.component').then(c => c.GuestListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./guest-form/guest-form.component').then(c => c.GuestFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./guest-profile/guest-profile.component').then(c => c.GuestProfileComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./guest-form/guest-form.component').then(c => c.GuestFormComponent)
  }
]; 