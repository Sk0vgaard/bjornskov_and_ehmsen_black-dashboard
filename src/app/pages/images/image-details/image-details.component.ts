import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { SwiperModule } from 'swiper/angular';

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
  @Input() categoryName: string;

  public thumbsSwiper: any;

  constructor(public activeModal: NgbActiveModal) {}

  public ngOnInit(): void {
    console.log(this.categoryName);
  }
}
