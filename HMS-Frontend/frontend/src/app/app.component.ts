import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="app-container">
      <app-header *ngIf="authService.isAuthenticated()" class="app-header"></app-header>
      <div class="content-container">
        <app-sidebar *ngIf="authService.isAuthenticated()" class="app-sidebar"></app-sidebar>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    .app-header {
      flex: 0 0 auto;
      z-index: 2;
    }
    
    .content-container {
      display: flex;
      flex: 1;
      overflow: hidden;
    }
    
    .app-sidebar {
      width: 250px;
      overflow-y: auto;
      transition: width 0.3s ease;
    }
    
    .main-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent {
  authService = inject(AuthService);
} 