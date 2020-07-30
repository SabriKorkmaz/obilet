import { observable, action, computed } from "mobx";
export class MainStore {
  @observable origins:List
  @observable destinations: Moment = moment();
  @observable selectedDate: Moment = moment();

  @action
  changeDate(startDate: Moment, endDate: Moment) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  @computed get startDateFormatted() {
    return this.startDate.format('DD MMMM');
  }

  @computed get endDateFormatted() {
    return this.endDate.format('DD MMMM');
  }

  @computed get startEndDiff() {
    return this.endDate.diff(this.startDate, 'day') + 1; // Include Start Date
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

const dateStore = new DateStore;
export default dateStore;