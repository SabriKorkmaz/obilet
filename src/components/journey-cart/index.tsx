import * as React from "react";
import * as style from "./style.scss";
import { IJourneyCardProps } from "./interface";

export default class JourneyCart extends React.Component<IJourneyCardProps> {
  constructor(props: IJourneyCardProps) {
    super(props);
  }
  render() {
    return (
      <div style={style.listHolder} className="list-holder">
        <div style={style.listItem} className="list-item">
          <div style={style.itemTop} className="item-top">
            <div style={style.itemTime} className="item-time">
              <div className="item-from">
                <h5>Kalkış</h5>
                <h4>{this.props.departureTime}</h4>
              </div>
              <div className="item-to">
                <h5>Varış</h5>
                <h4>{this.props.arrivalTime}</h4>
              </div>
            </div>
            <div className="item-price">
              <h4>
                {this.props.price} - {this.props.currency}
              </h4>
            </div>
          </div>
          <div className="item-bot">
            <h3>
              {this.props.origin} - {this.props.destination}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
