import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ImageModel } from '../../../models/image.model';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageDetailsComponent implements OnInit {
  @Input() imageModel: ImageModel;

  constructor(public activeModal: NgbActiveModal) {}

  public ngOnInit(): void {
    console.log(this.imageModel);
  }
}
