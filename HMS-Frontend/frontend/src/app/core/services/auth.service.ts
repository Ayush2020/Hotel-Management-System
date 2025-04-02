import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

export interface User {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role?: string[] | null;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  private readonly API_URL = `${environment.apiUrl}/auth`;
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();
  
  constructor(private http: HttpClient, private router: Router) {}
  
  login(loginRequest: LoginRequest): Observable<AuthResponse> {
    this.logout();
    
    console.log('Login request to API:', `${this.API_URL}/signin`);
    console.log('Login payload:', loginRequest);
    
    return this.http.post<AuthResponse>(`${this.API_URL}/signin`, loginRequest).pipe(
      tap(response => {
        console.log('Login successful', response);
        this.setToken(response.token);
        const user: User = {
          id: response.id,
          username: response.username,
          email: response.email,
          roles: response.roles
        };
        this.setUser(user);
        this.currentUserSubject.next(user);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed', error);
        let errorMessage = 'Login failed. Please try again.';
        if (error.error?.message) {
          errorMessage = error.error.message;
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  
  register(registerRequest: RegisterRequest): Observable<any> {
    console.log('Registration request to API:', `${this.API_URL}/signup`);
    
    // Create a new object to ensure proper formatting
    const requestBody = {
      username: registerRequest.username,
      email: registerRequest.email,
      password: registerRequest.password,
      role: ['receptionist'] // Set a default role
    };
    
    console.log('Registration payload:', JSON.stringify(requestBody));
    
    // Add headers to ensure proper content type
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(`${this.API_URL}/signup`, requestBody, { headers }).pipe(
      tap(response => {
        console.log('Registration successful', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Registration failed', error);
        let errorMessage = 'Registration failed. Please try again.';
        
        // Extract more specific error message if available
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.error?.error) {
          errorMessage = error.error.error;
        } else if (error.status === 400) {
          errorMessage = 'Invalid registration data. Please check your input.';
        } else if (error.status === 409) {
          errorMessage = 'Username or email already exists.';
        } else if (error.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  
  getUserRoles(): string[] {
    const user = this.getUserFromStorage();
    return user?.roles || [];
  }
  
  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }
  
  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  
  private setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  
  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }
} 