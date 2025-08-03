import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css'],
})
export class ContactUs {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const { emailServiceID, emailTemplateID, emailPublicKey } = environment;

    if (!emailServiceID || !emailTemplateID || !emailPublicKey) {
      console.error('EmailJS is not configured properly.');
      alert('Message failed to send: Configuration missing.');
      return;
    }

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(emailServiceID, emailTemplateID, templateParams, emailPublicKey)
      .then(() => {
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
      })
      .catch((err) => {
  console.error('EmailJS Error:', err);
  alert(`Something went wrong. Redirecting you to send an email: ${err.text || 'Unknown error'}`);
       window.location.href = 'mailto:mohamedahmedattia27@example.com';
     });
  }
}