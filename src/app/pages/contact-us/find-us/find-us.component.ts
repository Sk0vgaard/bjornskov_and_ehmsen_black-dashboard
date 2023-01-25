import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-us',
  templateUrl: 'find-us.component.html'
})
export class FindUsComponent implements OnInit {
  address = 'Hededammen 9, 6705 Esbjerg Ø';
  facebookUrl = 'https://www.facebook.com/';
  instagramUrl = 'https://www.instagram.com/';
  linkedinUrl = 'https://www.linkedin.com/feed/';

  constructor() {
  }

  ngOnInit() {
  }

  navigateToAddress() {
    window.open(`https://www.google.com/maps/search/${encodeURI(this.address)}`);
  }

  openFacebook() {
    window.open(this.facebookUrl, '_blank');
  }

  openInstagram() {
    window.open(this.instagramUrl, '_blank');
  }

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }
}
