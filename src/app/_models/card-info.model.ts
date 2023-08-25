import { CardImageModel } from './card-image.model';
import { LinkModel } from './link.model';

export interface CardInfoModel {
  category?: string;
  title: string;
  description: string;
  linkModels?: LinkModel[];
  imgModel?: CardImageModel;
}
