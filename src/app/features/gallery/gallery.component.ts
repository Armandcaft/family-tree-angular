import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-view">
      <h2>Media Gallery</h2>
      <p>Family media gallery will be implemented here.</p>
    </div>
  `,
  styles: [`
    .gallery-view {
      padding: var(--spacing-2xl);
      text-align: center;
    }
  `]
})
export class GalleryComponent {}