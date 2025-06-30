import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="members-view">
      <h2>Family Members</h2>
      <p>Member management interface will be implemented here.</p>
    </div>
  `,
  styles: [`
    .members-view {
      padding: var(--spacing-2xl);
      text-align: center;
    }
  `]
})
export class MembersComponent {}