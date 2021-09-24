import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./ModalBox.module.scss";

const ModalBox = (props) => {
  return (
    <div className={styles["modal-box-container"]}>
      <div className={styles["modal-box-header"]}>
        <div className={styles.close} onClick={() => props.closeModal()}>
          <FaTimes />
        </div>
        {props.title && <div className={styles.title}>{props.title}</div>}
      </div>
      {props.children}
    </div>
  );
};

export default ModalBox;
