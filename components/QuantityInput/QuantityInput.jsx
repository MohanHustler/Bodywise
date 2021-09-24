import React from "react";
import { Button } from "react-bootstrap";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

import styles from "./QuantityInput.module.scss";

const QuantityInput = (props) => {
  let handleClick = (status, unit, item) => {
    props.onQuantityChange(status, unit, item);
  };
  return (
    <div data-test="qty-container" className={styles["quantity-info-box"]}>
      <Button
        onClick={() => handleClick("subtract", 1, props.item)}
        className={styles.btn}
        variant="secondary"
      >
        <IoMdRemove />
      </Button>

      <input
        disabled
        className={styles["qib--quantity-inp"]}
        type="text"
        name="name"
        value={props.value}
      />

      <Button
        onClick={() => handleClick("add", 1, props.item)}
        className={styles.btn}
        variant="secondary"
      >
        <IoMdAdd />
      </Button>
    </div>
  );
};

export default QuantityInput;
