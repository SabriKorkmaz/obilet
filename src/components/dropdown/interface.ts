export interface IDropdownProps {
  items: IDropdownItem[],
  placeHolder: string,
  label:string;
}

export interface IDropdownState {
  active?: boolean;
  selected: number|string;
}

export interface IDropdownItem {
  text: React.ReactElement<any> | string;
  additional?: string;
}
