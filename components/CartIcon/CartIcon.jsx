import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartIcon.module.scss";

const CartIcon = (props) => {
  return (
    <div className={styles["cart-icon-cont"]}>
      <FaShoppingCart />
      {!!props.value && <div className={styles["val"]}>{props.value || 0}</div>}
    </div>
  );
};

export default CartIcon;
