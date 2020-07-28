
import React, { Component } from 'react';


class JourneyCart extends Component {

    render() {
        function addZeroBefore(n) {
            return (n < 10 ? '0' : '') + n;
          }
        let departureDate  = new Date(this.props.departure)
        let departureHours = addZeroBefore(departureDate.getHours())
        let departureMinutes = addZeroBefore(departureDate.getMinutes())
        let arrivalDate = new Date(this.props.arrival)
        let arrivalHours = addZeroBefore(arrivalDate.getHours());
        let arrivalMinutes = addZeroBefore(arrivalDate.getMinutes())
      
        return (
            <div style={{
                display: "flex",
                paddingLeft: "20px",
                paddingRight: "20px",
                width: "100%",
                height: "100%",
                flexDirection: "column"
            }} className="list-holder">
                <div style={{
                    display: "flex",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    marginBottom: "10px",
                    flexDirection: "column",
                    minHeight: "80px",
                    width: "100%",
                    backgroundColor: "#F2F2F2"
                }} className="list-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="item-top">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minWidth: "150px" }} className="item-time">
                            <div className="item-from">
                                <h5>Kalkış</h5>
                                <h4>{departureHours}:{departureMinutes}</h4>
                            </div>
                            <div className="item-to">
                                <h5>Varış</h5>
                                <h4>{arrivalHours}:{arrivalMinutes}</h4>
                            </div>
                        </div>
                        <div className="item-price">
                            <h4>{this.props.price} - {this.props.currency}</h4>
                        </div>
                    </div>

                    <div className="item-bot">
                        <h3>
                            {this.props.origin} - {this.props.destination}
                        </h3></div>
                </div>


            </div>
        );
    }
}

export default JourneyCart;