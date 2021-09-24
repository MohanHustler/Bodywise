import { ADD_APPOINTMENT } from "./../actions/types";

const initialState = {
  date: "",
  slot: "",
};

let addAppointment = (state, action) => {
  return {
    date: action.payload.date,
    slot: action.payload.slot,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return addAppointment(state, action);
    default:
      return state;
  }
};
