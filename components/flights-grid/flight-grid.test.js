import React from "react";
import ReactDOM from "react-dom";

import FlightsGrid from "./flights-grid";
import { mount } from "enzyme";

const criteria = {
  date: "2021-11-26",
  destination: "Munich (MUC)",
  origin: "Pune (PNQ)",
};
const mockFlights = [
  {
    uuid: "1",
    origin: "Pune (PNQ)",
    destination: "Munich (MUC)",
    departureDate: "2021-11-26",
    returnDate: "2016-01-14",
    seatAvailability: 7,
    price: {
      amount: 110.26,
      currency: "EUR",
    },
    offerType: "BestPrice",
  },
];

describe("Flight results component", () => {
  let wrapper;

  it("should render without crashing", () => {
    const div = document.createElement("div");
    wrapper = ReactDOM.render(<FlightsGrid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render search criteria info at the top", () => {
    wrapper = mount(<FlightsGrid flights={mockFlights} criteria={criteria} />);
    expect(wrapper.find(".flight-search-info h3").text()).toBe(
      `${criteria.origin} to ${criteria.destination}`
    );
    wrapper.unmount();
  });

  it("should render result count and selected date", () => {
    const count = mockFlights.length;
    wrapper = mount(<FlightsGrid flights={mockFlights} criteria={criteria} />);
    expect(wrapper.find(".flight-search-info p").text()).toBe(
      `${count} flights found, ${criteria.date}`
    );
    wrapper.unmount();
  });

  it("should render all flights info cards", () => {
    const count = mockFlights.length;
    wrapper = mount(<FlightsGrid flights={mockFlights} criteria={criteria} />);
    expect(wrapper.find(".flights-info-container .card").length).toBe(count);
    wrapper.unmount();
  });
});
