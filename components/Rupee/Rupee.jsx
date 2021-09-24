import React from "react";
import { FaRupeeSign } from "react-icons/fa";
const Rupee = (props) => {
  return (
    <React.Fragment>
      <span>
        <FaRupeeSign />
      </span>{" "}
      <span>{props.children}</span>
    </React.Fragment>
  );
};

export default Rupee;
