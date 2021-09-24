import React, { useState, useEffect } from "react";
import InputText from "./InputText/InputText";
import styles from "./BasicDetailsConsult.module.scss";

const BasicDetailsConsult = () => {
  const handleChange = (key, value) => {};

  return (
    <React.Fragment>
      <div className={styles["bdc-container"]}>
        <div className={styles["line"]}>
          My Name is{" "}
          <InputText
            name="name"
            type="text"
            handleChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className={styles["line"]}>
          I am{" "}
          <InputText
            name="age"
            type="text"
            handleChange={handleChange}
            placeholder="Age"
          />
          years old
        </div>
        <div className={styles["line"]}>
          I am{" "}
          <InputText
            name="feet"
            type="text"
            handleChange={handleChange}
            placeholder="5"
          />
          feet and{" "}
          <InputText
            name="inches"
            type="text"
            handleChange={handleChange}
            placeholder="5"
          />
          inches tall.
        </div>
        <div className={styles["line"]}>
          I weigh
          <InputText
            name="weight"
            type="text"
            handleChange={handleChange}
            placeholder="60"
          />
          kgs.
        </div>
      </div>
    </React.Fragment>
  );
};

export default BasicDetailsConsult;
