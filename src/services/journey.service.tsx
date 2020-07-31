import { RequestModel } from "./base/request-model.interface";
import { BaseService } from "./base.service";
import { JourneyModel } from "./models/journey-model.interface";

export abstract class LocationService {
  private static readonly baseUrl = "home/journey/";
  static async getJourneys(journeyRequestModel: RequestModel<JourneyModel>) {
      return BaseService.getDataArrayFromApi<JourneyModel>(
          this.baseUrl + "getJourneys",
          journeyRequestModel
      );
  }
}