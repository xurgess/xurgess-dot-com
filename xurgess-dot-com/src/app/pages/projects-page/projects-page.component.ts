import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
  projects = [
    {
      id: 1,
      title: 'Lunar Lander',
      description: 'A revolutionary AI-driven platform.',
      imageUrl: 'assets/images/zmirk.jpg',
    }
  ];

  constructor(private router: Router) {}

  navigateToProject(projectId: number, event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevents event bubbling if clicking a button
    }
    this.router.navigate(['/projects', projectId]);
  }
}
