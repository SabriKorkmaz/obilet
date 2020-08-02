export interface IDropdownProps {
  items?: IDropdownItem[],
  placeHolder: string,
  label:string;
  cacheKey?:string;
  selectedId?:number;
  handleChange?:(param:any)=>void
  handleInputChange?:(param:any)=>void
}

export interface IDropdownState {
  active?: boolean;
  selected:IDropdownItem;
  text?:string;
}

export interface IDropdownItem {
  label: string;
  value:number;
  additional?: string;
}
