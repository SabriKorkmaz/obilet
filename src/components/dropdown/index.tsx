import * as LocationsActions from "../../redux/actions/Locations/Locations"
import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from "react-redux";
import { Location } from "../../redux/actions/Locations/Location.interface";
class Dropdown extends React.Component<{Locations:Location}> {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.placeHolder,
            data: [],
            selectedOptionOrigin: null,
            selectedOptionDestination: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeDestination = this.handleChangeDestination.bind(this)
    }
    filterDestinationList(data) {
        if (this.props.Locations.origin != null) {
            let filteredData = data.filter(arrayItem => arrayItem.label !== this.props.Locations.origin.label);
            LocationsActions.reloadDestinationList(filteredData)
        }
    }
    componentDidMount() {
    }
    handleChange = (selectedOptionOrigin) => {
        LocationsActions.setOrigin(selectedOptionOrigin)
    }

    handleChangeDestination = (selectedOptionDestination) => {
        LocationsActions.setDestination(selectedOptionDestination)
    }
    render() {


        if (this.props.type === "from") {
            return (

                <div style={dropDownHolder} className="from-dropdown">
                    <div>
                        <h4>{this.props.title}</h4>
                    </div>

                    <Select
                        value={this.props.Locations.origin}
                        onChange={this.handleChange}
                        options={this.props.Locations.originList}
                        onBlur={() => { this.filterDestinationList(this.props.Locations.originList) }}
                    />

                </div>
            );
        }
        if (this.props.type === "to") {
            return (
                <div style={dropDownHolder} className="from-dropdown">
                    <div>
                        <h4>{this.props.title}</h4>
                    </div>
                    <Select
                        value={this.props.Locations.destination}
                        onChange={this.handleChangeDestination}
                        options={this.props.Locations.destinationList}
                    />
                </div>)
        }
    }
}

const dropDownHolder = {
    minHeight: "70px",
    backgroundColor: "white",
    width: "100%",

    marginBottom: "4px",
    display: "flex",
    paddingRight: "50px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between"
};
const mapStateToProps = (state, ownProps) => ({
    Detail: state.Detail,
    Session: state.Session,
    Locations: state.Locations
})
Dropdown = connect(mapStateToProps)(Dropdown);

export default Dropdown;
