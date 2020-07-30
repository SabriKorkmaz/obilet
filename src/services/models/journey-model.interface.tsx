import { BaseModel } from "../base/base-model.interface";
export interface JourneyModel extends BaseModel{
    departure:string;
    originId:string;
    destinationId:string;
    date:string;
    arrival:string;
    price:string;
    currency:string;
    origin:string;
    destination:string;
}