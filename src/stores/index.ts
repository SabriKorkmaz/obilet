import { observable, action, computed } from "mobx";
import { LocationModel } from "./../services/models/location-model.interface";
import { LocationService } from "../services/location.service";
import { toJS } from "mobx";
import { JourneyService } from "../services/journey.service";
import { JourneyModel } from "../services/models/journey-model.interface";
class MainStore {
  @observable journeyList: LocationModel[] = [];

  @observable selectedOriginId: number = 0;
  @observable selectedDestinationId: number = 0;
  @observable originList: LocationModel[] = [];
  @observable destinationList: LocationModel[] = [];
  @observable departureDate: Date = new Date();
  @observable loading: boolean = false;

  @computed
  get destinations() {
    return toJS(this.originList).filter((k) => k.id != this.selectedOriginId);
  }
  @computed
  get origins() {
    return this.originList;
  }
  @computed
  get journeys() {
    return this.journeyList;
  }

  @computed
  get isLoading() {
    return this.loading;
  }

  @action
  async getLocations() {
    this.loading = true;
    this.originList = await LocationService.getLocations();
    this.loading = false;
  }
  @action
  async getJourneys() {
    this.loading = true;
    this.journeyList = await JourneyService.getJourneys({
      destinationId: this.selectedDestinationId,
      originId: this.selectedOriginId,
      date: this.departureDate,
    } as JourneyModel);
    this.loading = false;
  }
  @action
  setSelectedOrigin(id: number) {
    this.selectedOriginId = id;
  }
  @action
  setSelectedDestination(id: number) {
    this.selectedDestinationId = id;
  }
  @action
  setDepartureDate(date: Date) {
    this.departureDate = date;
  }
}

const mainStore = new MainStore();
export default mainStore;
