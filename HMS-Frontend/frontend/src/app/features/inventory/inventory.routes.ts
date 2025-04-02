import { Routes } from '@angular/router';

export const INVENTORY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./inventory-list/inventory-list.component').then(c => c.InventoryListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./inventory-form/inventory-form.component').then(c => c.InventoryFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./inventory-detail/inventory-detail.component').then(c => c.InventoryDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./inventory-form/inventory-form.component').then(c => c.InventoryFormComponent)
  }
]; 