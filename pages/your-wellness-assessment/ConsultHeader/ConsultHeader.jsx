import React from "react";
import styles from "./ConsultHeader.module.scss";

const ConsultHeader = (props) => {
  return (
    <div className={styles["c-header-box"]}>
      <ul className={styles["c-ul"]}>
        {props.selectedSteps.map((item, index) => (
          <li
            key={index}
            className={`${styles["item"]} ${
              props.currentStep === index ? styles["active"] : ""
            } ${props.currentStep > index ? styles["done"] : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultHeader;
