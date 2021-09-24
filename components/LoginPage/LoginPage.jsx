import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import Router from "next/router";
import Loader from "react-loader-spinner";
import { addUser } from "./../../redux/actions/addUser";
import Input from "./../Input/Input";

import styles from "./LoginPage.module.scss";

class LoginPage extends Component {
  otpInput = React.createRef();
  state = {
    phone: "",
    otp: "",
    loading: false,
    otpLoading: false,
    checkUserLoggedIn: false,
    showOtpScreen: false,
  };

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
    // this.otpInput.focus();
  }

  handleLogin = () => {
    this.setState({ loading: true });
    let data = new FormData();
    data.set("phoneNumber", this.state.phone);
    data.set("otp", this.state.otp);
    axios
      .post(CONFIG_CONSTANTS.url.LOGIN_MB, data)
      .then((resp) => {
        fbq('track','CompleteRegistration');
        this.props.onSuccess(resp);
      })
      .catch((e) => {
        console.log(e);
        this.props.onFailure();
        this.setState({
          otp: "",
          loading: false,
          otpLoading: false,
          checkUserLoggedIn: false,
        });
      });
  };

  sendOTP = () => {
    // Router.push("/google");
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

  handleChange = (key,value) => {
    this.setState({ [key]: value });
  };

  handleOTPChange = (key,value) => {
    this.setState({ [key]:value }, () => {
      if (this.state.otp.length === 4) {
        this.handleLogin();
      }
    });
  };

  numberComponent = () => {
return <section className={styles["user-details-drawer"]}> 
<div className={styles["inp-box"]}>
  <div className={styles["phone"]}>
    <Input
      title="Phone"
      placeholder="Enter Phone number"
      variable="phone"
      variant="big"
      type="number"
      value={this.state.phone}
      handleInputChange={this.handleChange}
    />
  </div>
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
</section>;
  }

  verifyComponent = () => {
  return <section className={styles["user-details-drawer"]}>
      <div className={styles["inp-box"]}>
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
      </div>
      <div className={styles["send-otp-btn"]}>
      <button onClick={() => this.handleLogin()}>
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
    </section>
  }

  render() {
    return (
      <>
        {!this.state.checkUserLoggedIn && (
          <div className={styles["login-container"]}>
              {!this.state.showOtpScreen ? 
                this.numberComponent()
              :
              this.verifyComponent()       
              }
          </div>
        )}
        {this.state.checkUserLoggedIn && (
          <div className={styles["loading-page"]}>
            Please wait while we get things ready for you...
          </div>
        )}
      </>
    );
  }
}

export default connect(null, { addUser })(LoginPage);
