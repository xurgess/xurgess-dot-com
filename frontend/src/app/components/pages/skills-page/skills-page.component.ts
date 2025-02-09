import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SkillRow } from './models/SkillRow';
import { apiUrlBase } from '../../helpers/http-helper';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

  loading: boolean = true;
  skills: SkillRow[] = [];

  constructor(private http: HttpClient) { 
    this.loadSkills();
  }

  loadSkills(): void {
    this.loading = true;
    this.http.get<SkillRow[]>(apiUrlBase + 'api/skills/get').subscribe({
      next: (data) => {
        console.log("got skills: ", data);
        this.skills = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching before and after blurbs', error);
        this.loading = false;
      },
      complete: () => {
        console.log("completed");
      }
    });
  }
}
