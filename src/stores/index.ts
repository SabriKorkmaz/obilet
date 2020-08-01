import { observable, action } from "mobx";
import { LocationModel } from "./../services/models/location-model.interface";
export class MainStore {
  @observable origins:LocationModel[] = []
  @observable destinations:LocationModel[] = []

  @action
  setOrigins(origins:LocationModel[]) {
    this.origins = origins;
  }


  @action
  setDestinations(destinations:LocationModel[]) {
    this.destinations = destinations;
  }
  // @action
  // getList() {
  //   this.loading = true;
  //   db.collection("posts")
  //   .get()
  //   .then((querySnapshot) => {
  //     const list = querySnapshot.docs.map((document) => {
  //       return document.data() as PostStoreList;
  //     });
  //     this.list = list;
  //     this.loading = false;
  //   })
  // }
};

const mainStore = new MainStore;
export default mainStore;