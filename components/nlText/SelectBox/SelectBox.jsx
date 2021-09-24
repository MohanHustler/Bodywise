import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./SelectBox.module.scss";

const SelectBox = (props) => {
  let [showDrop, setShowDrop] = useState(false);
  let [viewText, setViewText] = useState("");
  let options = Object.values(props.data.options);

  useEffect(() => {
    setViewText("");
    setShowDrop(false);
  }, [props.data.options]);

  useEffect(() => {
    if (props.value) {
      let currentItemIndex;
      options.forEach((item, index) => {
        if (item.option === props.value[0]) {
          currentItemIndex = index;
        }
      });
      createViewText(currentItemIndex);
    }
  }, [props.value]);

  function createViewText(selectedItemCopy) {
    if (selectedItemCopy.length <= 0) {
      setViewText("");
    } else {
      let text = options[selectedItemCopy]["text"];
      setViewText(text);
    }
  }

  const handleSelect = (e, elemIndex, value) => {
    e.stopPropagation();
    let selectedItemCopy = [value];
    createViewText(elemIndex);
    setShowDrop(false);
    props.handleSelect(selectedItemCopy);
  };

  return (
    <React.Fragment>
      <div className={styles["scb-container"]} key={props.keyVal}>
        <div className={styles["drop-label"]} onClick={() => setShowDrop(true)}>
          <div>{viewText || props.placeHolder} </div> <FaAngleDown />
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
                <li
                  className={styles["item"]}
                  key={index}
                  onClick={(e) => handleSelect(e, index, elem.option)}
                >
                  {elem.text}
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default SelectBox;
