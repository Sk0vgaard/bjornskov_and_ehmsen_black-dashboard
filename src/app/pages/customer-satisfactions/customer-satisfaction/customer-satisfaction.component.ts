import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CardInfoModel } from '../../../_models/card-info.model';

@Component({
  selector: 'app-customer-satisfaction',
  templateUrl: './customer-satisfaction.component.html',
  styleUrls: ['./customer-satisfaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSatisfactionComponent implements OnInit {
  @Input() customerSatisfactions: CardInfoModel[];
  public isCollapsed: boolean[];

  public ngOnInit(): void {
    this.isCollapsed = new Array(this.customerSatisfactions.length).fill(false);
  }
}
