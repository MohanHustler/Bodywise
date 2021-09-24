import React, { Component } from "react";
import styles from "./OtpInput.module.scss";

class OtpInput extends Component {
  state = {
    len: 4,
    value: [],
    activeInput: 0,
  };
  refVal = [];

  componentDidMount() {
    this.refVal[0].current.focus();
  }

  handleChange = (e, index) => {
    if (isNaN(e.target.value)) {
      e.target.value = "";
      e.preventDefault();
    }
    let otpValue = [...this.state.value];
    otpValue[index] = e.target.value;
    this.setState({ value: otpValue }, () => {
      this.props.handleOtpChange(this.state.value.join(""));
    });
    if (e.target.value && index < this.state.len - 1) {
      this.refVal[index + 1].current.focus();
    }
  };

  handleBackspace = (e, index) => {
    let key = e.keyCode || e.charCode;
    if ((key === 8 || key === 46) && index > 0) {
      this.refVal[index - 1].current.focus();
    }
  };

  renderView = () => {
    let returnView = [];
    for (let i = 0; i < this.state.len; i++) {
      this.refVal[i] = React.createRef();
      returnView.push(
        <input
          type="text"
          value={this.state.value[i] || ""}
          onChange={(e) => this.handleChange(e, i)}
          className={styles.partitioned}
          maxLength="1"
          ref={this.refVal[i]}
          onKeyUp={(e) => this.handleBackspace(e, i)}
          key={i}
        />
      );
    }
    return returnView;
  };
  render() {
    return <div className={styles["otp-cont"]}>{this.renderView()}</div>;
  }
}

export default OtpInput;
