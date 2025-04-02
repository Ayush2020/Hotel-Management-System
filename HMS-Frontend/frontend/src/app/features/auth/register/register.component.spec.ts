import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        RouterModule
      ],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.registerForm.get('username')?.value).toBe('');
    expect(component.registerForm.get('email')?.value).toBe('');
    expect(component.registerForm.get('password')?.value).toBe('');
  });

  it('should validate required fields', () => {
    const form = component.registerForm;
    expect(form.valid).toBeFalsy();

    form.controls['username'].setValue('testuser');
    form.controls['email'].setValue('test@example.com');
    form.controls['password'].setValue('password123');

    expect(form.valid).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.registerForm.controls['email'];
    
    emailControl.setValue('invalid-email');
    expect(emailControl.valid).toBeFalsy();

    emailControl.setValue('valid@example.com');
    expect(emailControl.valid).toBeTruthy();
  });

  it('should handle successful registration', fakeAsync(() => {
    const form = component.registerForm;
    form.controls['username'].setValue('testuser');
    form.controls['email'].setValue('test@example.com');
    form.controls['password'].setValue('password123');

    authService.register.and.returnValue(of({}));
    
    component.onSubmit();
    tick();

    expect(authService.register).toHaveBeenCalledWith({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      role: ['user']
    });
    expect(snackBar.open).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  }));

  it('should handle registration error', fakeAsync(() => {
    const form = component.registerForm;
    form.controls['username'].setValue('testuser');
    form.controls['email'].setValue('test@example.com');
    form.controls['password'].setValue('password123');

    const error = { error: { message: 'Registration failed' } };
    authService.register.and.returnValue(throwError(() => error));
    
    component.onSubmit();
    tick();

    expect(snackBar.open).toHaveBeenCalledWith(
      'Registration failed',
      'Close',
      { duration: 5000 }
    );
  }));
}); 