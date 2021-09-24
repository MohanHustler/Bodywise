import { ADD_TO_CART, GET_CART } from "./types";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
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
      () => {
      }
    );
    return false;
  } else {
    return true;
  }
};

let addItemToCart = (productData, dispatch) => {
  let auth =
    localStorage && localStorage.getItem("user-tkn")
      ? "Bearer " + localStorage.getItem("user-tkn")
      : "";
  let headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };
  let url;
  let data;
  const sku = productData.product.sku ? productData.product.sku : productData.product.suggested_prod_sku && productData.product.suggested_prod_sku.length ? productData.product.suggested_prod_sku[0] : '';
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
      fbq('track','AddToCart'); 
      if (handleExpiry(resp) && resp.data && resp.data.items) {
        const curentProd = resp.data.items.filter(
          (elem) => elem.name === productData.product.name
        );
        productData.product["item_id"] = curentProd[0].item_id;
        productData["billing"] = resp.data;
        dispatch({
          type: ADD_TO_CART,
          payload: productData,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      alertBox(err.message);
    });
};

let createQuote = (product, dispatch) => {
  let auth =
    localStorage && localStorage.getItem("user-tkn")
      ? "Bearer " + localStorage.getItem("user-tkn")
      : "";
  let headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };
  let url = auth
    ? CONFIG_CONSTANTS.url.QUOTE_MB_CUS
    : CONFIG_CONSTANTS.url.QUOTE_MB_GUEST;
  axios
    .post(url, null, {
      headers: headers,
      validateStatus: function (status) {
        return true;
      },
    })
    .then((resp) => {
      fbq('track','InitiateCheckout');
      if (handleExpiry(resp)) {
        if (auth) {
          localStorage.setItem("quote", resp.data);
        } else {
          localStorage.setItem("cartId", resp.data);
        }
        addItemToCart(product, dispatch);
      }
    });
};

export const addToCart = (product, quantity) => {
  return (dispatch) => {
    const productData = {
      product: product,
      quantity: quantity,
    };
    setTimeout(() => {
      if (localStorage.getItem("quote")) {
        addItemToCart(productData, dispatch);
      } else {
        if (
          !localStorage.getItem("user-tkn") &&
          localStorage.getItem("cartId")
        ) {
          addItemToCart(productData, dispatch);
        } else {
          let quoteId = createQuote(productData, dispatch);
        }
      }
    }, 0);
  };
};
