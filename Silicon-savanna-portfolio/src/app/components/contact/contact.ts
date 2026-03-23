import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  sendEmail() {
    this.loading = true;
    this.apiService.sendContact(this.form).subscribe({
      next: () => {
        alert('Message sent successfully!');
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