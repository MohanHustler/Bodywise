import React from "react";
import { getElementBydataKey } from "../../utils/testUtils";
import { shallow } from "enzyme";
import QuantityInput from "./QuantityInput";

describe("<QuantityInput />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<QuantityInput />);
  });

  it("Should load component", () => {
    let wrapper = getElementBydataKey("qty-container", component);
    expect(wrapper.length).toBe(1);
  });
});
