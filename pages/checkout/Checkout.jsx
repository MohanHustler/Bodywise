import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FaArrowLeft, FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { confirmBox } from "mosaic-react-components";
import { fillinitialCart } from "../../redux/actions/fillInitialCart";
import { addToCart } from "../../redux/actions/addToCartAction";
import { subtractFromCart } from "../../redux/actions/subtractFromCart";
import { addUser } from "../../redux/actions/addUser";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import { connect } from "react-redux";
import Input from "../../components/Input/Input";
import TotalBox from "../../components/TotalBox/TotalBox";
import { Accordion, Card, Button, Dropdown, Form } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";
import axios from "axios";
import CONFIG_CONSTANTS from "../../constants/apiList";
import Router from "next/router";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";
import AddressSelection from "../../components/AddressSelection/AddressSelection";
import { addShipingAddress } from "../../redux/actions/selectAddressAction";
import CartIcon from "../../components/CartIcon/CartIcon";
import { clearCart } from "../../redux/actions/clearCartAction";
import Pixel from '../../components/Pixel';

import styles from "./Checkout.module.scss";

const paymentMethods = [
  {
    "code": "razorpay",
    "title": "Razorpay"
  },
  {
    "code": "checkmo",
    "title": "Pay by Cash On Delivery"
  }
]

const Checkout = (props) => {
  let isLoggedIn = false;

  let [address, setAddress] = useState({
    address1: "",
    address2: "",
    pincode: "",
    city: "",
    state: "",
    firstName: "",
    lastName: "",
  });
  let [regionList, setRegionList] = useState([]);
  let [addressList, setAddressList] = useState([]);
  let [selectedAddress, setSelectedAddress] = useState({});
  let [changeAddress, setChangeAddress] = useState(false);
  let [headers, setHeaders] = useState({});
  let [paymentMethod, setPaymentMethod] = useState("razorpay")

  useEffect(() => {
    if (localStorage && localStorage.getItem("cartProps")) {
      props.fillinitialCart(JSON.parse(localStorage.getItem("cartProps")));
    }
    if (localStorage) {
      isLoggedIn = localStorage.getItem("user-tkn") ? true : false;
      setHeaders({
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage
            ? `Bearer ${localStorage.getItem("user-tkn")}`
            : "",
        },
      });
    }
    axios.get(CONFIG_CONSTANTS.url.GET_REGIONS_MB).then((resp) => {
      setRegionList(resp.data.available_regions);
    });
  }, []);

  useEffect(() => {
    if (
      localStorage &&
      localStorage.getItem("user-tkn") &&
      !props.userProps.customer.address
    ) {
      let auth = "Bearer " + localStorage.getItem("user-tkn");
      let headers = {
        "Content-Type": "application/json",
        Authorization: auth,
      };
      axios
        .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, { headers: headers })
        .then((resp) => {
          props.addUser(resp.data);
          setAddressList(resp.data.addresses);
          if (Object.keys(props.userProps.selectedAddress).length > 0) {
            setSelectedAddress(props.userProps.selectedAddress);
          } else if (resp.data.addresses.length > 0) {
            setSelectedAddress(resp.data.addresses[0]);
          }
        });
    }
  }, []);

  const handleAddressSelection = (index) => {
    setSelectedAddress(addressList[index]);
    setChangeAddress(false);
    props.addShipingAddress(addressList[index]);
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

  const handleQuantityChange = (status, unit, item) => {
    if (status === "add") {
      addToCartFn(item, unit);
    } else if (status === "subtract") {
      subtractFromCartFn(item, unit);
    }
  };

  const handleInputChange = (key, value) => {
    let user = { ...address };
    user[key] = value;
    setAddress(user);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("cartId");
    localStorage.removeItem("quote");
    localStorage.removeItem("cartProps");
    props.clearCart();
  };

  const updateAddress = () => {
    let shippingAddress = {
      region: address.region_code,
      region_id: address.region_id,
      country_id: "IN",
      street: [address.address1, address.address2],
      telephone: "1111111",
      postcode: address.pincode,
      city: address.city,
      firstname: address.firstName,
      lastname: address.lastName,
      prefix: "address_",
    };
    // update store and add address for user
    let userDetails = { ...props.userProps.customer };
    userDetails.addresses.push(shippingAddress);
    userDetails.email = "aa@aa.com";
    return shippingAddress;
  };

  const placeOrder = (bliingAddress) => {
    let payData = {
      paymentMethod: {
        method: paymentMethod,
      },
      billing_address: bliingAddress,
    };
    if (paymentMethod === 'checkmo') {
      axios
        .post(CONFIG_CONSTANTS.url.PAYMENT_MB_CUS, payData, headers)
        .then((resp) => {
          fbq('track', 'StartTrial');
          confirmBox(
            "Your order is successfull",
            () => {
              clearLocalStorage();
              Router.replace('/')
            },
            () => {
              clearLocalStorage();
              Router.replace('/')
            }
          )
        });
    } else {
      axios
        .post(CONFIG_CONSTANTS.url.PAYMENT_ORDER_RAZORPAY, {
          "paymentMethod": {
            "method": "razorpay"
          }}, headers)
        .then((resp) => {
          const z = JSON.parse(resp.data)
          const options = {
            "key": z.razorpayKey,
            "amount": props.cartProps.billing.grandTotal,
            "currency": "INR",
            "name": "Be Bodywise",
            "image": "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/logo.svg",
            "order_id": z.razorpayOrderId,
            "handler": (response) => {
              axios
              .post(CONFIG_CONSTANTS.url.PAYMENT_ORDER_RAZORPAY_SUCCESS, {
                payment_method: "razorpay",
                payment_details: response
              } , headers)
              .then(() => {
                fbq('track', 'Purchase', {currency:"INR", value: props.cartProps.billing.grandTotal});
                confirmBox(
                  "Your order is successfull",
                  () => {
                    clearLocalStorage();
                    Router.replace('/')
                  },
                  () => {
                    clearLocalStorage();
                    Router.replace('/')
                  }
                )
              })
            },
          }
          const rzp1 = new Razorpay(options)
          rzp1.open()
        });
    }
  };

  const addNewShippingAddress = () => {
    let shippingAddress = updateAddress();
    let data = {
      addressInformation: {
        shippingAddress: {
          ...shippingAddress,
          sameAsBilling: 1,
          region_code: address.region_code,
        },
        billingAddress: shippingAddress,
        shipping_method_code: "flatrate",
        shipping_carrier_code: "flatrate",
      },
    };
    axios
      .post(CONFIG_CONSTANTS.url.SHIPPING_MODE_ADDRESS_CUS, data, headers)
      .then((resp) => {
        placeOrder(shippingAddress);
      });
  };

  const addShippingById = () => {
    const data = {
      addressId: selectedAddress.id,
      carrierCode: "flatrate",
      methodCode: "flatrate",
    };
    axios
      .post(CONFIG_CONSTANTS.url.SHIPPING_MODE_ADDRESS_CUS_ID, data, headers)
      .then((resp) => {
        let billingAddress = { ...selectedAddress };
        billingAddress.region_id = billingAddress.region.id;
        billingAddress.region = billingAddress.region.region_code;
        placeOrder(billingAddress);
      });
  };

  const handleRegionSelect = (e, value) => {
    let addressTemp = { ...address };
    addressTemp.region = value.code;
    addressTemp.region_id = value.id;
    addressTemp.region_code = value.code;
    addressTemp.state = value.name;
    setAddress(addressTemp);
  };

  const handleNewAddress = (value) => {
    let addTemp = [...addressList];
    addTemp.push(value);
    setAddressList(addTemp);
    setSelectedAddress(value);
    setChangeAddress(false);
  };

  const handleOrderPlace = () => {
    if (selectedAddress && Object.keys(selectedAddress).length) {
      addShippingById();
    } else {
      addNewShippingAddress();
    }
  };
  return (
    <React.Fragment>
      {/* Cart Header */}

      <Pixel/>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <div className={styles["header"]}>
        <div onClick={() => Router.back()} className={styles["back-btn"]}>
          <FaArrowLeft />
        </div>
        <div className={styles["title"]}>Place Order</div>
        <div className={styles["right-controls"]}>
          <div className={styles["cart-icon"]}>
            <CartIcon value={props.cartProps.totalItems} />
          </div>
          <div className={styles["profile"]}></div>
        </div>
      </div>
      <section className={styles["content-bx"]}>
        {/* confirm address title */}
        <div className={styles["briefcase-text"]}>
          Confirm Address and Complete Payment
        </div>
        {/* USer Input */}
        {Object.keys(selectedAddress).length <= 0 && (
          <div className={styles["user-input"]}>
            <div className={styles["greeting"]}>
              Hi {props.userProps.customer.firstname}
            </div>
            <div className={styles["title"]}>
              Please enter your shipping details and complete payment to place
              an order
            </div>
            <div className={styles["controls"]}>
              <div className={styles["name-box"]}>
                <div className={styles["name"]}>
                  <Input
                    title="First Name"
                    placeholder="Enter First Name"
                    variable="firstName"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className={styles["name"]}>
                  <Input
                    title="Last Name"
                    placeholder="Enter Last Name"
                    variable="lastName"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className={styles["address"]}>
                <Input
                  title="Address Line 1"
                  placeholder="Address line 1"
                  variable="address1"
                  variant="big"
                  //onChange={this.printVal}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className={styles["address"]}>
                <Input
                  title="Address Line 1"
                  placeholder="Address line 1"
                  variable="address2"
                  variant="big"
                  //onChange={this.printVal}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className={styles["small-controls"]}>
                <div className={styles["sc-controls"]}>
                  <Input
                    title="Pincode"
                    placeholder="Enter Pincode"
                    variable="pincode"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className={styles["sc-controls"]}>
                  <Input
                    title="City"
                    placeholder="Enter City"
                    variable="city"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className={styles["sc-controls"]}>
                  <SelectableContext.Provider value={false}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {address.state ? address.state : "Select State"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {regionList.map((elem, index) => (
                          <Dropdown.Item
                            as="button"
                            onClick={(e) => handleRegionSelect(e, elem)}
                            key={index}
                          >
                            {elem.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </SelectableContext.Provider>
                </div>
              </div>
            </div>
          </div>
        )}
        {Object.keys(selectedAddress).length > 0 && (
          <div className={styles["sel-addr"]}>
            <div className={styles["top"]}>
              <div className={styles["name"]}>
                Delivering To : {selectedAddress.firstname}{" "}
                {selectedAddress.lastname}
              </div>
              <div
                onClick={() => {
                  setChangeAddress(true);
                }}
                className={styles["change-btn"]}
              >
                Change
              </div>
            </div>
            <div className={styles["addr"]}>
              {`${selectedAddress.street[0]},  ${selectedAddress.street[1]}`}
              <br />
              {`${selectedAddress.city}.  ${selectedAddress.postcode}`}
            </div>
          </div>
        )}
        <div className={styles["payment-section"]}>
          <div className={styles["header"]}>Select Payment Method</div>
          <div className={styles["type"]}>
            <div className={styles["check"]}>
              {paymentMethods.map((item, i) => (
                <Form.Check checked={paymentMethod === item.code} onChange={(e) => setPaymentMethod(e.target.value)} inline key={i} type="radio" label={item.title} value={item.code} name="formHorizontalRadios" id={item.code} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["order-summary"]}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="acc-header">
                  <div className={styles["acc-title"]}>View Order Summary </div>
                  <div className={styles["acc-icon"]}>
                    <FaAngleDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                {/* Cart items/products */}
                <div className={styles["items-box"]}>
                  {props.cartProps.productList.map((item, index) => (
                    <div key={index} className={styles["item"]}>
                      <div className={styles["left"]}>
                        <img src={item.photos[0]} />
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
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <div className="acc-header">
                  <div className={styles["acc-title"]}>View Bill Details </div>
                  <div className={styles["acc-icon"]}>
                    <FaAngleDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <TotalBox data={props.cartProps.billing} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
      <section className={styles["sticky-bottom-box"]}>
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
            <button onClick={() => handleOrderPlace()} className={styles.btn}>
              Place Order
            </button>
          </div>
        </div>
      </section>
      <BottomDrawer show={changeAddress}>
        <AddressSelection
          addresses={addressList}
          selectAddress={handleAddressSelection}
          addNewAddress={handleNewAddress}
        />
      </BottomDrawer>
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
  clearCart,
})(Checkout);
