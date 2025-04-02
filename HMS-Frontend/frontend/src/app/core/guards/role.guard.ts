import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const RoleGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Get the required roles from route data
  const requiredRoles = route.data?.['roles'] as string[] || [];
  
  if (requiredRoles.length === 0) {
    return true;
  }
  
  // Check if the user has any of the required roles
  const userRoles = authService.getUserRoles();
  const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
  
  if (!hasRequiredRole) {
    router.navigate(['/dashboard']);
    return false;
  }
  
  return true;
}; 