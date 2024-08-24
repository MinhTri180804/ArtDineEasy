import { IImage } from '../../core/Image/imageType';
import { IStore } from '../Store/storeType';

export interface ITopicRestaurant {
  id: number;
  name: string;
  topicFoodStores: ITopicFoodStore[];
}

export interface ITopicFoodStore
  extends Omit<
    IStore,
    'categoryId' | 'email' | 'typeOfImage' | 'multipartFiles' | 'phoneNumber'
  > {
  imageDTOReponese: IImage;
}
