import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  constructor(private contactService: ContactService) {}

  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9 ()+-]+$'),
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });

  public onSubmit(): void {
    console.log(this.contactForm.value);
    // send contact data to server
  }

  public get name() {
    return this.contactForm.get('name');
  }

  public get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  public get email() {
    return this.contactForm.get('email');
  }

  public get message() {
    return this.contactForm.get('message');
  }

  public get subject() {
    return this.contactForm.get('subject');
  }

  public callPhoneNo(): void {
    this.contactService.callBE();
  }

  public mailTo(): void {
    this.contactService.mailBE();
  }
}
