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
    const serviceID = environment.emailServiceID;
    const templateID = environment.emailTemplateID;
    const publicKey = environment.emailPublicKey;

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert(`Message failed to send: ${err.text || 'Unknown error'}`);
      });
  }
}
