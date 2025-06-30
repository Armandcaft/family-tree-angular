import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, Bell, User } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly Search = Search;
  readonly Bell = Bell;
  readonly User = User;

  currentUser = {
    name: 'Jean Dupont',
    role: 'Admin',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  };

  notifications = [
    {
      id: 1,
      message: 'New member added to Martin Family',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      message: 'Photo uploaded to family gallery',
      time: '1 day ago',
      read: true
    }
  ];

  public get hasUnreadNotifications(): boolean {
    return this.notifications.some(n => !n.read);
  }

  searchQuery = '';
}
