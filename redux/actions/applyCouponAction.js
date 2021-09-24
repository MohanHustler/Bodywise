import { APPLY_COUPON, GET_CART } from "./types";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import { alertBox } from "mosaic-react-components";

let applyCouponCode = (couponCode, dispatch) => {
  let auth =
    localStorage && localStorage.getItem("user-tkn")
      ? "Bearer " + localStorage.getItem("user-tkn")
      : "";
  let url;
  let data = null;
  if (auth) {
    url = CONFIG_CONSTANTS.url.QUOTE_MB_CUS + "/coupons/" + couponCode;
  } else {
    url =
      CONFIG_CONSTANTS.url.APPLY_COUPON_MB_GUEST +
      localStorage.getItem("cartId") +
      "/coupons/" +
      couponCode;
  }

  axios
    .put(url)
    .then((resp) => {
      dispatch({
        type: APPLY_COUPON,
        payload: resp.data,
      });
      getCart(dispatch);
    })
    .catch((e) => {
      alertBox(e.message);
    });
};

let getCart = (dispatch) => {
  let auth =
    localStorage && localStorage.getItem("user-tkn")
      ? "Bearer " + localStorage.getItem("user-tkn")
      : "";
  let url;
  let data = null;
  if (auth) {
    url = CONFIG_CONSTANTS.url.QUOTE_MB_CUS + "/totals";
  } else {
    url =
      CONFIG_CONSTANTS.url.APPLY_COUPON_MB_GUEST +
      localStorage.getItem("cartId") +
      "/totals";
  }

  axios.get(url).then((resp) => {
    dispatch({
      type: GET_CART,
      payload: resp.data,
    });
  });
};

export const applyCoupon = (couponCode) => {
  return (dispatch) => {
    applyCouponCode(couponCode, dispatch);
  };
};
