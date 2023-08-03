import { CardImageModel } from './card-image.model';

export interface CardInfoModel {
  category?: string;
  title: string;
  description: string;
  imgModel?: CardImageModel;
}
