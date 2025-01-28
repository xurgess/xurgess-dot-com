import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent {
  taskbarItems = [
    { label: 'Home', icon: 'fas fa-home', path: '/' },
    { label: 'Projects', icon: 'fas fa-cog', path: '/projects' },
  ];

  constructor(private router: Router) {}

  onTaskClick(item: any): void {
    if (item.path) {
      this.router.navigate([item.path]);
    } else {
      console.error(`Path not defined for taskbar item: ${item.label}`);
    }
  }
}
