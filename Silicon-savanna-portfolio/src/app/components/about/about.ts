import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInLeft, fadeIn } from '../../animations/animations';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [slideInLeft, fadeIn]
})
export class About implements OnInit {
  pageInfo: any = null;
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPageInfo().subscribe({
      next: (data) => {
        this.pageInfo = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching page info:', err);
        this.loading = false;
      }
    });
  }
}