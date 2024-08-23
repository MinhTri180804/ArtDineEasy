import { IImage } from '../../core/Image/imageType';
import { IStore } from '../Store/storeType';

export interface ITopicRestaurant {
  id: number;
  name: string;
  topicFoodStores: ITopicFoodStore[];
}

interface ITopicFoodStore
  extends Pick<IStore, 'name' | 'address' | 'description'> {
  imageDTOResponse: IImage;
}
