import { Component, OnInit } from '@angular/core';
import { fadeIn, slideInDown } from '../../animations/animations';
import { ApiService } from '../../services/api';

interface Technology {
  id: number;
  title: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  summary: string;
  image: string;
  link_to_build: string;
  technologies: Technology[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [fadeIn, slideInDown]
})
export class Projects implements OnInit {
  projects: Project[] = [];
  loading = true;
  loaded = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
        setTimeout(() => this.loaded = true, 0);
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
        this.loading = false;
      }
    });
  }
}