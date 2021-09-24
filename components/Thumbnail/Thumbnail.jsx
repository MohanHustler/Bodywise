import React from "react";
import styles from "./Thumbnail.module.scss";
const Thumbnail = (props) => {
  const boxStyle = {
    width: props.width,
    height: props.height,
  };
  return (
    <div style={boxStyle} className={styles["mw-thumbnail-box"]}>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

export default Thumbnail;
