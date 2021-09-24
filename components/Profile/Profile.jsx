import React, { useEffect, useState, Fragment } from "react";

import axios from "axios";

import CONFIG_CONSTANTS from "./../../constants/apiList";

import {
  FaFacebookF,
  FaInstagram,
  FaMobileAlt,
  FaRegEdit,
  FaRegEnvelope,
  FaRegHourglass,
} from "react-icons/fa";
import styles from "./Profile.module.scss";

const Profile = (props) => {
  const responsive = props.responsive;

  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    email: "",
  });

  // const personalData = {
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   email: "",
  // };

  let auth = "Bearer " + localStorage.getItem("user-tkn");
  let headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };

  useEffect(() => {

    let auth = "Bearer " + localStorage.getItem("user-tkn");
    let headers = {
      "Content-Type": "application/json",
      Authorization: auth,
    };

    axios
      .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, {
        headers: headers,
      })
      .then((res) => {
        setData({
          phone_number: res.data.phone_number,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email,
        });
      });
  }, []);

  return responsive ? (
    <Fragment>
      <div className={styles["user-box"]}>
        <div className={styles["image-box"]}>
          <img
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/weight.png"
            alt=""
          />
        </div>
        <div className={styles["data-box"]}>
          <div className={styles["number-box"]}></div>
          <div className={styles["name"]}>
            {data.firstname} {data.lastname}
          </div>
          <div className={styles["user-personal-data"]}>
            <div className={styles["user-personal-item"]}>
              <FaRegEnvelope />
              <label> {data.email}</label>
            </div>
            <div className={styles["user-personal-item"]}>
              <FaMobileAlt />
              <label>+91{data.phone_number}</label>
            </div>
          </div>
          {/* <div className={styles["treatments"]}>
            <div className={styles["title"]}>Ongoing Treatments</div>
            <div className={styles["data"]}>Cleanse + Repair + Nourish</div>
            <div className={styles["date"]}>Started : 16 April 2020</div>
          </div> */}
        </div>
      </div>
      {/* <div className={styles["activities"]}>View Past Activities</div>
      <div className={styles["sticky-btm-btn"]}>My order History</div> */}
    </Fragment>
  ) : (
    <div className={styles["desktop-profile"]}>
      <div className={styles["desktop-profile-user"]}>
        <div className={styles["user-header"]}>
          <div className={styles["user-header-icon"]}>
            <FaRegHourglass />
          </div>
          <div className={styles["user-header-action"]}>
            {/* these 2 following are for edit options */}
            {/* <FaRegEdit /> */}
            {/* <label>Edit</label> */}
          </div>
        </div>
        <div className={styles["user-personal"]}>
          <h2>
            {data.firstname} {data.lastname}
          </h2>
          <div className={styles["user-personal-data"]}>
            <div className={styles["user-personal-item"]}>
              <FaRegEnvelope />
              <label>{data.email}</label>
            </div>
            <div className={styles["user-personal-item"]}>
              <FaMobileAlt />
              <label>+91{data.phone_number}</label>
            </div>
          </div>
        </div>
        {/* Social Media Networks */}

        {/* <div className={styles["user-social"]}>
          <div className={styles["user-social-data"]}>
            <div className={styles["user-social-left"]}>
              <FaInstagram />
              <span>Instagram</span>
            </div>
            <div className={styles["user-social-right"]}>
              <label>Linked</label>
            </div>
          </div>
          <div className={styles["user-social-data"]}>
            <div className={styles["active-left"]}>
              <FaFacebookF />
              <span>Facebook</span>
            </div>
            <div className={styles["active-right"]}>
              <label>Link</label>
            </div>
          </div>
        </div> */}
        {/* <div className={styles["user-btn"]}>
          <button>Change Password</button>
        </div> */}
      </div>
      {/* <div className={styles["desktop-profile-treatment"]}>
        <div className={styles["treatment-list"]}>
          <h2>Ongoing Treatment</h2>
          <div className={styles["product-list"]}>
            <h5>Hair Care</h5>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-left"]}>
                <div>
                  <FaRegHourglass />
                </div>
                <div>
                  <p>Product Name</p>
                  <label>Features 1 + Features 2 + Features 3</label>
                </div>
              </div>
              <div className={styles["product-item-right"]}>
                <span>Started on: 6th July</span>
              </div>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-left"]}>
                <div>
                  <FaRegHourglass />
                </div>
                <div>
                  <p>Product Name</p>
                  <label>Features 1 + Features 2 + Features 3</label>
                </div>
              </div>
              <div className={styles["product-item-right"]}>
                <span>Started on: 6th July</span>
              </div>
            </div>
          </div>
          <div className={styles["product-list"]}>
            <h5>Weight Care</h5>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-left"]}>
                <div>
                  <FaRegHourglass />
                </div>
                <div>
                  <p>Product Name</p>
                  <label>Features 1 + Features 2 + Features 3</label>
                </div>
              </div>
              <div className={styles["product-item-right"]}>
                <span>Started on: 6th July</span>
              </div>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-left"]}>
                <div>
                  <FaRegHourglass />
                </div>
                <div>
                  <p>Product Name</p>
                  <label>Features 1 + Features 2 + Features 3</label>
                </div>
              </div>
              <div className={styles["product-item-right"]}>
                <span>Started on: 6th July</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["treatment-btn"]}>
          <button>Explore</button>
        </div>
      </div> */}
    </div>
  );
};

// Profile.getInitialProps = async () => {
//   const personalData = {
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//   };

//   let auth = "Bearer " + localStorage.getItem("user-tkn");
//   let headers = {
//     "Content-Type": "application/json",
//     Authorization: auth,
//   };

//   const res = await axios.get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, {
//     headers: headers,
//   });

//   console.log(res);

//   personalData.email = res.data.email;
//   personalData.firstName = res.data.firstname;
//   personalData.lastName = res.data.lastname;
//   personalData.phoneNumber = res.data.phone_number;

//   return { personalData: personalData };
// };

export default Profile;
