import { ADD_USER } from "./types";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
export const updateUser = (userData) => {
  return (dispatch) => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage
          ? `Bearer ${localStorage.getItem("user-tkn")}`
          : "",
      },
    };
    axios
      .put(
        CONFIG_CONSTANTS.url.CUSTOMER_DETAILS,
        { customer: userData },
        headers
      )
      .then((resp) => {
        dispatch({
          type: ADD_USER,
          payload: userData,
        });
      });
  };
};
