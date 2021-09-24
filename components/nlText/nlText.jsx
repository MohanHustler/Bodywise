import React, { useState } from "react";
import SelectCheckBox from "./SelectCheckbox/SelectCheckBox";
import SelectBox from "./SelectBox/SelectBox";
import CheckBox from "./CheckBox/CheckBox";
import RadioBox from "./RadioBox/RadioBox";
import styles from "./nlText.module.scss";

const NLText = (props) => {
  let [selectedOption, setSelectedOption] = useState("");

  const handleMultiSelectReturn = (data) => {
    props.saveData(props.keyVal, data);
  };

  const renderText = (data) => {
    const renderedElemet = renderSwitch(data);
    let list = data.question.split("++");
    if (list.length > 1) {
      list[1] = renderedElemet;
    } else {
      list.push(" ");
      list.push(renderedElemet);
    }
    return list;
  };

  const renderCheckBox = (data) => {
    return (
      <CheckBox
        value={props.value}
        data={data}
        handleCheck={handleMultiSelectReturn}
      />
    );
  };

  const renderRadioBox = (data) => {
    return (
      <RadioBox
        value={props.value}
        data={data}
        handleCheck={handleMultiSelectReturn}
      />
    );
  };

  const renderSelectCheckBox = (data) => {
    return (
      <SelectCheckBox
        data={data}
        key="1"
        keyVal="1"
        handleSelect={handleMultiSelectReturn}
        placeHolder="Select your Input"
        value={props.value}
      />
    );
  };

  const renderSelect = (data) => {
    return (
      <SelectBox
        data={data}
        key="1"
        keyVal="1"
        handleSelect={handleMultiSelectReturn}
        placeHolder="Select your Input"
        value={props.value}
      />
    );
  };

  const renderSwitch = (data) => {
    switch (data.input) {
      case "checkbox":
        return renderCheckBox(data);
      case "radio":
        return renderRadioBox(data);
      case "select":
        return renderSelect(data);
      case "select-checkbox":
        return renderSelectCheckBox(data);
      default:
        return "foo";
    }
  };

  return (
    <React.Fragment>
      <div className={styles["text"]}>{renderText(props.data)}</div>
    </React.Fragment>
  );
};

export default NLText;
