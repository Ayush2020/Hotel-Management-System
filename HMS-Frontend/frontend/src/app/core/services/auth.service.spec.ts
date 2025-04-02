import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService, LoginRequest, RegisterRequest } from './auth.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  const API_URL = `${environment.apiUrl}/auth`;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should send login request with correct data', () => {
      const loginRequest: LoginRequest = {
        username: 'testuser',
        password: 'password123'
      };

      const mockResponse = {
        token: 'test-token',
        type: 'Bearer',
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        roles: ['user']
      };

      service.login(loginRequest).subscribe();

      const req = httpMock.expectOne(`${API_URL}/signin`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(loginRequest);
      req.flush(mockResponse);
    });

    it('should handle login error', () => {
      const loginRequest: LoginRequest = {
        username: 'testuser',
        password: 'wrongpassword'
      };

      service.login(loginRequest).subscribe({
        error: (error) => {
          expect(error).toBeTruthy();
        }
      });

      const req = httpMock.expectOne(`${API_URL}/signin`);
      req.error(new ErrorEvent('Network error'));
    });
  });

  describe('register', () => {
    it('should send registration request with correct data', () => {
      const registerRequest: RegisterRequest = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };

      const mockResponse = {
        message: 'User registered successfully!'
      };

      service.register(registerRequest).subscribe();

      const req = httpMock.expectOne(`${API_URL}/signup`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({
        ...registerRequest,
        role: ['user']
      });
      req.flush(mockResponse);
    });

    it('should handle registration error', () => {
      const registerRequest: RegisterRequest = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };

      service.register(registerRequest).subscribe({
        error: (error) => {
          expect(error).toBeTruthy();
        }
      });

      const req = httpMock.expectOne(`${API_URL}/signup`);
      req.error(new ErrorEvent('Network error'));
    });
  });

  describe('logout', () => {
    it('should clear local storage and user subject', () => {
      localStorage.setItem('auth_token', 'test-token');
      localStorage.setItem('auth_user', JSON.stringify({ id: 1, username: 'test' }));

      service.logout();

      expect(localStorage.getItem('auth_token')).toBeNull();
      expect(localStorage.getItem('auth_user')).toBeNull();
      service.currentUser$.subscribe(user => expect(user).toBeNull());
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true when token exists', () => {
      localStorage.setItem('auth_token', 'test-token');
      expect(service.isAuthenticated()).toBeTrue();
    });

    it('should return false when token does not exist', () => {
      localStorage.removeItem('auth_token');
      expect(service.isAuthenticated()).toBeFalse();
    });
  });

  describe('getUserRoles', () => {
    it('should return user roles from storage', () => {
      const mockUser = {
        id: 1,
        username: 'test',
        email: 'test@example.com',
        roles: ['user', 'admin']
      };
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      expect(service.getUserRoles()).toEqual(['user', 'admin']);
    });

    it('should return empty array when no user in storage', () => {
      expect(service.getUserRoles()).toEqual([]);
    });
  });

  describe('hasRole', () => {
    it('should return true when user has the role', () => {
      const mockUser = {
        id: 1,
        username: 'test',
        email: 'test@example.com',
        roles: ['user', 'admin']
      };
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      expect(service.hasRole('admin')).toBeTrue();
    });

    it('should return false when user does not have the role', () => {
      const mockUser = {
        id: 1,
        username: 'test',
        email: 'test@example.com',
        roles: ['user']
      };
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      expect(service.hasRole('admin')).toBeFalse();
    });
  });
}); 