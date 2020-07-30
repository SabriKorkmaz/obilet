import React, { Component } from 'react';
import { connect } from "react-redux";
import { getJourneys } from "../../services/detail"
import JourneyCart from "../../components/journey-cart"
import {
  Link
} from "react-router-dom";
import trLocale from 'moment/locale/tr';
import moment from 'moment';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  componentWillMount() {
    let requestParam = {
      sessionId: this.props.Session.sessionId,
      deviceId: this.props.Session.deviceId,
      originId: parseInt(this.props.Locations.origin.value),
      destinationId: parseInt(this.props.Locations.destination.value),
      date: this.props.Locations.date
    }
    getJourneys(requestParam)
  }
  render() {
    moment.updateLocale('tr', trLocale);
    var date = moment(this.props.Locations.date).format("LL") + " " + moment(this.props.Locations.date).format("dddd")

    if (this.props.Detail.isLoading) {
      return (
        <div style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F8F8F8"
        }}>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            color: "white",
            backgroundColor: "#2F4EB4"
          }}>
            <Link style={{
              color: "white",
              fontSize: 22,
              position: "absolute",
              left: "20px"
            }} to="/"> GERİ </Link>
            <h4>{this.props.Locations.origin.label} - {this.props.Locations.destination.label}</h4>
            <h6>{date}</h6>
          </div>
          <h1>yükleniyor</h1>
        </div>

      );
    } else {
      return (
        <div style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F8F8F8"
        }}>

          <div style={{
            width: "100%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            backgroundColor: "#2F4EB4"
          }}>
            <Link style={{
              color: "white",
              fontSize: 22,
              position: "absolute",
              left: "20px"
            }} to="/"> GERİ </Link>
            <h4>{this.props.Locations.origin.label} - {this.props.Locations.destination.label}</h4>
            <h6>{date}</h6>
          </div>{
            this.props.Detail.journeyList.map(function (val, i) {

              return (<JourneyCart
                departure={val.journey.departure}
                arrival={val.journey.arrival}
                price={val.journey["internet-price"]}
                currency={val.journey.currency}
                origin={val.journey.origin}
                destination={val.journey.destination}
                key={i} />)
            })
          }

        </div >
      )
    }

  }
}

const mapStateToProps = (state, ownProps) => ({
  Detail: state.Detail,
  Session: state.Session,
  Locations: state.Locations
})
Detail = connect(mapStateToProps)(Detail);


export default Detail;
