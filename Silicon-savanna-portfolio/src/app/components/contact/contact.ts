import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { fadeIn, slideInUp } from '../../animations/animations';
import { ApiService } from '../../services/api';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  animations: [fadeIn, slideInUp]
})
export class Contact {
  loading = false;
  form: ContactForm = { name: '', email: '', subject: '', message: '' };

  constructor(private apiService: ApiService) {}

  sendEmail(contactForm?: NgForm) {

       console.log('Button clicked!');
    console.log('Form data:', this.form);
    this.loading = true;
    this.apiService.sendContact(this.form).subscribe({
      next: () => {
        console.log('Message sent successfully');
        alert('Message sent successfully!');
        if (contactForm) contactForm.resetForm();
        this.form = { name: '', email: '', subject: '', message: '' };
        this.loading = false;
      },
      error: (err) => {
        console.error('Error sending message:', err);
        alert('Failed to send message. Please try again.');
        this.loading = false;
      }
    });
  }
}