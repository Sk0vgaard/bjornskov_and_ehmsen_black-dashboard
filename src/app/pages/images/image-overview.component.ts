import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';

import { SwiperDirective } from '../../_directives/swiper.directive';
import { FireStorageImageModel } from '../../_models/fire-storage-image.model';
import { ImageService } from '../../_services/image.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, SwiperDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageOverviewComponent implements OnInit {
  public overviewImages$: Observable<FireStorageImageModel[]>;
  public categoryImages$: Observable<string[]>[] = [];
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiper2') swiper2!: ElementRef<SwiperContainer>;

  constructor(
    private imageService: ImageService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.overviewImages$ = this.imageService.getOverviewImagesWithUrls();
  }

  public clickedState: boolean[] = [];

  public seeMoreImages(folderName: string, categoryIndex: number): void {
    this.categoryImages$[categoryIndex] = this.imageService.getImagesByCategory(`images/${folderName}`);
    this.clickedState[categoryIndex] = true;
  }

  public coverflowSwiperConfig: SwiperOptions = {
    pagination: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  public verticalSwiperConfig: SwiperOptions = {
    direction: 'vertical',
    pagination: true,
    slidesPerView: 'auto',
    mousewheel: true,
    spaceBetween: 50,
    observeSlideChildren: true,
  };
}
