import * as storageConst from "./../../storage.const";
import { SessionStorageUtil } from "../../utils/session-storage.util";
import { IDropdownItem } from "../../components/dropdown/interface";

export abstract class HomeHelper {
  public  static  checkStorage = async () => {
    let departureDate = await SessionStorageUtil.getItem(storageConst.date);
    let destination = await SessionStorageUtil.getItem(storageConst.destination);
    let origin = await SessionStorageUtil.getItem(storageConst.origin);
    if (departureDate && destination && origin) {
      return {
        date: new Date(JSON.parse(departureDate)) as Date,
        destination: JSON.parse(destination) as IDropdownItem,
        origin: JSON.parse(origin) as IDropdownItem,
      };
    }
    return undefined;
  };
  public static setStorage = (
    origin: IDropdownItem,
    destination: IDropdownItem,
    departureDate: Date
  ) => {
    SessionStorageUtil.setItem(storageConst.origin, JSON.stringify(origin));
    SessionStorageUtil.setItem(
      storageConst.destination,
      JSON.stringify(destination)
    );
    SessionStorageUtil.setItem(
      storageConst.date,
      JSON.stringify(departureDate)
    );
  };
}
