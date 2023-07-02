import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { CardInfoModel } from '../../../_models/card-info.model';

@Component({
  selector: 'app-collapsed',
  templateUrl: './collapsed.component.html',
  styleUrls: ['./collapsed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsedComponent {
  @Input() cardInfoModel: CardInfoModel;

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  public isCollapsed: boolean;
}
