import React, { useState, useEffect } from "react";
import Input from "./../Input/Input";
import { Button, Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import axios from "axios";
import { updateUser } from "./../../redux/actions/updateUserAction";
import { addShipingAddress } from "./../../redux/actions/selectAddressAction";
import { connect } from "react-redux";

import styles from "./AddressSelection.module.scss";

const AddressSelection = (props) => {
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

  useEffect(() => {
    axios.get(CONFIG_CONSTANTS.url.GET_REGIONS_MB).then((resp) => {
      setRegionList(resp.data.available_regions);
    });
  }, []);

  const handleInputChange = (key, value) => {
    let user = { ...address };
    user[key] = value;
    setAddress(user);
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
    props.updateUser(userDetails);
    props.addNewAddress(shippingAddress);
  };

  const handleRegionSelect = (e, value) => {
    let addressTemp = { ...address };
    addressTemp.region = value.code;
    addressTemp.region_id = value.id;
    addressTemp.region_code = value.code;
    addressTemp.state = value.name;
    setAddress(addressTemp);
  };

  return (
    <React.Fragment>
      <div className={styles["saved-addresses"]}>
        <h4>Select Shipping Address</h4>
        <div className={styles["sa-container"]}>
          {props.addresses.map((address, index) => (
            <div
              onClick={() => {
                props.selectAddress(index);
              }}
              className={styles["address-box"]}
              key={index}
            >
              <div className={styles["name"]}>
                {`${address.firstname} ${address.lastname}`}
              </div>
              <div className={styles["adr"]}>
                {`${address.street[0]},  ${address.street[1]}`}
                <br />
                {`${address.city}.  ${address.postcode}`}
              </div>
            </div>
          ))}

          <div className={styles["add-controls"]}>
            <div className={styles["header"]}>Add new address</div>
            <div className={styles["controls"]}>
              <div className={styles["name-box"]}>
                <div className={styles["name"]}>
                  <Input
                    title="First Name"
                    placeholder="First Name"
                    variable="firstName"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className={styles["name"]}>
                  <Input
                    title="Last Name"
                    placeholder="Last Name"
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
                  title="Address Line 2"
                  placeholder="Address line 2"
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
                    placeholder="Pincode"
                    variable="pincode"
                    variant="big"
                    //onChange={this.printVal}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className={styles["sc-controls"]}>
                  <Input
                    title="City"
                    placeholder="City"
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

          <div className={styles["add-new"]}>
            <button
              onClick={() => {
                updateAddress();
              }}
              className={styles["add-new-btn"]}
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  userProps: state.userStore,
});
export default connect(mapStateToProps, {
  updateUser,
  addShipingAddress,
})(AddressSelection);
