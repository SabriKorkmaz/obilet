import Axios, { AxiosInstance } from "axios";
import { ResponseModel } from "./base/response-model.interface";

export abstract class BaseService {
  private static readonly baseUrl = "http://localhost:54761/Home";
  private static axios?: AxiosInstance;

  static async initAxios() {
    if (this.axios) return;
    this.axios = Axios.create({
      baseURL: this.baseUrl,
      /* other custom settings */
    });
  }

  static async getDataArrayFromApi<ReturnType>(
    apiUrl: string,
    request: any
  ): Promise<ReturnType[]> {
    await this.initAxios();
    try {
      const response = await this.axios!.post(this.baseUrl + apiUrl, request);
      const data = response.data as ResponseModel<any[]>;
      if (response.status == 200) {
        if (data.data.length) {
          return data.data;
        } else {
          return [];
        }
      } else {
        throw Error("Error occured");
      }
    } catch (error) {
      throw error;
    }
  }
}
