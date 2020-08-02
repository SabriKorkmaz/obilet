import * as React from "react";
import Select from "react-select";
import * as style from "./style.scss";
import { IDropdownProps, IDropdownState, IDropdownItem } from "./interface";
import { SessionStorageUtil } from "../../utils/session-storage.util";

export default class Dropdown extends React.Component<
  IDropdownProps,
  IDropdownState
> {
  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      selected: {
        label: this.props.placeHolder,
        value: 0,
      },
      text: "",
    };
  }

  componentDidMount() {
    this._checkStorage();
  }

  _checkStorage = (): void => {
    if (!this.props.cacheKey) return;
    let value = SessionStorageUtil.getItem(this.props.cacheKey);
    if (value) {
      this.setState({ selected: JSON.parse(value) as IDropdownItem });
    }
    return;
  };

  handleChange = (selected: IDropdownItem): void => {
    this.setState({ selected: selected });
    if (this.props.handleChange) {
      this.props.handleChange(selected);
      if (!this.props.cacheKey) return;
      SessionStorageUtil.setItem(this.props.cacheKey, JSON.stringify(selected));
    }
  };
  handleInputChange = (inputValue: any): void => {
    this.setState({ text: inputValue });
    if (this.props.handleInputChange) {
      this.props.handleInputChange(this.state.text);
    }
  };
  render() {
    return (
      <div style={style.dropDownHolder} className="from-dropdown">
        <div>
          <h4>{this.props.label}</h4>
        </div>
        <Select
          options={this.props.items}
          onInputChange={this.handleInputChange}
          value={this.state.selected as any}
          onChange={this.handleChange as any}
        />
      </div>
    );
  }
}
