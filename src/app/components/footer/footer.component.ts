import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactService } from '../../_services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(private contactService: ContactService) {}

  public navigateToAddress(): void {
    this.contactService.navigateToAddress();
  }

  public callPhoneNo(): void {
    this.contactService.callBE();
  }
}
