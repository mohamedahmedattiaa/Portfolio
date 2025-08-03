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
    .then((response) => {
      alert('Message sent successfully!');
      console.log('EmailJS Success Response:', response);
      this.formData = { name: '', email: '', message: '' };
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);

      const subject = encodeURIComponent(`Error Sending Message: ${this.formData.name}`);
      const body = encodeURIComponent(
        `There was an issue sending the email through the contact form. Here are the details:\n\n
        Name: ${this.formData.name}\n
        Email: ${this.formData.email}\n
        Message: ${this.formData.message}\n\n
        Error Message: ${err.text || 'Unknown error'}`
      );

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamedahmedattia27@gmail.com&su=${subject}&body=${body}`;

      alert('Message failed to send. Redirecting to Gmail to send a message manually.');
      window.location.href = gmailLink;
    });
  }
}
