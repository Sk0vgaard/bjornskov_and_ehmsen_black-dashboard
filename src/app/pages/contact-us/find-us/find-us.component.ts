import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-find-us',
  templateUrl: 'find-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindUsComponent {
  address = 'Hededammen 9, 6705 Esbjerg Ø';
  googleMapUrl = 'Bjørnskov & Ehmsen tømrer og snedker, Hededammen 9, 6705 Esbjerg, Denmark';
  facebookUrl = 'https://www.facebook.com/profile.php?id=100089879839188';
  instagramUrl = 'https://www.instagram.com/';
  linkedinUrl = 'https://www.linkedin.com/feed/';

  public navigateToAddress(): void {
    window.open(`https://www.google.com/maps/search/${encodeURI(this.googleMapUrl)}`);
  }

  public openFacebook(): void {
    window.open(this.facebookUrl, '_blank');
  }

  // https://xn--bjrnskov-ehmsen-6tb.dk/
  // http://www.xn--bjrnskov-ehmsen-6tb.dk/

  public openInstagram(): void {
    window.open(this.instagramUrl, '_blank');
  }

  public openLinkedIn(): void {
    window.open(this.linkedinUrl, '_blank');
  }
}
