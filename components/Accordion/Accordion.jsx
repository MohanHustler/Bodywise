import React, { useState, Fragment } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, itemsObj, itemsArr }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={styles["acc-box"]}>
      <div className={styles["acc-header"]} onClick={() => setToggle(!toggle)}>
        <div className={styles["title"]}>{title}</div>
        {/* <FaAngleDown /> */}
        {!toggle ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {itemsObj &&
        itemsObj.map((element, index) => (
          <div className={styles["acc-body"]} key={index}>
            {toggle && (
              <Fragment>
                <div className={styles["acc-box-head"]}>{element.title}</div>
                <div className={styles["acc-box-content"]}>{element.text}</div>
              </Fragment>
            )}
          </div>
        ))}
      {itemsArr &&
        itemsArr.map((element, index) => (
          <div className={styles["acc-body"]} key={index}>
            {toggle && (
              <Fragment>
                <div className={styles["acc-box-content"]}>{element}</div>
              </Fragment>
            )}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
