import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "./../../redux/actions/addToCartAction";
import { subtractFromCart } from "./../../redux/actions/subtractFromCart";
import QuantityInput from "./../../components/QuantityInput/QuantityInput";
import Rupee from "../../components/Rupee/Rupee";
import Thumbnail from "./../../components/Thumbnail/Thumbnail";
import TotalBox from "./../../components/TotalBox/TotalBox";
import styles from "./Summary.module.scss";
import AppointmentScheduler from "../AppointmentScheduler/appointmentScheduler";
import ReactGA from "react-ga";

export class Summary extends Component {
  state = {};

  componentDidMount() {
    ReactGA.modalview("/checkout/summary");
  }

  onQuantityChange = (status, item) => {
    if (status === "add") this.props.addToCart(item.detail);
    if (status === "subtract") this.props.subtractFromCart(item.detail);
    //this.props.history.push("/cart");
  };

  createAppointment = (date, slot) => {};

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.summary}>
            <div data-test="summary-component" className={styles.addressBox}>
              Delivering to:
              <div className={styles.valuesAddress}>
                {this.props.checkOutProps.address.firstName}{" "}
                {this.props.checkOutProps.address.firstName} <br />
                {this.props.checkOutProps.address.street}
                <br />
                {this.props.checkOutProps.address.city}
                <br />
                {this.props.checkOutProps.address.postcode}
                <br />
                India.
              </div>
              <br />
              Products:
            </div>
            {this.props.cartProps.productList.map((item) => (
              <div key={item.id} className={styles["cart-item-box"]}>
                <div className={styles["cart-item-name"]}>
                  <Thumbnail
                    url={item.photos[0]}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <div className={styles.name}>{item.detail.name}</div>
                </div>
                <QuantityInput
                  value={item.quantity}
                  onQuantityChange={this.onQuantityChange}
                  item={item}
                />
                <div className={styles["cart-item-price"]}>
                  <Rupee> {item.detail.price_info.final_price}</Rupee>
                </div>
              </div>
            ))}
            <TotalBox
              products={this.props.cartProps}
              className={styles["total-box-cl"]}
            />
          </div>
          {/* {this.props.cartProps.prescriptionProducts.length > 0 && ( */}
          <div data-test="scheduler" className={styles.scheduler}>
            <AppointmentScheduler handleAppointment={this.createAppointment} />
          </div>
          {/* )} */}
        </div>
        <div className={styles["chk-out-btn-box"]}>
          <Button
            variant="secondary"
            className={styles["btn continue-shpng-btn"]}
            onClick={() => {
              this.props.handleNextStep(this.props.indexPosition);
            }}
          >
            Proceed to pay
          </Button>
        </div>
      </>
    );
  }
}

const mapPropstoState = (state) => ({
  cartProps: state.cartStore,
  checkOutProps: state.checkOutStore,
});

export default connect(mapPropstoState, { addToCart, subtractFromCart })(
  Summary
);
