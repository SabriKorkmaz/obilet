import React, { Component } from 'react';
import { connect } from "react-redux";
import Dropdown from "../../components/dropdown"
import Error from "../../components/error"
import DatePicker from 'react-datepicker';
import {
  Link
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { getLocations } from '../../services/home';
import * as LocationsActions from "../../redux/actions/Locations/Locations"


class Home extends Component {
  constructor(props) {
    super(props)
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    this.state = {
      today: today,
      nextDay: tomorrow,
      startDate: tomorrow,
      DatePickerError: false,
      newDestination: null,
      newOrigin: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.turnSelections = this.turnSelections.bind(this)
  }

  componentDidMount() {
    if (this.props.Locations.originList.length === 0) {
      getLocations(this.props.Session.sessionId, this.props.Session.deviceId)
    }

    var origin = localStorage.getItem("origin")
    var destination = localStorage.getItem("destination")
    var dateTime = localStorage.getItem("date")
    if (origin !== null && destination !== null && dateTime !== null) {
      origin = JSON.parse(origin)
      destination = JSON.parse(destination)
      var convertedDatetime =new Date(dateTime) 
      LocationsActions.setOrigin(origin)
      LocationsActions.setDestination(destination)
      LocationsActions.setDate(convertedDatetime)
    }

  }
  handleChange(date) {


    let today = new Date();
    console.log(typeof date)
    let selectedDate = new Date(date);
    if (selectedDate.getDate() >= today.getDate()) {
      this.setState({ DatePickerError: false })
      LocationsActions.setDate(date)
    }
    else
      this.setState({ DatePickerError: true })

  }
  turnSelections = () => {

    var originValue = this.props.Locations.origin
    var destinationValue = this.props.Locations.destination
    var originList = this.props.Locations.originList
    var newDestinationList = originList.filter(arrayItem => arrayItem.label !== destinationValue.label);
    LocationsActions.reloadDestinationList(newDestinationList)
    LocationsActions.setDestination(originValue)
    LocationsActions.setOrigin(destinationValue)

  }

  render() {


    return (
      <div style={container}>
        <div style={containerSection}>
        </div>
        <div style={dropdownSection} className="dropdown-section">
          <div style={dropdownHolder}>

            <Dropdown title="Nereden" placeHolder="Kalkış Noktası Seçiniz"

              originList={this.props.Locations.originList} type="from" />
            <button style={turnButton} onClick={() => { this.turnSelections() }} > Çevir</button>
            <Dropdown title="Nereye" placeHolder="Varış Noktası Seçiniz"

              destinationList={this.props.Locations.destinationList} type="to" />

          </div>
          <div style={calenderSection} className="calender-section">
            <DatePicker
              selected={this.props.Locations.date}
              onChange={
                this.handleChange
              }
            />
            <div style={{ display: "flex", flexDirection: "column" }} className="calender-buttons">
              <button onClick={() => { this.handleChange(this.state.today) }}>Bugün</button>
              <button onClick={() => { this.handleChange(this.state.nextDay) }}>Yarın</button>
            </div>
          </div>
          <Link to="Detail" style={{ maxWidth: "300px", fontSize: 22 }} className="btn btn-default">
            Bileti Bul
          </Link>


        </div>
        <div className="text-area">
          <Error errorText="Geçerli tarih için seçim yapılamaz" error={this.state.DatePickerError} /></div>
      </div >
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  Locations: state.Locations,
  Session: state.Session
})
Home = connect(mapStateToProps)(Home);


export default Home;

const container = {
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#F8F8F8"
}
const containerSection = {
  width: "100%",
  height: "40px",
  backgroundColor: "#2F4EB4"
}
const dropdownSection = {
  width: "100%",
  minHeight: "300px",
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingLeft: "10px",
  paddingRight: "10px",
}
const dropdownHolder = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-between"
}
const turnButton = {
  height: "40px",
  alignSelf: "flex-end",
  marginBottom: "-20px",
  marginTop: "-20px",
  zIndex: 100,
  width: "40px",
  right: 10,
  borderRadius: "20px",
  textAlign: "center"
}
const calenderSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "300px"
}