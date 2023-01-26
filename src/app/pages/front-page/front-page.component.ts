import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontPageComponent {}
