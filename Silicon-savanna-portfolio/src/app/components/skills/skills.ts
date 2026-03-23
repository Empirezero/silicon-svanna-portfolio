import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { fadeIn, slideInLeft, slideInRight } from '../../animations/animations';
import { ApiService } from '../../services/api';
import { Observable } from 'rxjs';

interface Skill {
  id: number;
  title: string;
  progress: number;
  image: string;
}

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  animations: [fadeIn, slideInLeft, slideInRight]
})
export class Skills {
  skills$: Observable<Skill[]>;

  constructor(private apiService: ApiService) {
    this.skills$ = this.apiService.getSkills();
  }
}