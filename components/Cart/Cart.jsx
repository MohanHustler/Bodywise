import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaInfoCircle,
  FaAngleDown,
} from "react-icons/fa";
import { fillinitialCart } from "./../../redux/actions/fillInitialCart";
import { addToCart } from "./../../redux/actions/addToCartAction";
import { subtractFromCart } from "./../../redux/actions/subtractFromCart";
import { addUser } from "./../../redux/actions/addUser";
import { addShipingAddress } from "./../../redux/actions/selectAddressAction";
import QuantityInput from "./../QuantityInput/QuantityInput";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import Input from "./../Input/Input";
import TotalBox from "./../TotalBox/TotalBox";
import axios from "axios";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import CartIcon from "./../CartIcon/CartIcon";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import BottomDrawer from "./../BottomDrawer/BottomDrawer";
import AddressSelection from "./../AddressSelection/AddressSelection";
import { applyCoupon } from "./../../redux/actions/applyCouponAction";
import AuthTabComponent from "../AuthTabComponent/AuthTabComponent";
import OutsideClick from '../OutsideClick'

import styles from "./Cart.module.scss";

const Cart = (props) => {
  let [showStickySection, setShowStickySection] = useState(true);
  let [showUserDetailsDrawer, setShowUserDetailsDrawer] = useState(false);
  let [showOtpDrawer, setShowOtpDrawer] = useState(false);
  let [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    otp: "",
  });
  let [address, setAddress] = useState([]);
  let [couponCode, setCouponCode] = useState("");
  let [loadUDD, setloadUDD] = useState(false);
  let [loggedIn, setLoggedIn] = useState(false);
  let [changeAddress, setChangeAddress] = useState(false);
  let [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  let userTkn;

  useEffect(() => {
    if (localStorage && localStorage.getItem("cartProps")) {
      props.fillinitialCart(JSON.parse(localStorage.getItem("cartProps")));
    }
    if (localStorage) {
      localStorage.getItem("user-tkn") ? setLoggedIn(true) : setLoggedIn(false);
      userTkn = localStorage.getItem("user-tkn")
        ? localStorage.getItem("user-tkn")
        : "";
    }
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    if (localStorage && localStorage.getItem("user-tkn") && !props.userProps.customer.address) {
      let auth = "Bearer " + localStorage.getItem("user-tkn");
      let headers = {
        "Content-Type": "application/json",
        Authorization: auth,
      };
      axios
        .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, { headers: headers })
        .then((resp) => {
          props.addUser(resp.data);
          setUserDetails({
            firstName: resp.data.firstname,
            lastName: resp.data.firstname,
            email: resp.data.email,
            phone: resp.data.phone,
            otp: "",
          });
          setAddress(resp.data.addresses || []);
          props.addShipingAddress(resp.data.addresses[0] || []);
        });
    } else {
      const userData = props.userProps.customer;
      setUserDetails({
        firstName: userData.firstname,
        lastName: userData.firstname,
        email: userData.email,
        phone: userData.phone,
        otp: "",
      });
      setAddress(userData.addresses || []);
      if (userData.addresses) {
        userData.addresses.length > 0
          ? props.addShipingAddress(userData.addresses[0])
          : {};
      }
    }
  };

  const addToCartFn = (product, qty) => {
    props.addToCart(product, product.quantity ? product.quantity + qty : qty);
  };

  const subtractFromCartFn = (product, qty) => {
    props.subtractFromCart(
      product,
      product.quantity ? product.quantity - qty : 0
    );
  };

  const handleOrderPlace = () => {
    setShowStickySection(false);
    if (loggedIn) {
      setShowUserDetailsDrawer(false);
      setloadUDD(false);
      Router.push("/checkout");
    } else {
      setShowUserDetailsDrawer(true);
      setloadUDD(true);
    }
  };

  const handleQuantityChange = (status, unit, item) => {
    if (status === "add") {
      addToCartFn(item, unit);
    } else if (status === "subtract") {
      subtractFromCartFn(item, unit);
    }
  };

  const handleInputChange = (key, value) => {
    let user = { ...userDetails };
    user[key] = value;
    setUserDetails(user);
  };

  useEffect(() => {
    if (userDetails.otp.length >= 4) {
      handleOTPVerify();
    }
  }, [userDetails["otp"]]);

  const handleCouponChange = (key, value) => {
    setCouponCode(value);
  };

  const applyCoupon = () => {
    //the coupon code is saved in couponCode
    props.applyCoupon(couponCode);
  };

  const handleAddressSelection = (index) => {
    setSelectedAddressIndex(index);
    setChangeAddress(false);
    props.addShipingAddress(address[index]);
  };

  const mergeCarts = () => {
    let auth = "Bearer " + localStorage.getItem("user-tkn");
    let headers = {
      "Content-Type": "application/json",
      Authorization: auth,
    };
    axios
      .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, { headers: headers })
      .then((resp) => {
        props.addUser(resp.data);
        let data = {
          customerId: resp.data.id,
          storeId: 1,
        };
        axios
          .put(
            CONFIG_CONSTANTS.url.MERGE_CARTS + localStorage.getItem("cartId"),
            data,
            { headers: headers }
          )
          .then((resp) => {});
      });
  };

  const handleOTPVerify = (resp) => {
    userTkn = resp.data;
    localStorage.setItem("user-tkn", userTkn);
    mergeCarts();
    setLoggedIn(true);
    setShowStickySection(true);
    setShowUserDetailsDrawer(false);
  };

  const handleNewAddress = (value) => {
    let addTemp = [...address];
    addTemp.push(value);
    setAddress(addTemp);
    setSelectedAddressIndex(addTemp.length - 1);
    setChangeAddress(false);
  };
  
  const goTo = () => {
    if (props.onCloseCart) {
      props.onCloseCart();
    } else {
      Router.back();
    }
  }
  
  const authStyle = loadUDD ?  styles["load-udd"] + " " + styles["user-details-drawer"] : styles["user-details-drawer"];
  
  const checkCartItemsExist = props.cartProps && props.cartProps.productList && !!props.cartProps.productList.length && props.cartProps.totalItems
  return (
    <React.Fragment>
      {/* Cart Header */}
      <div className={styles["header"]}>
        <div>
          {props.hideHeader === false && (
            <div onClick={() => Router.back()} className={styles["back-btn"]}>
              <FaArrowLeft />
            </div>
          )}
          <div className={styles["title"]}>Cart</div>
        </div>
        <Image onClick={goTo} className="logo" src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/logo.svg" />
        {checkCartItemsExist ? (
            <div className={styles["right-controls"]}>
              <div className={styles["cart-icon"]}>
                <CartIcon value={props.cartProps.totalItems} />
              </div>
            </div>
          ) : (
          <div />
        )}
      </div>
      {/* health briefcase */}
      {checkCartItemsExist ? (
        <>
          <div className={styles["briefcase-text"]}>
            Your Health Briefcase ({props.cartProps.totalItems} item
            {props.cartProps.totalItems > 1 ? "s" : ""})
          </div>
          {/* Cart items/products */}
          <section className={`${styles["content-bx"]} scrollbar`}>
            <div className={styles["items-box"]}>
              {props.cartProps.productList.map((item, index) => (
                <div key={index} className={styles["item"]}>
                  <div className={styles["left"]}>
                    <Image className="img-contain" src={item.photos && !!item.photos.length ? item.photos[0] : item.banner_image} />
                  </div>
                  <div className={styles["right"]}>
                    <div className={styles["name"]}>{item.name}</div>
                    <div className={styles["desc"]}>Cleanse</div>
                    <div className={styles["buy-price-box"]}>
                      <div className={styles["buy-btn"]}>
                        <QuantityInput
                          onQuantityChange={handleQuantityChange}
                          item={item}
                          value={item.quantity}
                        ></QuantityInput>
                      </div>
                      <div className={styles["price"]}>
                        Rs {item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* condition */}
            <div className={styles["condition"]}>
              <div className={styles["text"]}>
                Your order contains a few prescription items. You will get a free
                consultation once you have placed the order.
              </div>
              <div className={styles["icon"]}>
                <FaInfoCircle />
              </div>
            </div>
            {/* Offers section */}
            <div className={styles["offer-box"]}>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="acc-header">
                      <div className={styles["acc-title"]}>Add Discount</div>
                      <div className={styles["acc-icon"]}>
                        <FaAngleDown />
                      </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className={styles["coupon-box"]}>
                        <Input
                          placeholder="Enter Coupon Code"
                          variable="couponCode"
                          variant="big"
                          handleInputChange={handleCouponChange}
                        />
                        <Button
                          className={styles["cpn-btn"]}
                          onClick={() => applyCoupon()}
                        >
                          Apply
                        </Button>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>

            {/* Bill Details */}
            <div className={styles["bill-box"]}>
              <TotalBox data={props.cartProps.billing} />
            </div>
            {/* sticky section */}
            {showStickySection && props.cartProps && props.cartProps.productList && !!props.cartProps.productList.length && (
              <section className={styles["sticky-bottom-box"]}>
                {address && address.length > 0 && (
                  <div className={styles["address-box"]}>
                    <div className={styles["top"]}>
                      <div className={styles["name"]}>
                        Deliver To :
                        {` ${address[selectedAddressIndex].firstname}  ${address[selectedAddressIndex].lastname}`}
                      </div>
                      <div className="change-address-button" >
                        <div
                          onClick={() => {
                            setChangeAddress(true);
                          }}
                          className={`${styles["change-btn"]} hand`}
                        >
                          Change
                        </div>
                      </div>
                    </div>
                    <div className={styles["bottom"]}>
                      {`${address[selectedAddressIndex].street[0]},  ${address[selectedAddressIndex].street[1]}`}
                      <br />
                      {`${address[selectedAddressIndex].city}.  ${address[selectedAddressIndex].postcode}`}
                    </div>
                  </div>
                )}
                <div className={styles["buy-button-box"]}>
                  <div className={styles["left"]}>
                    <div className={styles["items"]}>
                      {props.cartProps.totalItems} item(s)
                    </div>
                    <div className={styles["price"]}>
                      Rs {props.cartProps.billing.grandTotal}
                    </div>
                  </div>
                  <div className={styles["right"]}>
                    <button
                      onClick={() => handleOrderPlace()}
                      className={styles.btn}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </section>
            )}
          </section>
        </>
      ) : (
        <div style={{ height: '80vh' }} className="disp-flex center" >
          <div className="text-center" >
            <FaShoppingCart size={50} />
            <div className="f-18 m-t-20 bold" >Your Health Briefcase is empty!</div>
            <div className="m-t-10 f-14" >Add products to it now</div>
            <Button onClick={goTo} block className="custom-button m-t-15" >Go back</Button>
          </div>
        </div>
      )}
      {/* User details - botom drawer */}
      {showUserDetailsDrawer && (
        <OutsideClick onClickOutside={() => { setShowUserDetailsDrawer(false); setShowStickySection(true); }} >
          <div className={authStyle}>
            <AuthTabComponent isModal={true} onSuccess={handleOTPVerify} onFailure={()=>{
               setShowUserDetailsDrawer(false);
               setShowStickySection(true);
            }}/>    
          </div>
        </OutsideClick>
      )}
      <OutsideClick onClickOutside={() => setChangeAddress(false)}>
        <BottomDrawer show={changeAddress}>
        <AddressSelection
            addresses={address}
            selectAddress={handleAddressSelection}
            addNewAddress={handleNewAddress}
          />
        </BottomDrawer>
      </OutsideClick>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartStore,
  userProps: state.userStore,
});
export default connect(mapStateToProps, {
  addToCart,
  subtractFromCart,
  fillinitialCart,
  addUser,
  addShipingAddress,
  applyCoupon,
})(Cart);
