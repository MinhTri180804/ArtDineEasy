import { IImage } from '../../core/Image/imageType';

export interface IStore {
  id: number;
  foodStoreId: number;
  name: string;
  address: string;
  description: string;
  imageDTOReponeseList: IImage[];
  attributeResponeseList: IAttributeResponseList[];
}

export interface IAttributeResponseList {
  id: number;
  attributeValue: string;
  atrributeName: string;
}
