import { LocationModel } from "../services/models/location-model.interface";
import { IDropdownProps, IDropdownItem } from "../components/dropdown/interface";

export abstract class LocationMapper {
  static mapToDropdown(item:LocationModel):IDropdownProps {
    let mappedItem:Partial<IDropdownProps> = {}
    Object.keys(item).forEach((k:keyof LocationModel|string)=>{
      if(mappedItem[k]){
        mappedItem[k]  = item[k]
      }
    })
    return mappedItem  as IDropdownProps
  }
  static mapToDropdownItem(items:LocationModel[]){
    return items.map(k=>{ return {label:k.name,value:k.id} as IDropdownItem})
  }
}