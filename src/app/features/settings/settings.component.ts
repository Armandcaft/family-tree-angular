import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="settings-view">
      <h2>Settings</h2>
      <p>Application settings will be implemented here.</p>
    </div>
  `,
  styles: [`
    .settings-view {
      padding: var(--spacing-2xl);
      text-align: center;
    }
  `]
})
export class SettingsComponent {}