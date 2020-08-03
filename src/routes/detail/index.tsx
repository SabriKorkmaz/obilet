import React from "react";
import JourneyCart from "../../components/journey-cart";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { observer } from "mobx-react";
import MainStore from "../../stores/index";

@observer
class Detail extends React.Component {
  render() {
    if (MainStore.isLoading) {
      return <h1>Yükleniyor</h1>;
    } else {
      return (
        <div className={styles.detailHolderMain}>
          <div className={styles.detailSubHolderMain}>
            <Link className={styles.link} to="/">
              GERİ
            </Link>
            <h4 />
          </div>
          {MainStore.journeyList.map(function(val:any, i) {
            return (
              <JourneyCart
                price={val.journey["internet-price"]}
                departureTime={val.journey.departure}
                currency={val.journey.currency}
                arrivalTime={val.journey.arrival}
                origin={val.journey.origin}
                destination={val.journey.destination}
                key={i}
              />
            );
          })}
        </div>
      );
    }
  }
}
export default Detail
