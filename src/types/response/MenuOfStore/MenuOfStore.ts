import { IDishType } from '../Dish/dishType';

export interface IMenuOfStore {
  id: string;
  productResponeseDTOSet: IProductResponseDTOSet;
  foodstoreName: string;
  sectionName: string;
}

interface IProductResponseDTOSet {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  content: IDishType[];
}
