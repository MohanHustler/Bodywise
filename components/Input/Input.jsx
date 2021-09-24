import React, { Component } from "react";
import styles from "./Input.module.scss";
class Input extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    let inputValue = this.state.value;
    inputValue = e.target.value;
    this.setState({ value: inputValue }, () => {
      this.props.handleInputChange(this.props.variable, this.state.value);
    });
  };

  render() {
    return (
      <div className={styles.ipbox}>
        {this.props.title && (
          <div className={styles.labelBox}>{this.props.title}</div>
        )}
        {(!this.props.type || this.props.type != "otp") && (
          <input
            //onChange={handleChange}
            onChange={(e) => this.handleChange(e)}
            className={`${styles["inputclass" + this.props.variant]}`}
            placeholder={this.props.placeholder ? this.props.placeholder : ""}
          ></input>
        )}
        {this.props.type && this.props.type === "otp" && (
          <input
            type="text"
            pattern="\d*"
            className={`${styles["inputclass" + this.props.variant]} ${styles['otpInp']}`}
            maxLength="4"
            onChange={(e) => this.handleChange(e)}
            autoFocus
          ></input>
        )}
        {this.props.error && (
          <div className={styles["ipbox--error"]}>
            {this.props.error.message}
          </div>
        )}
      </div>
    );
  }
}

export default Input;
