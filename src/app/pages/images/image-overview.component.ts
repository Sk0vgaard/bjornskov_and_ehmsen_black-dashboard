import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
// import Swiper core and required modules
import SwiperCore, { EffectCube, FreeMode, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { ImageModel } from '../../models/image.model';
import { ImageService } from '../../services/image.service';
import { ImageDetailsComponent } from './image-details/image-details.component';
// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation, FreeMode]);

@Component({
  selector: 'app-about-us',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperModule, ImageDetailsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageOverviewComponent implements OnInit {
  public fireImages$: Observable<ImageModel[]>;
  public overviewImages$: Observable<string[]>;

  config: SwiperOptions = {
    effect: 'cube',
    grabCursor: true,
    autoplay: true,
    navigation: true,
    pagination: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    scrollbar: { draggable: true },
  };

  constructor(
    private imageService: ImageService,
    private modalService: NgbModal,
    private firestore: AngularFirestore
  ) {}

  public ngOnInit(): void {
    this.fireImages$ = this.imageService.getOverviewPictures();
    this.overviewImages$ = this.imageService.getImagesByFolder('image-overview/');
  }

  public openImageCategory(categoryName: string): void {
    console.log('openImageCategory', categoryName);
    const modalOptions: NgbModalOptions = {
      size: 'lg',
      centered: true,
    };
    const modalRef = this.modalService.open(ImageDetailsComponent, modalOptions);
    modalRef.componentInstance.categoryName = categoryName;
  }

  public addCategory(): void {
    const imageModel: ImageModel = {
      category: 'floors',
      image: 'someIMAGE',
      fileName: '7050.Jpg',
      id: this.firestore.createId(),
    };

    this.imageService.addCategory(imageModel);
  }
}
