import { Component } from '@angular/core';
import { slideInLeft, fadeIn } from '../../animations/animations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [slideInLeft, fadeIn]
})
export class About {
  name = 'Dancan Ngugi';
  role = 'Full-Stack Developer';
  bio = `I am a passionate Full Stack Developer based in Nairobi, Kenya.
  I have experience building modern web and mobile applications across
  the entire stack — from robust backends with Laravel, Node.js/Express,
  Django, and Python, to responsive frontends with React and modern CSS.
  I also build cross-platform mobile apps with Flutter and manage deployments
  with my growing DevOps expertise. I love transforming ideas into practical
  digital solutions and writing clean, scalable code.`;
}