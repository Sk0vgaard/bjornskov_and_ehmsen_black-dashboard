import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PrimaryWorkingAreaModel } from '../../../_models/primary-working-area.model';

@Component({
  selector: 'app-primary-working-area',
  templateUrl: './primary-working-area.component.html',
  styleUrls: ['./primary-working-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryWorkingAreaComponent {
  @Input() primaryWorkingAreaModel: PrimaryWorkingAreaModel;
}
