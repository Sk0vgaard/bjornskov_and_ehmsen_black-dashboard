import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuesComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() imageAlt: string;
}
