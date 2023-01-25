import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public callBE(): void {
    window.open(`tel:+45 22 33 76 08`);
  }

  public mailBE(): void {
    console.log('test')
    window.open(`mailto:mark@bjørnskov-ehmsen.dk`);
  }
}
