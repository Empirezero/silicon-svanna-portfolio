import { Component } from '@angular/core';
import { slideInLeft, slideInRight } from '../../animations/animations';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  animations: [slideInLeft, slideInRight]
})
export class Header {
  socials = [
    { id: 1, name: 'GitHub', url: 'https://github.com/Empirezero', icon: 'bi bi-github' },
    { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/dancan-ngugi', icon: 'bi bi-linkedin' },
    { id: 3, name: 'Twitter', url: 'https://twitter.com', icon: 'bi bi-twitter-x' },
  ];
}