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

  constructor(
    private imageService: ImageService,
    private modal: NgbModal
  ) {}

  public ngOnInit(): void {
    this.overviewImages$ = this.imageService.getOverviewImagesWithUrls();
  }

  public clickedState: boolean[] = [];

  public seeMoreImages(folderName: string, categoryIndex: number): void {
    if (this.clickedState[categoryIndex] === true) {
      return;
    }
    this.categoryImages$[categoryIndex] = this.imageService.getImagesByCategory(`images/${folderName}`);
    this.clickedState[categoryIndex] = true;
  }

  public verticalSwiperConfig: SwiperOptions = {
    direction: 'horizontal',
    grabCursor: true,
    pagination: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: true,
    spaceBetween: 50,
  };
}
