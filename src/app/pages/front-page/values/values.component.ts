import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '../../../_services/theme.service';

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

  public isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.theme$;
  }
}
