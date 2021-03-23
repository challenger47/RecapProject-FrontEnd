import { Image } from "./image";

export interface Vehicle
{
    id:number;
    brandName:string;
    vehicleName:string;
    color:string;
    model:Date;
    dailyPrice:number;
    description:string;
    brandId: number,
    colorId: number,
    imageDate: Date;
    images: Image[];
   
}