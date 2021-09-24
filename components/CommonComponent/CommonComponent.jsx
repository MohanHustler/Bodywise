import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { PopupBox, confirmBox } from "mosaic-react-components";
import { addToCart } from "./../../redux/actions/addToCartAction";
import { addToCartLite } from "./../../redux/actions/addToCartLiteAction";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import axios from "axios";

const CommonComponent = (props) => {
  const urlInfo = useRouter();
  useEffect(() => {
    if (typeof urlInfo.query["add-to-cart"] === "undefined") {
      return;
    }
    const itemSKU = urlInfo.query["add-to-cart"].split(",");
    const itemQty = urlInfo.query["quantity"]
      ? urlInfo.query["quantity"].split(",")
      : [];
    if (itemSKU.length > 0) {
      itemSKU.forEach((item, index) => {
        const cartProduct = props.cartProps.productList.filter(
          (elem) => elem.name === item
        );
        const qty =
          cartProduct.length > 0
            ? cartProduct[0].quantity + (parseInt(itemQty[index]) || 0)
            : parseInt(itemQty[index]) || 0;
        axios.get(CONFIG_CONSTANTS.url.GET_PRODUCT + item).then((resp) => {
          props.addToCart(JSON.parse(resp.data), qty);
        });
      });
    }
  }, [urlInfo]);

  useEffect(() => {
    getCartDetails();
  }, []);

  const handleExpiry = (resp) => {
    if (resp.status === 401) {
      localStorage.clear()
      confirmBox(
        "Seems like your session is expired. Please login to continue.",
        () => {
          urlInfo.push(`/login?next=${urlInfo.asPath}`);
        },
        () => {
        }
      );
      return false;
    } else {
      return true;
    }
  };

  const getCartDetails = () => {
    let auth =
      localStorage && localStorage.getItem("user-tkn")
        ? "Bearer " + localStorage.getItem("user-tkn")
        : "";
    let headers = {
      "Content-Type": "application/json",
      Authorization: auth,
    };
    if (auth) {
      let url = CONFIG_CONSTANTS.url.QUOTE_MB_CUS + "?fetchProducts=true";
      axios
        .get(url, {
          headers: headers,
          validateStatus: function (status) {
            return true;
          },
        })
        .then((resp) => {
          if (handleExpiry(resp)) {
            if (
              resp.data.cart_products &&
              resp.data.cart_products.length >= 0
            ) {
              const productList = resp.data.cart_products;
              const itemsList = resp.data.items;
              productList.forEach((element, index) => {
                const product = JSON.parse(element);
                const itemCurrent = itemsList.filter(
                  (i) => i.name === product.name
                );
                product.item_id = itemCurrent[0].item_id;
                product.quantity = itemCurrent[0].qty;
                if (itemCurrent[0].name === product.name) {
                  const prod = {
                    product: product,
                    quantity: itemCurrent[0].qty,
                    billing: itemCurrent[0],
                  };
                  props.addToCartLite(prod);
                }
              });
            }
          }
        });
    }
  };

  return <PopupBox />;
};

const mapStateToProps = (state) => ({
  cartProps: state.cartStore,
  userProps: state.userStore,
});
export default connect(mapStateToProps, { addToCart, addToCartLite })(
  CommonComponent
);
