import { ADD_SHIPPING_ADDRESS } from "./types";
export const addShipingAddress = (addData) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SHIPPING_ADDRESS,
      payload: addData,
    });
  };
};
