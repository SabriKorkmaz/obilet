import { BaseModel } from "../base/base-model.interface";

export interface LocationModel extends BaseModel{
    departure:string;
    arrival:string;
    price:string;
    currency:string;
    origin:string;
    destination:string;
}