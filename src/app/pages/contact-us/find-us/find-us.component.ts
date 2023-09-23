import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactService } from '../../../_services/contact.service';

@Component({
  selector: 'app-find-us',
  templateUrl: 'find-us.component.html',
  styleUrls: ['./find-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindUsComponent {
  address = 'Hededammen 9, Esbjerg Ø';
  facebookUrl = 'https://www.facebook.com/profile.php?id=100089879839188';
  instagramUrl = 'https://www.instagram.com/';
  linkedinUrl = 'https://www.linkedin.com/company/bjornskov-ehmsen';

  constructor(private contactService: ContactService) {}

  public openFacebook(): void {
    window.open(this.facebookUrl, '_blank');
  }

  public openInstagram(): void {
    window.open(this.instagramUrl, '_blank');
  }

  public openLinkedIn(): void {
    window.open(this.linkedinUrl, '_blank');
  }

  public navigateToAddress(): void {
    this.contactService.navigateToAddress();
  }
}
