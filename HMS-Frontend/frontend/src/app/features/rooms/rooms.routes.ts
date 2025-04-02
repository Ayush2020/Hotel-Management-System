import { Routes } from '@angular/router';

export const ROOMS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./room-list/room-list.component').then(c => c.RoomListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./room-form/room-form.component').then(c => c.RoomFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./room-detail/room-detail.component').then(c => c.RoomDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./room-form/room-form.component').then(c => c.RoomFormComponent)
  }
]; 