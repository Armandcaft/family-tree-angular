import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tree-view">
      <h2>Family Tree Visualization</h2>
      <p>Interactive family tree will be implemented here.</p>
    </div>
  `,
  styles: [`
    .tree-view {
      padding: var(--spacing-2xl);
      text-align: center;
    }
  `]
})
export class TreeComponent {}