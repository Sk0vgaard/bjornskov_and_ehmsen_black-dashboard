import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
