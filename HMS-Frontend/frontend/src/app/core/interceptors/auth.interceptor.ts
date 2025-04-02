import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  console.log('Intercepting request:', req.method, req.url);
  console.log('Request body:', req.body);
  
  // For auth endpoints, let the request pass through unmodified
  if (req.url.includes('/api/auth/')) {
    console.log('Auth endpoint detected. Passing through unmodified.');
    return next(req);
  }
  
  // For all other endpoints, add auth token
  const token = authService.getToken();
  
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    
    console.log('Added Authorization header to request');
    
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        
        if (error.status === 401 || error.status === 403) {
          console.log('Authentication error, redirecting to login');
          authService.logout();
          router.navigate(['/login'], { 
            queryParams: { returnUrl: router.url, error: 'Session expired. Please log in again.' }
          });
        }
        
        let errorMessage = 'An error occurred. Please try again.';
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.error?.error) {
          errorMessage = error.error.error;
        }
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  
  // If no token and not auth endpoint, redirect to login
  if (!req.url.includes('/api/auth/')) {
    console.log('No token available, redirecting to login');
    router.navigate(['/login']);
    return throwError(() => new Error('Authentication required'));
  }
  
  return next(req);
}; 