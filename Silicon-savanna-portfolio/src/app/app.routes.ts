import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';
import { ProjectsPage } from './pages/projects-page/projects-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutPage },
  { path: 'projects', component: ProjectsPage },
  { path: '**', redirectTo: '' }
];