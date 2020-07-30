import { RequestModel } from "./base/request-model.interface";
import { BaseService } from "./base.service";
import { LocationModel } from "./models/location-model.interface";

export abstract class LocationService {
  private static readonly baseUrl = "home/location/";
  static async getJourneys(journeyRequestModel: RequestModel<LocationModel>) {
      return BaseService.getDataArrayFromApi<LocationModel>(
          this.baseUrl + "getLocations",
          journeyRequestModel
      );
  }
}