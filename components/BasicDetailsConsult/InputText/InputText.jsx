import React from "react";
import styles from "./InputText.module.scss";

const InputText = (props) => {
  const handleChange = (e) => {
    props.handleChange(props.name, e.target.value);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
        className={`${styles["input-consult"]} ${styles[props.name]}`}
        name={props.name}
      />
    </React.Fragment>
  );
};

export default InputText;
