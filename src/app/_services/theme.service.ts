import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Define the initial theme as dark.
  private _theme = new BehaviorSubject<boolean>(true);

  // Provide the current theme as an observable for other components to subscribe.
  public theme$ = this._theme.asObservable();

  // Method to toggle the theme
  public switchTheme(isDark: boolean): void {
    this._theme.next(isDark);
  }
}
