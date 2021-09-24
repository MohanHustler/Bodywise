import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./SelectCheckBox.module.scss";

const SelectCheckBox = (props) => {
  let [showDrop, setShowDrop] = useState(false);
  let [selectedItems, setSelectedItems] = useState([]);
  let [viewText, setViewText] = useState("");
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
      setSelectedItems(indexList);
      createViewText(indexList);
    }
  }, [props.value]);

  function createViewText(selectedItemCopy) {
    if (selectedItemCopy.length <= 0) {
      setViewText("");
    } else {
      let textArray = [];
      for (let i = 0; i < selectedItemCopy.length - 1; i++) {
        textArray.push(options[selectedItemCopy[i]]["text"]);
      }
      let text = textArray.toString();
      text =
        selectedItemCopy.length > 1
          ? text +
            " and " +
            options[selectedItemCopy[selectedItemCopy.length - 1]]["text"]
          : options[selectedItemCopy]["text"];
      setViewText(text);
    }
  }

  const getOption = (indexList) => {
    const optionList = [];
    indexList.forEach((i) => {
      optionList.push(options[i].option);
    });
    return optionList;
  };

  const handleSelect = (e, item, value) => {
    e.stopPropagation();
    let selectedItemCopy = [...selectedItems];
    if (options[item].override) {
      if (options[item].override === "all") {
        selectedItemCopy = props.data.options.map((item, index) => index);
        setSelectedItems(selectedItemCopy);
        selectedItemCopy.splice(options.length - 1, 1);
      }
    } else {
      if (selectedItemCopy.indexOf(item) >= 0) {
        selectedItemCopy.splice(selectedItemCopy.indexOf(item), 1);
      } else {
        selectedItemCopy.push(item);
      }
      setSelectedItems(selectedItemCopy);
    }
    createViewText(selectedItemCopy);
    props.handleSelect(getOption(selectedItemCopy));
  };

  return (
    <React.Fragment>
      <div className={styles["scb-container"]} key={props.keyVal}>
        <div className={styles["drop-label"]} onClick={() => setShowDrop(true)}>
          <div className={styles["viewText"]}>
            {viewText || props.placeHolder}{" "}
          </div>{" "}
          <FaAngleDown />
        </div>
        {showDrop && (
          <React.Fragment>
            <div
              className={styles["dd-overlay"]}
              onClick={() => {
                setShowDrop(false);
              }}
            ></div>
            <ul className={styles["drop-open"]}>
              {options.map((elem, index) => (
                <li className={styles["item"]} key={index}>
                  <label htmlFor={index}>
                    <input
                      id={index}
                      type="checkbox"
                      className={styles["inp"]}
                      onChange={(e) => handleSelect(e, index, elem.option)}
                      checked={selectedItems.indexOf(index) >= 0}
                    />
                    {elem.text}
                  </label>
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default SelectCheckBox;
