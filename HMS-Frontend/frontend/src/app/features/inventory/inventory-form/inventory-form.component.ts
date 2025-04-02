import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<p>Inventory form works!</p>`,
  styles: []
})
export class InventoryFormComponent {} 