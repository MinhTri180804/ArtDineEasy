import { IImage } from '../../core/Image/imageType';

export interface ICategoryOfStore {
  id: number;
  name: string;
  description: string;
  foodStoreReponeseSet: null;
  imageDTOReponese: IImage;
}
