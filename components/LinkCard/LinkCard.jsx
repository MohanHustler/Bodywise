import React from "react";
import styles from "./LinkCard.module.scss";
const LinkCard = (props) => {
  const getBackground = () => {
    if (props.backgroundImage) {
      return `url(${props.backgroundImage})`;
    } else if (props.gradientStart && props.gradientEnd) {
      return `linear-gradient(to top left, ${props.gradientStart}, ${props.gradientEnd})`;
    } else {
      return none;
    }
  };

  const containerStyle = {
    backgroundImage: getBackground(),
  };

  return (
    <div style={containerStyle} className={styles["link-style-box"]}>
      {props.children}
    </div>
  );
};

export default LinkCard;
