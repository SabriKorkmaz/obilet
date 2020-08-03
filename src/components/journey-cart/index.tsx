import * as React from "react";
import styles from "./style.module.css";
import { IJourneyCardProps } from "./interface";

export default class JourneyCart extends React.Component<IJourneyCardProps> {
  constructor(props: IJourneyCardProps) {
    super(props);
  }

  get departureDate(){
    let date = new Date(this.props.departureTime!)
    return `${date.getHours()}:${date.getMinutes()<10?'0':'' + date.getMinutes()}` 
  }
  get arrivalDate(){
    let date = new Date(this.props.arrivalTime!)
    return `${date.getHours()}:${date.getMinutes()<10?'0':'' + date.getMinutes()}` 
  }
  render() {
    return (
      <div className={styles.listHolder} >
        <div className={styles.listItem} >
          <div className={styles.itemTop}>
            <div className={styles.itemTime} >
              <div >
                <h5>Kalkış</h5>
                <h4>{this.departureDate}</h4>
              </div>
              <div >
                <h5>Varış</h5>
                <h4>{this.arrivalDate}</h4>
              </div>
            </div>
            <div >
              <h4>
                {this.props.price} - {this.props.currency}
              </h4>
            </div>
          </div>
          <div >
            <h3>
              {this.props.origin} - {this.props.destination}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
