import React, { Component } from 'react';
import Dropdown from "../../components/dropdown"
import Error from "../../components/error"
import DatePicker from 'react-datepicker';
import {
  Link
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import * as style from "./style.scss"
import { inject, observer } from "mobx-react-lite";
import MainStore from "../../stores/index"

class Home extends React.Component {
  constructor(props) {
    super(props)
   
  }

  componentDidMount() {
  }
  handleChange(date) {

  }
  turnSelections = () => {
  }

  render() {


    return (
      <div style={style.container}>
        <div style={style.containerSection}>
        </div>
        <div style={style.dropdownSection} className="dropdown-section">
          <div style={style.dropdownHolder}>

            <Dropdown title="Nereden" placeHolder="Kalkış Noktası Seçiniz"/>
            <button style={style.turnButton} onClick={() => { this.turnSelections() }} > Çevir</button>
            <Dropdown title="Nereye" placeHolder="Varış Noktası Seçiniz" type="to" />

          </div>
          <div style={style.calenderSection} className="calender-section">
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
          <Error errorText="Geçerli tarih için seçim yapılamaz"  /></div>
      </div >
    );
  }
}

export default observer(Home);

