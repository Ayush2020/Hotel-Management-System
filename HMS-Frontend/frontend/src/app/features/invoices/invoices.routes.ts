import { Routes } from '@angular/router';

export const INVOICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./invoice-list/invoice-list.component').then(c => c.InvoiceListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./invoice-form/invoice-form.component').then(c => c.InvoiceFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./invoice-detail/invoice-detail.component').then(c => c.InvoiceDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./invoice-form/invoice-form.component').then(c => c.InvoiceFormComponent)
  }
]; 