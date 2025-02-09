import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects-page',
    imports: [MatCardModule],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  projects = [
    {
      id: 'lunarLander',
      title: 'Houston, We Have a Solution',
      description: 'The Science of Not Crashing with Reinforcement Learning.',
      imageUrl: 'assets/images/zmirk.jpg',
    }
  ];

  constructor(private router: Router) {}

  navigateToProject(projectId: string, event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevents event bubbling if clicking a button
    }
    this.router.navigate(['/projects', projectId]);
  }
}
