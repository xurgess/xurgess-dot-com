import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface TaskbarItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
    selector: 'app-taskbar',
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
    ],
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  taskbarItems: TaskbarItem[] = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Projects', icon: 'build', path: '/projects' },
  ];

  constructor(private router: Router) {}

  onTaskClick(item: TaskbarItem): void {
    if (item.path) {
      this.router.navigate([item.path]);
    } else {
      console.error(`Path not defined for taskbar item: ${item.label}`);
    }
  }
}
