import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
// import Swiper core and required modules
import SwiperCore, { EffectCube, FreeMode, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { ImageModel } from '../../_models/image.model';
import { ImageService } from '../../services/image.service';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { FirestoreDbEnum } from './shared/firestore-db.enum';
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
  public imageCategories$: Observable<ImageModel[]>;
  // public overviewImages$: Observable<string[]>;

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

  constructor(private imageService: ImageService, private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.imageCategories$ = this.imageService.getOverviewImages().pipe(
      switchMap((imageModels: ImageModel[]) => {
        return forkJoin(
          imageModels.map((imageModel: ImageModel) => {
            return this.imageService.getFileUrl(`${FirestoreDbEnum.IMAGE_OVERVIEW}/${imageModel.fileName}`).pipe(
              map((url) => {
                imageModel.url = url;
                return imageModel;
              })
            );
          })
        );
      })
    );
    // this.overviewImages$ = this.imageService.getImagesByFolder('image-overview/');
  }

  public openImageCategory(imageModel: ImageModel): void {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
      centered: true,
    };
    const modalRef = this.modalService.open(ImageDetailsComponent, modalOptions);
    modalRef.componentInstance.imageModel = imageModel;
  }

  // public addCategory(): void {
  //   const imageModel: ImageModel = {
  //     category: 'floors',
  //     image: 'someIMAGE',
  //     fileName: '7050.Jpg',
  //     id: this.firestore.createId(),
  //   };
  //
  //   this.imageService.addCategory(imageModel);
  // }
}
