import React from "react";
//import JourneyCart from "../../components/journey-cart";
import { Link } from "react-router-dom";
import * as style from "./style.scss";
import { observer } from "mobx-react";

@observer
class Detail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  componentWillMount() {
    // let requestParam = {
    //   sessionId: this.props.Session.sessionId,
    //   deviceId: this.props.Session.deviceId,
    //   originId: parseInt(this.props.Locations.origin.value),
    //   destinationId: parseInt(this.props.Locations.destination.value),
    //   date: this.props.Locations.date,
    // };
    // getJourneys(requestParam);
  }
  render() {
    // if (this.props.Detail.isLoading) {
    //   return (
    //       <h1>Yükleniyor</h1>
    //   );
    // } else {
    return (
      <div style={style.detailHolderMain}>
        <div style={style.detailSubHolderMain}>
          <Link style={style.link} to="/">
            GERİ
          </Link>
          <h4>
            {/* {this.props..origin.label} -{" "}
              {this.props.Locations.destination.label} */}
          </h4>
          {/* <h6>{date}</h6> */}
        </div>
        {/* {this.props.Detail.journeyList.map(function(val, i) {
            return (
              <JourneyCart
                departure={val.journey.departure}
                arrival={val.journey.arrival}
                price={val.journey["internet-price"]}
                currency={val.journey.currency}
                origin={val.journey.origin}
                destination={val.journey.destination}
                key={i}
              />
            );
          })} */}
      </div>
    );
  }
}

export default Detail;
