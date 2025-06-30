import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Users, Clock, Calendar, ImageIcon, Plus, Camera, TreePine } from 'lucide-angular';

interface StatCard {
  title: string;
  value: string;
  icon: any;
  iconType: 'primary' | 'secondary' | 'accent' | 'info';
}

interface ActivityItem {
  id: number;
  type: 'member' | 'photo' | 'update';
  title: string;
  time: string;
  icon: any;
  iconColor: string;
}

interface RecentMember {
  id: number;
  name: string;
  relation: string;
  birthDate: string;
  avatar: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly Users = Users;
  readonly Clock = Clock;
  readonly Calendar = Calendar;
  readonly ImageIcon = ImageIcon;
  readonly Plus = Plus;
  readonly Camera = Camera;
  readonly TreePine = TreePine;

  stats: StatCard[] = [
    {
      title: 'Total Members',
      value: '6',
      icon: this.Users,
      iconType: 'primary'
    },
    {
      title: 'Generations',
      value: '3',
      icon: this.Clock,
      iconType: 'secondary'
    },
    {
      title: 'Average Age',
      value: '56 years',
      icon: this.Calendar,
      iconType: 'accent'
    },
    {
      title: 'Media',
      value: '3',
      icon: this.ImageIcon,
      iconType: 'info'
    }
  ];

  recentActivity: ActivityItem[] = [
    {
      id: 1,
      type: 'member',
      title: 'Member added: Léa Durand',
      time: 'Today at 14:32',
      icon: this.Plus,
      iconColor: '#10b981'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Photo added: Family vacation',
      time: 'Yesterday at 09:15',
      icon: this.Camera,
      iconColor: '#6366f1'
    },
    {
      id: 3,
      type: 'update',
      title: 'Tree updated: Martin Family',
      time: '3 days ago',
      icon: this.TreePine,
      iconColor: '#f59e0b'
    }
  ];

  recentMembers: RecentMember[] = [
    {
      id: 1,
      name: 'Charles Martin',
      relation: 'Father',
      birthDate: 'June 12, 1945',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      name: 'Marie Martin',
      relation: 'Mother',
      birthDate: 'April 8, 1947',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 3,
      name: 'Sophie Martin',
      relation: 'Sister',
      birthDate: 'August 15, 1973',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  recentMedia = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      alt: 'Family gathering',
      title: 'Family Gathering 2023'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      alt: 'Old family photo',
      title: 'Wedding Day 1970'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      alt: 'Family vacation',
      title: 'Summer Vacation'
    }
  ];
}