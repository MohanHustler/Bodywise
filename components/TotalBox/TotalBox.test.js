import React from "react";
import { shallow } from "enzyme";
import TotalBox from "./TotalBox";
import { getElementBydataKey } from "./../../utils/testUtils";

const props = {
  className: "testClass",
  products: {
    cart_subtotal: 100,
    shipping: 0,
  },
};

describe("<TotalBox />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<TotalBox {...props} />);
  });

  it("Should load component", () => {
    let wrapper = getElementBydataKey("data-total-box", component);
    expect(wrapper.length).toBe(1);
  });
});
