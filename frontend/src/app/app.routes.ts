import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { LunarLanderComponent } from './components/pages/projects-page/projects/lunar-lander/lunar-lander.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/lunarLander', component: LunarLanderComponent },
];
