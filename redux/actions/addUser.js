import { ADD_USER } from "./types";
export const addUser = (addData) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER,
      payload: addData,
    });
  };
};
