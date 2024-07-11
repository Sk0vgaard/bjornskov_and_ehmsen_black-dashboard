import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../environments/environment';
import { ContactService } from '../../_services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  public isSubmitting: boolean;

  constructor(private contactService: ContactService, private toastr: ToastrService) {}

  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9 ()+-]+$'),
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });

  public onSubmit(): void {
    this.isSubmitting = true;
    emailjs
      .send(
        environment.emailjs.SERVICE_ID,
        environment.emailjs.TEMPLATE_ID,
        this.contactForm.value,
        environment.emailjs.PUBLIC_KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
          this.toastr.success('Din beskeden er blevet sendt');
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        (error) => {
          console.log('FAILED...', error);
          this.toastr.error('Noget gik galt - Prøv igen senere, eller send direkte til: "info@bjornskov-ehmsen.dk"');
          this.isSubmitting = false;
        }
      );
  }

  public get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.contactForm.get('phoneNumber') as FormControl;
  }

  public get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  public get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  public get zipCode(): FormControl {
    return this.contactForm.get('zipCode') as FormControl;
  }

  public get subject(): FormControl {
    return this.contactForm.get('subject') as FormControl;
  }

  public callPhoneNo(): void {
    this.contactService.callBE();
  }

  public mailTo(): void {
    this.contactService.mailBE();
  }
}
