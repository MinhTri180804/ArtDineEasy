import { IImage } from "../../core/Image/imageType";

export interface IDishType {
    id: string;
    description: string;
    price: number;
    productName: string;
    sizeName: string;
    images: IImage[];
}