import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Cart } from "../pages/cart/Cart";
import { compose } from "redux";
import { getElementBydataKey } from "../utils/testUtils";
import { addToCart } from "../redux/actions/addToCartAction";
import data from "../testData/dataSourceTest";

const addToCartFunc = jest.fn((x) => "add");
const subtractFromCartFunc = jest.fn((x) => "subtract");
let testData = new data();
const props = {
  addToCart: addToCartFunc,
  subtractFromCart: subtractFromCartFunc,
  cartProps: {
    totalItems: 10,
    productList: testData.selectedProducts,
  },
  history: [],
};

const mockStore = configureStore();
const store = mockStore({});

describe("<Cart />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Cart {...props} />);
  });

  it("Should load component", () => {
    const wrapper = getElementBydataKey("cart-component", component);
    expect(wrapper.length).toBe(1);
  });

  it("Should add item on quantity add", () => {
    const instance = component.instance();
    instance.onQuantityChange("add", testData.products[0]);
    expect(addToCartFunc.mock.results[0].value).toEqual("add");
  });

  it("Should remove quantity on quantity sub", () => {
    const instance = component.instance();
    instance.onQuantityChange("subtract", testData.products[0]);
    expect(subtractFromCartFunc.mock.results[0].value).toEqual("subtract");
  });
});
