import { BaseService } from "./base.service";
import { JourneyModel } from "./models/journey-model.interface";

export abstract class JourneyService {
  private static readonly baseUrl = "journey/";
  static async getJourneys(journeyRequestModel:JourneyModel) {
      return BaseService.getDataArrayFromApi<JourneyModel>(
          this.baseUrl + "getJourneys",
          journeyRequestModel
      );
  }
}