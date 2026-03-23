import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 }))
  ])
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-200px)', opacity: 0 }),
    animate('1.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(200px)', opacity: 0 }),
    animate('1.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ transform: 'translateY(100px)', opacity: 0 }),
    animate('1.2s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({ transform: 'translateY(-100px)', opacity: 0 }),
    animate('1.2s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('1.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);

export const backgroundCircles = trigger('backgroundCircles', [
  transition(':enter', [
    animate('2.5s ease-out', keyframes([
      style({ opacity: 0.1, transform: 'scale(1)', borderRadius: '20%', offset: 0 }),
      style({ opacity: 0.2, transform: 'scale(2)', borderRadius: '20%', offset: 0.25 }),
      style({ opacity: 0.4, transform: 'scale(2)', borderRadius: '50%', offset: 0.5 }),
      style({ opacity: 0.0, transform: 'scale(3)', borderRadius: '80%', offset: 0.75 }),
      style({ opacity: 1.0, transform: 'scale(1)', borderRadius: '20%', offset: 1 }),
    ]))
  ])
]);