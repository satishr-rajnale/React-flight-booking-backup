import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, shallow, render } from "enzyme";

const initialState = {};
describe("App component", () => {
  let wrapper;
  it("should render without crashing", () => {
    const div = document.createElement("div");
    wrapper = ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should have a header", () => {
    wrapper = mount(<App />);
    expect(wrapper.find("header.App-header").length).toBe(1);
    wrapper.unmount();
  });

  it("should have a search form", () => {
    wrapper = mount(<App />);
    expect(wrapper.find("form.search-form-container").length).toBe(1);
  });

  it("should not have any flight results initially", () => {
    wrapper = mount(<App />);
    expect(wrapper.find("flights-info-container").length).toBe(0);
  });
});
