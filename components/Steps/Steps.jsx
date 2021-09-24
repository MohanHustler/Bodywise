import React from "react";
import styles from "./Steps.module.scss";

/******
 * Data format =>
 * [
    {
      title: "Menu 1",
      status: "complete",
    },
    {
      title: "Menu 2",
      status: "active",
    },
    {
      title: "Menu 3",
      status: "inactive",
    },
  ]
 */

const Steps = (props) => {
  return (
    <div className={styles["steps-box"]}>
      {props.data.map((elem, index) => (
        <div key={index} className={`${styles["sb--stepper-cont"]}`}>
          <div
            className={`${styles["step-den"]} ${
              styles[elem.status === "active" ? "active" : ""]
            }`}
          >
            {index}
          </div>
          <div className={[styles["title"]]}>{elem.title}</div>
          <div className={[styles["line"]]}></div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
