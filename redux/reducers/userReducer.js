import { ADD_USER, ADD_SHIPPING_ADDRESS } from "./../actions/types";

const initialState = {
  customer: {},
  selectedAddress: {},
};

let addUser = (state, action) => {
  let stateObj = { ...state };
  stateObj.customer = action.payload;
  return stateObj;
};

let addAddress = (state, action) => {
  let stateObj = { ...state };
  stateObj.selectedAddress = action.payload;
  return stateObj;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case ADD_SHIPPING_ADDRESS:
      return addAddress(state, action);
    default:
      return state;
  }
};
