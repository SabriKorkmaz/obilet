import * as React from "react";
import Select from "react-select";
import * as style from "./style.scss";
import { IDropdownProps, IDropdownState } from "./interface";
export default class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      selected: 0, 
    };
  }
  componentDidMount() {}
  handleChange = (selected: number) => {
    this.setState({ selected: selected });
  };

  render() {
    return (
      <div style={style.dropDownHolder} className="from-dropdown">
        <div>
          <h4>{this.props.label}</h4>
        </div>
        <Select
          value={this.state.selected as any}
          onChange={this.handleChange as any}
        />
      </div>
    );
  }
}
