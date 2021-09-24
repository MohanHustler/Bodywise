import React, { useEffect, useState } from "react";
import styles from "./BottomDrawer.module.scss";

//passing show

const BottomDrawer = (props) => {
  let [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(props.show);
  }, [props.show]);

  return (
    <React.Fragment>
      {props.show && (
        <section
          className={`${styles["section-body"]} ${
            load ? styles["load-drawer"] : ""
          }`}
        >
          {props.children}
        </section>
      )}
    </React.Fragment>
  );
};

export default BottomDrawer;
