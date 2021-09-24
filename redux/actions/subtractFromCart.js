import { SUBTRACT_FROM_CART } from "./types";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import axios from "axios";
import { alertBox, confirmBox } from "mosaic-react-components";
import Router from "next/router";

const handleExpiry = (resp) => {
  if (resp.status === 401) {
    localStorage.clear()
    confirmBox(
      "Seems like your session is expired. Please login and try again.",
      () => {
        Router.push(`/login?next=${Router.asPath}`);
      },
      () => {}
    );
    return false;
  } else {
    return true;
  }
};

let subtractFromCartFn = (productData, dispatch) => {
  let url;
  let data;
  let auth =
    localStorage && localStorage.getItem("user-tkn")
      ? "Bearer " + localStorage.getItem("user-tkn")
      : "";
  let headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };

  if (productData.quantity <= 0) {
    url = auth
      ? CONFIG_CONSTANTS.url.ADD_TO_CART_MB_CUS +
        "/" +
        productData.product.item_id
      : CONFIG_CONSTANTS.url.ADD_TO_CART_MB_GUEST +
        localStorage.getItem("cartId") + "/items/" +
        productData.product.item_id +
        "?fetchProducts=false"
    let headers = {
      "Content-Type": "application/json",
      Authorization: auth,
    };
    axios
      .delete(url, {
        headers: headers,
        validateStatus: function (status) {
          return true;
        },
      })
      .then((resp) => {
        if (handleExpiry(resp)) {
          productData["billing"] = resp.data;
          dispatch({
            type: SUBTRACT_FROM_CART,
            payload: productData,
          });
        }
      });
  } else {
    const sku = productData.product.sku
    if (auth) {
      url = CONFIG_CONSTANTS.url.ADD_TO_CART_MB_CUS + "?fetchProducts=false";
      data = {
        cartItem: {
          sku,
          qty: productData.quantity,
          quote_id: localStorage.getItem("quote"),
        },
      };
    } else {
      url =
        CONFIG_CONSTANTS.url.ADD_TO_CART_MB_GUEST +
        localStorage.getItem("cartId") +
        "/items?fetchProducts=false";
      data = {
        cartItem: {
          sku,
          qty: productData.quantity,
          name: productData.product.name,
          quoteId: localStorage.getItem("cartId"),
        },
      };
    }
    axios
      .post(url, data, {
        headers: headers,
        validateStatus: function (status) {
          return true;
        },
      })
      .then((resp) => {
        if (handleExpiry(resp)) {
          productData["billing"] = resp.data;
          dispatch({
            type: SUBTRACT_FROM_CART,
            payload: productData,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alertBox(err.message);
      });
  }
};

export const subtractFromCart = (product, quantity) => {
  // return (dispatch) => {
  //   dispatch({
  //     type: SUBTRACT_FROM_CART,
  //     payload: { product: product, quantity: quantity },
  //   });
  // };
  return (dispatch) => {
    const productData = {
      product: product,
      quantity: quantity,
    };
    setTimeout(() => {
      if (localStorage.getItem("quote")) {
        subtractFromCartFn(productData, dispatch);
      } else {
        if (localStorage.getItem("cartId")) {
          subtractFromCartFn(productData, dispatch);
        }
      }
    }, 0);
  };
};
