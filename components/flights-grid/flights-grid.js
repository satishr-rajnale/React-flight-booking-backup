import React from "react";
import "./flight-grid.css";
import { FlightSearchInfo } from "./../flight-search-info/flight-search-info";
import { FlightInfo } from "./../flight-info/flight-info";

const FlightsGrid = (props) => {
  const flights = props.flights || [];

  return (
    <div className="flights-info-container">
      {props.criteria && (
        <FlightSearchInfo
          criteria={props.criteria}
          count={flights.length || 0}
        />
      )}
      {flights &&
        flights.map((flight) => <FlightInfo data={flight} key={flight.uuid} />)}
    </div>
  );
};

export default FlightsGrid;
