import React from "react";
import ReactDOM from "react-dom";

import { FlightInfo } from "./flight-info";
import { mount, shallow } from "enzyme";

const flight = {
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
};

describe("Flight results component", () => {
  let wrapper;

  it("should render without crashing", () => {
    const div = document.createElement("div");
    wrapper = ReactDOM.render(<FlightInfo data={flight} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render non-stop flight logo", () => {
    wrapper = shallow(<FlightInfo data={flight} />);
    expect(wrapper.find("FlightLogo").length).toBe(1);
    wrapper.unmount();
  });

  it("should render flight details", () => {
    wrapper = mount(<FlightInfo data={flight} />);
    expect(wrapper.find(".detail-label h4").at(0).text()).toBe("Origin");
    expect(wrapper.find(".detail-label p").at(0).text()).toBe("Pune (PNQ)");
    wrapper.unmount();
  });

  it("should show flight duration", () => {
    wrapper = mount(<FlightInfo data={flight} />);
    expect(wrapper.find(".detail-label h4").at(4).text()).toBe(
      "Seat Availability"
    );
    expect(wrapper.find(".detail-label p").at(4).text()).toBe("7");
    wrapper.unmount();
  });
});
