import { ADD_APPOINTMENT } from "./types";

export const addAppointment = (dateSlot) => {
  return (dispatch) => {
    dispatch({
      type: ADD_APPOINTMENT,
      payload: dateSlot,
    });
  };
};
