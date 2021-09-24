import React from "react";
import cartReducer, { getCartTotal } from "./../reducers/cartReducer";
import { ADD_TO_CART, SUBTRACT_FROM_CART } from "./../actions/types";
import testData from "./../../testData/dataSourceTest";

let data = new testData();
const initialState = data.initialState;
const payload = data.products[0];
const removePayload = data.products[1];

describe("CART REDUCER", () => {
  let initialStateCopy;
  beforeEach(() => {
    initialStateCopy = initialState;
  });

  /***************************** **********************/

  it("Should return correct total for items in cart", () => {
    let totalValues = getCartTotal(initialStateCopy.productList);
    expect(totalValues).toEqual(
      expect.objectContaining({ cart_subtotal: 2289 })
    );
  });

  /***************************** **********************/

  it("Should return default state for unknown action", () => {
    let defaultResp = cartReducer(initialStateCopy, {
      type: "DEFAULT_CASE",
      payload: "",
    });
    expect(defaultResp).toEqual(initialStateCopy);
  });

  /***************************** **********************/

  it("Should update totalItems increment action", () => {
    let incrementResp = cartReducer(initialStateCopy, {
      type: ADD_TO_CART,
      payload: payload,
    });
    expect(incrementResp.totalItems).toEqual(4);
  });

  /***************************** **********************/

  it("Should add the new item for increment action", () => {
    let incrementResp = cartReducer(initialStateCopy, {
      type: ADD_TO_CART,
      payload: payload,
    });
    expect(incrementResp.productList).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 1 })])
    );
  });

  /***************************** **********************/

  it("Should not add new item if already exist", () => {
    let initailLength = initialStateCopy.productList.length;
    let decrementResp = cartReducer(initialStateCopy, {
      type: ADD_TO_CART,
      payload: payload,
    });
    expect(decrementResp.productList.length).toEqual(initailLength);
  });

  /***************************** **********************/

  it("Should update totalItems decrement action", () => {
    let decrementResp = cartReducer(initialStateCopy, {
      type: SUBTRACT_FROM_CART,
      payload: removePayload,
    });
    expect(decrementResp.totalItems).toEqual(2);
  });

  /***************************** **********************/

  it("Should not remove item if items greater than 2", () => {
    let decrementResp = cartReducer(initialStateCopy, {
      type: SUBTRACT_FROM_CART,
      payload: removePayload,
    });
    expect(decrementResp.productList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 2,
        }),
      ])
    );
  });

  /***************************** **********************/

  it("Should remove product if less than 1", () => {
    let decrementResp = cartReducer(initialStateCopy, {
      type: SUBTRACT_FROM_CART,
      payload: removePayload,
    });
    expect(decrementResp.productList).toEqual(
      expect.not.arrayContaining([expect.objectContaining({ id: 2 })])
    );
  });
});
