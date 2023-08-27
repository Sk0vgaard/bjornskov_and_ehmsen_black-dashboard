import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
// import Swiper core and required modules
import SwiperCore, { EffectCube, FreeMode, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { FirestoreImageModel } from '../../_models/firestore-image.model';
import { ImageService } from '../../_services/image.service';
import { FirestoreDbEnum } from './firestore-db.enum';
import { ImageDetailsComponent } from './image-details/image-details.component';
// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation, FreeMode]);

@Component({
  selector: 'app-about-us',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperModule, ImageDetailsComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageOverviewComponent implements OnInit {
  public imageCategories$: Observable<FirestoreImageModel[]>;

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
      switchMap((imageModels: FirestoreImageModel[]) => {
        return forkJoin(
          imageModels.map((imageModel: FirestoreImageModel) => {
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
  }

  public openImageCategory(imageModel: FirestoreImageModel): void {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
      centered: true,
    };
    const modalRef = this.modalService.open(ImageDetailsComponent, modalOptions);
    modalRef.componentInstance.imageModel = imageModel;
  }
}
