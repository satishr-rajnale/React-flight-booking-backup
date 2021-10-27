import React from "react";
import Card from "react-bootstrap/Card";
import { DetailLabel } from "./../detail-label/detail-label";
import nonStopFlightLogo from "./../../assets/nonstop.png";
import "./flight-info.css";

const FlightLogo = () => {
  return (
    <img src={nonStopFlightLogo} alt="FlightLogo" width="32" height="32"></img>
  );
};

export const FlightInfo = (props) => {
  const {
    origin,
    destination,
    seatAvailability,
    price,
    departureDate,
    returnDate,
    offerType,
  } = props.data;

  return (
    <Card>
      <section className={`Flight-info`}>
        <FlightLogo></FlightLogo>
        <DetailLabel mainText={"Origin"} subText={origin}></DetailLabel>
        <DetailLabel
          mainText={"Destination"}
          subText={destination}
        ></DetailLabel>
        <DetailLabel
          mainText={"Departure Date"}
          subText={departureDate}
        ></DetailLabel>
        <DetailLabel
          mainText={"Return Date"}
          subText={returnDate}
        ></DetailLabel>
        <DetailLabel
          mainText={"Seat Availability"}
          subText={seatAvailability}
        ></DetailLabel>
        <DetailLabel
          mainText={price.amount}
          subText={offerType}
          price={true}
        ></DetailLabel>
      </section>
    </Card>
  );
};
