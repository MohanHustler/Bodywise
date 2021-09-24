import React from "react";
import PropTypes from "prop-types";

import styles from "./ItemContent.module.scss";

const ComplexItemConent = ({ icon, color, side, label }) => (
  <div style={{ background: color }}>
    <div className={styles.content}>
      {icon}
      {label && <span>{label}</span>}
    </div>
  </div>
);

ComplexItemConent.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string,
  side: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default ComplexItemConent;
