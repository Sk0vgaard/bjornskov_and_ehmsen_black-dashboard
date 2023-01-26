import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public callBE(): void {
    window.open('tel:+45 22 33 76 08');
  }

  public mailBE(): void {
    window.open('mailto:mark@bjørnskov-ehmsen.dk');
  }
}
