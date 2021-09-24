import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import Router from "next/router";
import Loader from "react-loader-spinner";

import styles from "./SignupPage.module.scss";
import Input from "./../Input/Input";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class SignUpPage extends Component {
  otpInput = React.createRef();
  constructor(props){
    super(props);
    this.state = {
      phone: "",
      email: "",
      firstName: "",
      lastName: "",
      otp: "",
      loading: false,
      signUpLoading: false,
      checkUserLoggedIn: false,
      showOtpScreen: false
    };
  }

  componentDidMount() {
    if (
      !Router.query.next &&
      localStorage &&
      localStorage.getItem("user-tkn")
    ) {
      Router.push("/");
    } else {
      this.setState({ checkUserLoggedIn: false });
    }
  }

  // SignUp Function (Used for Signing up User)
  signUp = () => {
    this.setState({ signUpLoading: true });
    let data = new FormData();
    data.set("phoneNumber", this.state.phone);
    data.set("email", this.state.email);
    data.set("firstName", this.state.firstName);
    data.set("lastName", this.state.lastName);
    data.set("otp", this.state.otp);

    // Sign up endpoint
    axios
      .post(CONFIG_CONSTANTS.url.VERIFY_OTP_DETAILS, data)
      .then((resp) => {
        this.setState({ signUpLoading: false });
        this.props.onSuccess(resp);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ signUpLoading: false });
        this.props.onFailure();
        this.setState({
          phone: "",
          email: "",
          otp: "",
          firstName: "",
          lastName: "",
          loading: false,
          showOtpScreen: false,
        });
      });
  };

  // Handling any type of change
  handleChange = (key,value) => {
    this.setState({ [key]: value });
  };

  // Handling OTP Change
  handleOTPChange = (key,value) => {
    this.setState({ [key]: value }, () => {
      if (this.state.otp.length === 4) {
        this.signUp();
      }
    });
  };

  // Function used for sending OTP to User's Phone Number while Signing up
  sendOTP = () => {
    this.setState({ otpLoading: true });
    let data = new FormData();
    data.set("phoneNumber", this.state.phone);
    axios
      .post(CONFIG_CONSTANTS.url.GET_OTP, data)
      .then((resp) => {
        // localStorage.setItem("user-tkn", resp.data);
        this.setState({ otpLoading: false, showOtpScreen: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  sendComponent = () => {
    return <section className={styles["user-details-drawer"]}> 
    <div className={styles["controls"]}>
      <div className={styles["name-box"]}>
        <div className={styles["name"]}>
          <Input
            title="First Name"
            placeholder="Enter First Name"
            variable="firstName"
            name="firstName"
            value={this.state.firstName}
            
            variant="big"
            handleInputChange={this.handleChange}
            //handleInputChange={handleInputChange}
          />
        </div>
        <div className={styles["name"]}>
          <Input
            title="Last Name"
            placeholder="Enter Last Name"
            variable="lastName"
            variant="big"
            handleInputChange={this.handleChange}
            //handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles["email"]}>
        <Input
          title="Email Address"
          placeholder="Enter email address"
          variable="email"
          variant="big"
          handleInputChange={this.handleChange}
          //handleInputChange={handleInputChange}
        />
      </div>
      <div className={styles["phone"]}>
        <Input
          title="Phone"
          placeholder="Enter Phone number"
          variable="phone"
          variant="big"
          handleInputChange={this.handleChange}
          //handleInputChange={handleInputChange}
        />
      </div>
      <div className={styles["send-otp-btn"]}>
        <button onClick={() => this.sendOTP()}>
          Send OTP for verification
        </button>
        <div className={styles["loader-box"]}>
          {this.state.loading && (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={30}
              width={30}
            />
          )}
        </div>
      </div>
      <div className={styles["loader-box"]}>
      {this.state.loading && (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={30}
          width={30}
        />
      )}
    </div>
  </div>    
</section>;
  }

  verifyComponent = () => {
    return <section className={styles["user-details-drawer"]}>
    <div className={styles["title"]}>
      Please enter the 4 digit code sent to your number (
      {this.state.phone})
    </div>
    <div className={styles["controls"]}>
      <div className={styles["otp"]}>
        <Input
          placeholder="Enter OTP"
          variable="otp"
          variant="small"
          type="otp"
          //onChange={this.printVal}
          handleInputChange={this.handleOTPChange}
        />
      </div>
    </div>
    <div className={styles["send-otp-btn"]}>
      <button onClick={() => this.signUp()}>
        Verify Details
      </button>
      <div className={styles["loader-box"]}>
        {this.state.loading && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={30}
            width={30}
          />
        )}
      </div>
    </div>
  </section>;
  }

  render() {
    return (
    <>
    {!this.state.checkUserLoggedIn && (
        <div className={styles["login-container"]}>
          {!this.state.showOtpScreen ? 
            this.sendComponent()
          :
          this.verifyComponent()   
          }
        </div>
    )}
      </>
    );
  }
}

export default SignUpPage;
