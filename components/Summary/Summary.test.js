import React from "react";
import { shallow } from "enzyme";
import { Summary } from "./Summary";
import { getElementBydataKey } from "./../../utils/testUtils";
describe("<Summary />", () => {
  let component;
  let props = {
    cartProps: {
      totalItems: 0,
      productList: [],
      prescriptionProducts: [{}, {}],
    },
  };
  beforeEach(() => {
    component = shallow(<Summary {...props} />);
  });

  it("Should component load successfully", () => {
    let wrapper = getElementBydataKey("summary-component", component);
    expect(wrapper.length).toBe(1);
  });

  it("load scheduler if prescription items present", () => {
    let props = {
      cartProps: {
        totalItems: 0,
        productList: [],
        prescriptionProducts: [{}, {}],
      },
    };
    let component = shallow(<Summary {...props} />);
    let wrapper = getElementBydataKey("scheduler", component);
    expect(wrapper.length).toBe(1);
  });

  it("hide scheduler if prescription items present", () => {
    let props = {
      cartProps: {
        totalItems: 0,
        productList: [],
        prescriptionProducts: [],
      },
    };
    let component = shallow(<Summary {...props} />);
    let wrapper = getElementBydataKey("scheduler", component);
    expect(wrapper.length).toBe(0);
  });
});
