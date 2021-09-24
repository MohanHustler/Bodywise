import { FILL_INITIAL_CART } from "./types";

export const fillinitialCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: FILL_INITIAL_CART,
      payload: data,
    });
  };
};
