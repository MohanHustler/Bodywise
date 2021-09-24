import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./PullOutBox.module.scss";

const PullOutBox = (props) => {
  let [slideIN, setSlideIN] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideIN(true);
    }, 0);
  });

  const hidePullOut = () => {
    props.close();
  };

  return (
    <div className={styles["po-container"]}>
      <div
        onClick={() => {
          hidePullOut();
        }}
        className={styles["background-lay"]}
      ></div>
      <CSSTransition in={slideIN} timeout={200} classNames={{ ...styles }}>
        <div className={styles["po-data"]} key={"1"}>
          {props.children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default PullOutBox;
