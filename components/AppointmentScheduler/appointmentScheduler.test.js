import React from "react";
import { shallow } from "enzyme";
import { AppointmentScheduler } from "./appointmentScheduler";
import { getElementBydataKey } from "../../utils/testUtils";

describe("<AppointmentScheduler />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<AppointmentScheduler />);
  });

  it("Should load component", () => {
    let wrapper = getElementBydataKey("as-container", component);
    expect(wrapper.length).toBe(1);
  });

  it("Should return correct days", () => {
    let instance = component.instance();
    let date = new Date("Jun 14 2020");
    let twelveDays = instance.loadNext12Days(date);
    expect(twelveDays[11]).toEqual("Thursday, June 25, 2020");
  });

  it("Should return 12 days", () => {
    let instance = component.instance();
    let date = new Date("Jun 14 2020");
    let twelveDays = instance.loadNext12Days(date);
    expect(twelveDays.length).toBe(12);
  });
});
