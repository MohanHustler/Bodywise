import { ADD_TO_CART } from "./types";
export const addToCartLite = (addData) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: addData,
    });
  };
};
