import Axios, { AxiosInstance } from "axios";
import { ResponseModel } from "./base/response-model.interface";
import { BaseModel } from "./base/base-model.interface";
import { SessionStorageUtil } from "src/utils/session-storage.util";

export abstract class BaseService {
  private static readonly baseUrl = "http://localhost:54761/Home";
  private static axios?: AxiosInstance;
  private static readonly sessionStorageKey: string = "session-token";
  private static readonly deviceStorageKey: string = "device-token";
  static async initAxios() {
    if (this.axios) return;

    let sessionId = SessionStorageUtil.getItem(this.sessionStorageKey);
    let deviceId = SessionStorageUtil.getItem(this.deviceStorageKey);

    if (!sessionId && !deviceId) {
      let session = await this.getSession(this.baseUrl, undefined);
      (sessionId = session.sessionId), (deviceId = session.deviceId);
    }
    this.axios = Axios.create({
      headers: {
        sessionId: sessionId,
        deviceId: deviceId,
      },
      baseURL: this.baseUrl,
      /* other custom settings */
    });
  }

  static async getDataArrayFromApi<ReturnType>(
    apiUrl: string,
    request: any
  ): Promise<ReturnType[]> {
    try {
      const response = await Axios!.post(this.baseUrl + apiUrl, request);
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

  static async getSession(apiUrl: string, request: any): Promise<BaseModel> {
    await this.initAxios();
    try {
      const response = await this.axios!.post(
        this.baseUrl + "getSession",
        request
      );
      const data = response.data as ResponseModel<any>;
      if (response.status == 200) {
        if (data.data.length) {
          return data.data;
        } else {
          return {} as BaseModel;
        }
      } else {
        throw Error("Error occured");
      }
    } catch (error) {
      throw error;
    }
  }
}
