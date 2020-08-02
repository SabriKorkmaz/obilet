import React from "react";
import Dropdown from "../../components/dropdown";
import Error from "../../components/error";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import * as style from "./style.scss";
import { observer } from "mobx-react";
import MainStore from "../../stores/index";
import { LocationMapper } from "../../utils/location-mapper.util";
import { IDropdownItem } from "../../components/dropdown/interface";
import { IHomeState } from "./interface";

@observer
export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
  }
  
  get origin() {
    return LocationMapper.mapToDropdownItem(MainStore.origins);
  }
  get destination() {
    return LocationMapper.mapToDropdownItem(MainStore.destinations);
  }
  get departureDate() {
    return MainStore.departureDate;
  }
  get nextDay() {
    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return tomorrow;
  }
  setOrigin = (selected: IDropdownItem) => {
    if (selected) {
      MainStore.setSelectedOrigin(selected.value);
    }
  };
  setDestination = (selected: IDropdownItem) => {
    if (selected) {
      MainStore.setSelectedDestination(selected.value);
    }
  };
  setDepartureDate = (date: Date) => {
    MainStore.setDepartureDate(date);
  };
  setDate = (date: Date) => {
    MainStore.setDepartureDate(date);
  };
  changeTargets = () => {
    let origin = MainStore.selectedOriginId;
    let destination = MainStore.selectedDestinationId;
    MainStore.setSelectedDestination(origin);
    MainStore.setSelectedOrigin(destination);
  };
  async componentDidMount() {
    await MainStore.getLocations();
  }
  async componentWillUnmount(){
    await MainStore.getJourneys()
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.containerSection} />
        <div style={style.dropdownSection} className="dropdown-section">
          <div style={style.dropdownHolder}>
            <Dropdown
              cacheKey="origin"
              handleChange={this.setOrigin}
              label="Nereden"
              items={this.origin}
              placeHolder="Seçiniz"
            />
            <button onClick={this.changeTargets} style={style.turnButton}>
              Çevir
            </button>
            <Dropdown
              cacheKey="destination"
              label="Nereye"
              handleChange={this.setDestination}
              items={this.destination}
              placeHolder="Seçiniz"
            />
          </div>
          <div style={style.calenderSection} className="calender-section">
            <DatePicker
              selected={this.departureDate}
              onChange={this.setDepartureDate}
            />
            <div style={style.flex} className="calender-buttons">
              <button
                onClick={() => {
                  this.setDate(new Date());
                }}
              >
                Bugün
              </button>
              <button
                onClick={() => {
                  this.setDate(this.nextDay);
                }}
              >
                Yarın
              </button>
            </div>
          </div>
          <Link
            to="Detail"
            style={style.widthFixed}
            className="btn btn-default"
          >
            Bileti Bul
          </Link>
        </div>
        <div className="text-area">
          <Error text="Geçerli tarih için seçim yapılamaz" />
        </div>
      </div>
    );
  }
}
