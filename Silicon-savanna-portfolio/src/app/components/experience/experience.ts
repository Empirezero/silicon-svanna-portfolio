import { Component, OnInit } from '@angular/core';
import { ExperienceCard } from '../experience-card/experience-card';
import { ExperienceItem } from '../../models/experience.model';
import { fadeIn } from '../../animations/animations';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  animations: [fadeIn]
})
export class Experience implements OnInit {
  experiences: ExperienceItem[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching experiences:', err);
        this.loading = false;
      }
    });
  }
}