import React, { useState, useEffect } from "react";
import styles from "./RadioBox.module.scss";

const RadioBox = (props) => {
  let [selectedValues, setSelectedValues] = useState([]);
  let options = Object.values(props.data.options);

  useEffect(() => {
    if (props.value) {
      let indexList = [];
      options.forEach((elem, index) => {
        if (elem.option === props.value[0]) {
          indexList.push(index);
        }
      });
      setSelectedValues(indexList);
    }
  }, [props.value]);

  const handleChange = (e, itemIndex) => {
    e.stopPropagation();
    let selectedCopy = [...selectedValues];
    if (selectedCopy.indexOf(itemIndex) >= 0) {
      selectedCopy.splice(selectedCopy.indexOf(itemIndex), 1);
    } else {
      selectedCopy.push(itemIndex);
    }
    setSelectedValues(selectedCopy);
    let returnValue =
      selectedCopy.length > 0 ? options[selectedCopy[0]]["option"] : [];
    props.handleCheck(returnValue);
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
            className={styles["radio"]}
            type="radio"
            checked={selectedValues.indexOf(index) >= 0}
            id={`cb-${index}`}
            name={props.data.name}
            onChange={(e) => handleChange(e, index)}
          />
          <span>{item.text}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioBox;
