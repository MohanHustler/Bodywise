import { ADD_ADDRESS } from "./../actions/types";

const initialState = {
  address: {},
  shippingMethos: {},
};

let addAddress = (state, action) => {
  return {
    address: action.payload.address,
    shippingMethods: action.payload.shippingMethods,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return addAddress(state, action);
    default:
      return state;
  }
};
