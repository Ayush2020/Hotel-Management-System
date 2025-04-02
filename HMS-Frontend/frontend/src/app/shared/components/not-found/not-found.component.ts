import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <mat-icon class="error-icon">error_outline</mat-icon>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <button mat-raised-button color="primary" routerLink="/dashboard">
          <mat-icon>home</mat-icon> Return to Dashboard
        </button>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #fafafa;
    }
    
    .not-found-content {
      text-align: center;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 90%;
    }
    
    .error-icon {
      font-size: 64px;
      height: 64px;
      width: 64px;
      color: #f44336;
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 5rem;
      margin: 0;
      color: #f44336;
      line-height: 1;
    }
    
    h2 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: #333;
    }
    
    p {
      color: #666;
      margin-bottom: 2rem;
    }
  `]
})
export class NotFoundComponent {} 