import React from "react";
import Dropdown from "../../components/dropdown";
import Error from "../../components/error";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./style.module.css";
import { observer } from "mobx-react";
import MainStore from "../../stores/index";
import { LocationMapper } from "../../utils/location-mapper.util";
import { IDropdownItem } from "../../components/dropdown/interface";
import { IHomeState } from "./interface";
import { Redirect } from "react-router-dom";
import { HomeHelper } from "./home.helper";
@observer
export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = { redirect: false, error: false };
  }
  get origins() {
    return LocationMapper.mapToDropdownItem(MainStore.origins);
  }
  get destinations() {
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
  get isValid() {
    this.setState({ error: false });
    return (
      MainStore.departureDate &&
      MainStore.selectedDestinationId &&
      MainStore.selectedOriginId
    );
  }
  get destination() {
    return {
      label: MainStore.destination.name,
      value: MainStore.destination.id,
    } as IDropdownItem;
  }
  get origin() {
    return {
      label: MainStore.origin.name,
      value: MainStore.origin.id,
    } as IDropdownItem;
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
  search = () => {
    if (!this.isValid) {
      this.setState({ error: true });
      return;
    }
    HomeHelper.setStorage(this.origin, this.destination, this.departureDate);
    MainStore.getJourneys();
    this.setState({ redirect: true });
  };
  async componentDidMount() {
    await MainStore.getLocations();
    let storage = await HomeHelper.checkStorage();
    if (storage) {
      MainStore.setSelectedDestination(storage.destination.value);
      MainStore.setSelectedOrigin(storage.origin.value);
      MainStore.setDepartureDate(storage.date);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/detail" />;
    }
    return (
      <div className={styles.container}>
        <div className={styles.containerSection} />
        <div className={styles.dropdownSection}>
          <Dropdown
            handleChange={this.setOrigin}
            label="Nereden"
            items={this.origins}
            value={this.origin}
            placeHolder="Seçiniz"
          />
          <Dropdown
            label="Nereye"
            value={this.destination}
            handleChange={this.setDestination}
            items={this.destinations}
            placeHolder="Seçiniz"
          />
          <button onClick={this.changeTargets}>Çevir</button>
          <div className={styles.calenderSection}>
            <DatePicker
              selected={this.departureDate}
              onChange={this.setDepartureDate}
            />
            <div className={styles.flex}>
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
          <button onClick={this.search}>Bileti Bul</button>
        </div>
        <div className="text-area">
          <Error
            status={this.state.error}
            text="Belirtilen parametreler ile seçim yapılamaz"
          />
        </div>
      </div>
    );
  }
}
