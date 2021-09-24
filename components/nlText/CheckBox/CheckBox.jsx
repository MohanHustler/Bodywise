import React, { useState, useEffect } from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  let [selectedValues, setSelectedValues] = useState([]);
  let options = Object.values(props.data.options);

  useEffect(() => {
    if (props.value) {
      let indexList = [];
      props.value.forEach((value) => {
        options.forEach((elem, index) => {
          if (elem.option === value) {
            indexList.push(index);
          }
        });
      });
      setSelectedValues(indexList);
    }
  }, [props.value]);

  const handleChange = (e, index) => {
    e.stopPropagation();
    let selectedCopy = [...selectedValues];
    if (selectedCopy.indexOf(index) >= 0) {
      selectedCopy.splice(selectedCopy.indexOf(index), 1);
    } else {
      selectedCopy.push(index);
    }
    setSelectedValues(selectedCopy);
    props.handleCheck(getOption(selectedCopy));
  };

  const getOption = (indexList) => {
    const optionList = [];
    indexList.forEach((i) => {
      optionList.push(options[i].option);
    });
    return optionList;
  };

  return (
    <div className={styles["cb-container"]}>
      {options.map((item, index) => (
        <label
          className={styles["checkLabel"]}
          htmlFor={`cb-${index}`}
          key={index}
        >
          <input
            className={styles["check"]}
            type="checkbox"
            checked={selectedValues.indexOf(index) >= 0}
            id={`cb-${index}`}
            onChange={(e) => handleChange(e, index)}
          />
          <span>{item.text}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
