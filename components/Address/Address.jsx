import React, { Component } from "react";
import Input from "./../Input/Input";
import { Accordion, Card, Button, Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";
import Joi from "@hapi/joi";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import { connect } from "react-redux";
import { addAddress } from "./../../redux/actions/addAddress";
import Router from "next/router";
import styles from "./Address.module.scss";
import ReactGA from "react-ga";

export class Address extends Component {
  state = {
    email: "",
    phone: "",
    line1: "",
    pincode: "",
    line2: "",
    city: "",
    errors: [],
    regions: [],
    selectedState: {},
  };

  componentDidMount() {
    ReactGA.modalview("/checkout/address");
    if (this.props.cartProps.totalItems <= 0) {
      Router.push("/cart");
    }
    axios.get(CONFIG_CONSTANTS.url.GET_REGIONS_MB).then((resp) => {
      this.setState({ regions: resp.data.available_regions });
    });
  }

  schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required(),
    phone: Joi.number().required(),
    line1: Joi.string().required(),
    pincode: Joi.number().required(),
    line2: Joi.string().required(),
    city: Joi.string().required(),
    region: Joi.required(),
    regionId: Joi.required(),
  });

  handleAddressUpdate = () => {
    const isValid = this.validate();
    if (isValid) {
      let data = {
        address: {
          country_id: "IN",
          street: [this.state.line1],
          postcode: this.state.pincode,
          city: this.state.city,
          firstname: "Jane",
          lastname: "Doe",
          customer_id: 4,
          email: this.state.email,
          telephone: this.state.phone,
          same_as_billing: 1,
          region_id: this.state.selectedState.id,
          region: this.state.selectedState.name,
        },
      };
      let headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage
            ? `Bearer ${localStorage.getItem("user-tkn")}`
            : "",
        },
      };
      let url = localStorage.getItem("user-tkn")
        ? CONFIG_CONSTANTS.url.SAVE_ADDRESS_MB_CUS
        : `CONFIG_CONSTANTS.url.SAVE_ADDRESS_MB_GUEST${localStorage.getItem(
            "cartId"
          )}/estimate-shipping-methods`;
      axios.post(url, data, headers).then((resp) => {
        this.props.addAddress({
          address: data.address,
          shippingMethods: resp.data,
        });
        this.props.handleNextStep(0);
      });
    }
  };

  validate() {
    let validationObj = {
      email: this.state.email,
      phone: this.state.phone,
      line1: this.state.line1,
      pincode: this.state.pincode,
      line2: this.state.line2,
      city: this.state.city,
      region: this.state.selectedState.name,
      regionId: this.state.selectedState.id,
    };
    const result = this.schema.validate(validationObj, { abortEarly: false });
    if (!result.error) {
      return true;
    }
    let errorObj = {};
    for (let item of result.error.details) {
      errorObj[item.path[0]] = item;
    }
    this.setState({ errors: errorObj });
    return false;
  }

  handleInputChange = (variable, value) => {
    this.setState({ [variable]: value });
  };

  handleRegionSelect = (e, value) => {
    e.preventDefault();
    this.setState({ selectedState: value });
  };
  render() {
    return (
      <div className={styles["cb--new-address"]}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Add new Address
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Input
                  title="Email Address"
                  placeholder="Enter email address"
                  variable="email"
                  variant="big"
                  //onChange={this.printVal}
                  error={this.state.errors["email"]}
                  handleInputChange={this.handleInputChange}
                />
                <Input
                  title="Phone"
                  placeholder="Enter mobile number"
                  variable="phone"
                  variant="big"
                  //onChange={this.printVal}
                  error={this.state.errors["phone"]}
                  handleInputChange={this.handleInputChange}
                />
                <div className={styles.nameBox}>
                  <div className={styles.smallip}>
                    <Input
                      title="First Name"
                      variable="fname"
                      variant="small"
                      //onChange={this.printVal}
                      handleInputChange={this.handleInputChange}
                    />
                  </div>
                  <div className={styles.smallip2}>
                    <Input
                      title="Last Name"
                      variable="lname"
                      variant="small"
                      handleInputChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <Input
                  title="Address Line 1"
                  placeholder="House/Flat number, Street name"
                  variable="line1"
                  variant="big"
                  error={this.state.errors["line1"]}
                  handleInputChange={this.handleInputChange}
                />
                <Input
                  title="Address Line 2(optional)"
                  placeholder="Enter Area/Locality"
                  variable="line2"
                  variant="big"
                  error={this.state.errors["line2"]}
                  handleInputChange={this.handleInputChange}
                />
                <Input
                  title="Pincode/Zip"
                  variable="pincode"
                  variant="big"
                  error={this.state.errors["pincode"]}
                  handleInputChange={this.handleInputChange}
                />
                <Input
                  title="Town/City"
                  variable="city"
                  variant="big"
                  error={this.state.errors["city"]}
                  handleInputChange={this.handleInputChange}
                />
                <div className="val">
                  <SelectableContext.Provider value={false}>
                    <Dropdown drop="right">
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {this.state.selectedState.name
                          ? this.state.selectedState.name
                          : "Select State"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {this.state.regions.map((elem, index) => (
                          <Dropdown.Item
                            as="button"
                            onClick={(e) => this.handleRegionSelect(e, elem)}
                            key={index}
                          >
                            {elem.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </SelectableContext.Provider>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Button
          onClick={this.handleAddressUpdate}
          className={styles.btn}
          variant="primary"
        >
          Next
        </Button>
      </div>
    );
  }
}

const mapPropstoState = (state) => ({
  checkOutProps: state.checkOutStore,
  cartProps: state.cartStore,
});

export default connect(mapPropstoState, {
  addAddress,
})(Address);
