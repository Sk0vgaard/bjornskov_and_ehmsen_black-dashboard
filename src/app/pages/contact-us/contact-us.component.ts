import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {
  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('')
  });

  public onSubmit() {
    console.log(this.contactForm.value);
    // send contact data to server
  }

  get name() {
    return this.contactForm.get('name');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get subject() {
    return this.contactForm.get('subject');
  }
}
