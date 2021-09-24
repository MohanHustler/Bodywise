import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import ReactGA from "react-ga";

class pay extends Component {
  state = {};

  componentDidMount() {
    ReactGA.modalview("/checkout/payments");
  }

  placeOrder = () => {
    debugger;
    let data = {
      addressInformation: {
        shipping_address: this.props.checkOutProps.address,
        billing_address: this.props.checkOutProps.address,
        shipping_carrier_code: this.props.checkOutProps.shippingMethods[0]
          .carrier_code,
        shipping_method_code: this.props.checkOutProps.shippingMethods[0]
          .method_code,
      },
    };
    let url = localStorage.getItem("user-tkn")
      ? CONFIG_CONSTANTS.url.SHIPPING_MODE_ADDRESS_CUS
      : CONFIG_CONSTANTS.url.SHIPPING_MODE_ADDRESS_GUEST +
        localStorage.getItem("cartId") +
        "/payment-information";
    let headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage
          ? `Bearer ${localStorage.getItem("user-tkn")}`
          : "",
      },
    };
    axios.post(url, data, headers).then((resp) => {
      if (resp.data) {
        this.payForOrder();
      }
    });
  };

  payForOrder = () => {
    let data = {
      paymentMethod: {
        method: "checkmo",
      },
      billing_address: this.props.checkOutProps.address,
    };
    let url = localStorage.getItem("user-tkn")
      ? CONFIG_CONSTANTS.url.PAYMENT_MB_CUS
      : CONFIG_CONSTANTS.url.PAYMENT_MB_GUEST +
        localStorage.getItem("cartId") +
        "/payment-information";
    let headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage
          ? `Bearer ${localStorage.getItem("user-tkn")}`
          : "",
      },
    };
    axios.post(url, data, headers).then((resp) => {
      if (resp.data) {
        alert("order placed");
      }
    });
  };
  render() {
    return (
      <div className="pay-container">
        <Button onClick={() => this.placeOrder()}>Place Order</Button>
      </div>
    );
  }
}

const mapPropstoState = (state) => ({
  checkOutProps: state.checkOutStore,
});

export default connect(mapPropstoState, {})(pay);
