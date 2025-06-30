import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Users, TreePine, Image, Settings, BarChart3, Plus } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly Users = Users;
  readonly TreePine = TreePine;
  readonly Image = Image;
  readonly Settings = Settings;
  readonly BarChart3 = BarChart3;
  readonly Plus = Plus;

  menuItems = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: this.BarChart3,
      active: true
    },
    {
      label: 'Tree View',
      route: '/tree',
      icon: this.TreePine,
      active: false
    },
    {
      label: 'Members',
      route: '/members',
      icon: this.Users,
      active: false
    },
    {
      label: 'Gallery',
      route: '/gallery',
      icon: this.Image,
      active: false
    },
    {
      label: 'Settings',
      route: '/settings',
      icon: this.Settings,
      active: false
    }
  ];

  trees = [
    {
      name: 'Martin Family',
      active: true,
      memberCount: 6
    }
  ];
}