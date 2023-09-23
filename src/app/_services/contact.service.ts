import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  googleMapUrl = 'Bjørnskov & Ehmsen tømrer og snedker, Hededammen 9, 6705 Esbjerg, Denmark';
  public callBE(): void {
    window.open('tel:+45 22 33 76 08');
  }

  public mailBE(): void {
    window.open('mailto:info@bjørnskov-ehmsen.dk');
  }

  public navigateToAddress(): void {
    window.open(`https://www.google.com/maps/search/${encodeURI(this.googleMapUrl)}`);
  }
}
