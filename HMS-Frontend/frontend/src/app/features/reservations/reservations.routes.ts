import { Routes } from '@angular/router';

export const RESERVATIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./reservation-list/reservation-list.component').then(c => c.ReservationListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./reservation-form/reservation-form.component').then(c => c.ReservationFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./reservation-detail/reservation-detail.component').then(c => c.ReservationDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./reservation-form/reservation-form.component').then(c => c.ReservationFormComponent)
  }
]; 