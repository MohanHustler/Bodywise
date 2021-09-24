import React, { Component } from "react";
import { Button } from "react-bootstrap";
import OtpInput from "./../OtpInput/OtpInput";
import styles from "./OTPPage.module.scss";
import ReactGA from "react-ga";

class OTPPage extends Component {
  state = {
    otp: "",
  };

  componentDidMount() {
    ReactGA.modalview("/checkout/otp");
  }

  handleOtpChange = (otpValue) => {};

  handleOTPCheck = () => {
    this.props.handleNextStep(1);
  };
  render() {
    return (
      <div data-test="otp-component" className={styles["otp-info-box"]}>
        <div className={styles.msg}>
          Please enter the OTP sent to {9999999999}
        </div>
        <OtpInput
          Value={this.state.otp}
          handleOtpChange={this.handleOtpChange}
        />
        <Button
          onClick={this.handleOTPCheck}
          className={styles.btn}
          variant="primary"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default OTPPage;
