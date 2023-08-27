import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { ImageModel } from '../../../_models/image.model';
import { ImageService } from '../../../_services/image.service';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageDetailsComponent implements OnInit {
  @Input() imageModel: ImageModel;
  public images$: Observable<string[]>;

  public thumbsSwiper: any;

  constructor(public activeModal: NgbActiveModal, private imageService: ImageService) {}

  public ngOnInit(): void {
    console.log('ImageDetails: ', this.imageModel);
    this.images$ = this.imageService.getImagesByFolder(`images/${this.imageModel.folderName}`);
  }
}
