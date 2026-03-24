import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeIn, slideInUp, backgroundCircles, scaleIn } from '../../animations/animations';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [fadeIn, slideInUp, backgroundCircles, scaleIn]
})
export class Hero implements OnInit, OnDestroy {
  pageInfo: any = null;
  words: string[] = [];
  displayText = '';
  currentWordIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  private timeout: any;

  constructor(private ngZone: NgZone, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPageInfo().subscribe({
      next: (data) => {
        this.pageInfo = data;
        this.words = [
          `Hi, my name is ${data.title}`,
          "I'm a guy who loves gaming.ts",
          "<ButLovesToCodeMore/>",
        ];
        this.ngZone.runOutsideAngular(() => this.type());
      },
      error: (err) => {
        console.error('Error fetching page info:', err);
        this.words = [
          "Hi, my name is Dancan Ngugi",
          "I'm a guy who loves gaming.ts",
          "<ButLovesToCodeMore/>",
        ];
        this.ngZone.runOutsideAngular(() => this.type());
      }
    });
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];
    if (this.isDeleting) {
      this.currentCharIndex--;
    } else {
      this.currentCharIndex++;
    }

    this.ngZone.run(() => {
      this.displayText = currentWord.substring(0, this.currentCharIndex);
    });

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      this.timeout = setTimeout(() => { this.isDeleting = true; this.type(); }, 2000);
      return;
    }

    if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    this.timeout = setTimeout(() => this.type(), this.isDeleting ? 50 : 100);
  }

  ngOnDestroy() { clearTimeout(this.timeout); }
}