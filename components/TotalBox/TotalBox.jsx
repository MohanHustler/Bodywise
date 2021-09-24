import React from "react";
import styles from "./TotalBox.module.scss";
import Rupee from "./../Rupee/Rupee";

const TotalBox = (props) => {
  return (
    <div data-test="data-total-box" className={styles["mm-total-box"]}>
      <div className={styles["header"]}>Bill Details</div>
      {/* <div className="tb--sub-total">
        <div className="title">Sub-Total</div>
        <div className="value">
          {" "}
          <Rupee>1234</Rupee>
        </div>
      </div>
      <div className="tb--sub-total">
        <div className="title discount">Discount</div>
        <div className="value">
          {" "}
          <Rupee>1234</Rupee>
        </div>
      </div> 
      <div className="seperator"></div> */}
      <div className={styles["tb--sub-total"]}>
        <div className={styles.title}>Item Total</div>
        <div className={styles.value}>
          {" "}
          <Rupee>{props.data.cart_subtotal || 0}</Rupee>
        </div>
      </div>
      <div className={styles["tb--sub-total"]}>
        <div className={styles.discount}>Discount</div>
        <div className={styles.value}>
          {" "}
          <Rupee>{props.data.discount || 0}</Rupee>
        </div>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles["tb--sub-total"]}>
        <div className={styles.title}>Subtotal</div>
        <div className={styles.value}>
          {" "}
          <Rupee>{props.data.grandTotal || 0}</Rupee>
        </div>
      </div>
      <div className={styles["tb--sub-total"]}>
        <div className={styles.discount}>Shipping</div>
        <div className={styles.value}>
          {props.data.shipping > 0 ? (
            <Rupee>{props.data.shipping}</Rupee>
          ) : (
            "Free!"
          )}
        </div>
      </div>
      <div className={styles.seperator}></div>
      <div className={`${styles["tb--sub-total"]} ${styles["total-box"]}`}>
        <div className={`${styles.title} ${styles.final}`}>Total Payable</div>
        <div className={styles.value}>
          {" "}
          <Rupee>{props.data.grandTotal || 0}</Rupee>
          {/* <Rupee>
            {(props.data.cart_subtotal||0) + (props.data.shipping||0) + (props.data.discount||0)}
          </Rupee>
        </div>
        <div className={styles.value}>
          {"Discount"}
          <Rupee>
            {(props.products.discount||0)}
          </Rupee> */}
        </div>
      </div>
    </div>
  );
};

export default TotalBox;
