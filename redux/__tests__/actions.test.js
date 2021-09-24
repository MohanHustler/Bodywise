import * as addtoCartAction from "./../actions/addToCartAction";
import * as subtractFromCartAction from "./../actions/subtractFromCart";
import * as fillInitialCartAction from "./../actions/fillInitialCart";
import * as types from "./../actions//types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create an action to add to cart", () => {
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload: {},
    };
    store.dispatch(addtoCartAction.addToCart({}));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });

  it("should create an action to subtract from cart", () => {
    const expectedAction = {
      type: types.SUBTRACT_FROM_CART,
      payload: {},
    };

    store.dispatch(subtractFromCartAction.subtractFromCart({}));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });

  it("should create an action to fill initial Cart values", () => {
    const expectedAction = {
      type: types.FILL_INITIAL_CART,
      payload: {},
    };
    store.dispatch(fillInitialCartAction.fillinitialCart({}));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});
