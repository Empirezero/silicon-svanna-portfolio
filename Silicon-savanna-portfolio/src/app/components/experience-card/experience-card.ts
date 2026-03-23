import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ExperienceItem } from '../../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css'
})
export class ExperienceCard {
  @Input() experience!: ExperienceItem;
}