import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<p>Inventory detail works!</p>`,
  styles: []
})
export class InventoryDetailComponent {} 