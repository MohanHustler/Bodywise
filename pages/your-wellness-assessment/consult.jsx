import React, { useState, useEffect } from "react";
import NLText from "./../../components/nlText/nlText";
import styles from "./consult.module.scss";
import BasicDetailsConsult from "./../../components/BasicDetailsConsult/BasicDetailsConsult";
import { StaticData } from "./../../constants/data";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import ConsultHeader from "./ConsultHeader/ConsultHeader";
import Router from "next/router";

import Pixel from '../../components/Pixel';
const Consult = (props) => {
  const data = { ...StaticData.consultDummyData };
  let [currentPageIndex, setCurrentPageIndex] = useState(0);
  let [currentStepIndex, setCurrentStepIndex] = useState(0);
  let [selectedSteps, setSelectedSteps] = useState(["basic"]);
  let [pagesInStep, setPagesInStep] = useState(2);
  let [currentKeyList, setCurrentKeyList] = useState([
    "select_category",
    "input",
  ]);
  let [currentValueList, setCurrentValueList] = useState([]);
  let [selectedConditions, setSelectedConditions] = useState({});
  let [renderView, setRenderView] = useState("");
  let [prevFormIndex, setPrevFormIndex] = useState("");

  // useEffect(() => {
  //   setCurrentKeyList(Object.keys(data["basic"]));
  //   setCurrentValueList(Object.values(data["basic"]));
  // }, [data]);

  useEffect(() => {
    setRenderView(renderViewFunc());
  }, [currentPageIndex]);

  useEffect(() => {
    if (prevFormIndex !== "") {
      checkPreviousCondition(prevFormIndex);
    }
  }, [prevFormIndex]);

  useEffect(() => {
    Router.push(
      `/your-wellness-assessment?type=${selectedSteps[currentStepIndex]}&page=${currentKeyList[currentPageIndex]}`,
      undefined,
      { shallow: true }
    );
  }, [currentPageIndex]);

  const nextBasicForm = () => {
    if (currentPageIndex === 0) {
      setCurrentPageIndex(1);
    } else {
      updateStep();
    }
  };

  const checkPreviousCondition = (index) => {
    const selectedConditionKeys = Object.keys(selectedConditions);
    if (selectedConditionKeys.includes(currentKeyList[index])) {
      setCurrentPageIndex(index);
    } else {
      let prevFormIndex = index - 1;
      prevForm(prevFormIndex);
    }
  };

  const prevForm = (prevFormIndex) => {
    if (currentPageIndex == 0 && currentStepIndex == 0) {
      return;
    }
    if (currentPageIndex == 1 && currentStepIndex == 0) {
      setCurrentPageIndex(0);
      setCurrentKeyList(Object.keys(data[selectedSteps[0]]));
      setCurrentValueList(Object.values(data[selectedSteps[0]]));
      return;
    }
    if (currentStepIndex - 1 === 0 && currentPageIndex === 0) {
      setCurrentPageIndex(1);
      setCurrentStepIndex(0);
      setCurrentKeyList(Object.keys(data[selectedSteps[0]]));
      setCurrentValueList(Object.values(data[selectedSteps[0]]));
      return;
    }
    if (currentPageIndex === 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      const newStepLength = Object.keys(
        data[selectedSteps[currentStepIndex - 1]]
      ).length;
      setPagesInStep(newStepLength);
      setCurrentPageIndex(newStepLength - 1);
      prevFormIndex = newStepLength - 1;
      setCurrentKeyList(Object.keys(data[selectedSteps[currentStepIndex - 1]]));
      setCurrentValueList(
        Object.values(data[selectedSteps[currentStepIndex - 1]])
      );
    }
    setPrevFormIndex(prevFormIndex);
  };

  const updateStep = () => {
    if (
      currentPageIndex + 1 >= pagesInStep &&
      currentStepIndex < selectedSteps.length - 1
    ) {
      setCurrentStepIndex(currentStepIndex + 1);
      setCurrentPageIndex(0);
      setPagesInStep(
        Object.keys(data[selectedSteps[currentStepIndex + 1]]).length
      );
      setCurrentKeyList(Object.keys(data[selectedSteps[currentStepIndex + 1]]));
      setCurrentValueList(
        Object.values(data[selectedSteps[currentStepIndex + 1]])
      );
    } else if (currentPageIndex + 1 < pagesInStep) {
      currentValueList[currentPageIndex]["showNextItem"]
        ? setCurrentPageIndex(currentPageIndex + 2)
        : setCurrentPageIndex(currentPageIndex + 1);
    } else {
      alert("flow complete");
    }
  };

  const nextForm = () => {
    if (currentStepIndex === 0) {
      nextBasicForm();
    } else {
      updateStep();
    }
  };

  const saveResponse = (key, values) => {
    if (currentStepIndex === 0 && currentPageIndex === 0) {
      let steps = ["basic"];
      values.forEach((step) => {
        steps.push(data["basic"]["select_category"]["options"][step].value);
      });
      setSelectedSteps(steps);
      let condition = { ...selectedConditions };
      condition[key] = values;
      setSelectedConditions(condition);
    } else {
      let condition = { ...selectedConditions };
      condition[key] = values;
      setSelectedConditions(condition);
    }
  };

  const checkCondition = () => {
    const nextConditions = currentValueList[currentPageIndex].conditions || {};
    const conditionKeys = Object.keys(nextConditions);
    if (conditionKeys.length <= 0) {
      return true;
    }
    const userSelectionKeys = Object.keys(selectedConditions);

    let commonKeys = [];
    conditionKeys.forEach((element) => {
      if (userSelectionKeys.includes(element)) {
        // [0,1], [1,2]
        let isSelected = false;
        selectedConditions[element].forEach((item) => {
          isSelected = nextConditions[element].includes(item);
        });
        isSelected ? commonKeys.push(element) : "";
      }
    });
    if (commonKeys.length > 0) {
      return true;
    } else {
      return false;
    }

    // let hasKey = false;
    // const selectedConditionKeys = Object.keys(selectedConditions);
    // currentConditionKeys.forEach((key) => {
    //   if (hasKey) {
    //     return;
    //   }
    //   hasKey = selectedConditionKeys.includes(key);
    // });
  };

  const renderViewFunc = () => {
    if (currentStepIndex === 0 && currentPageIndex === 0) {
      return (
        <NLText
          saveData={saveResponse}
          data={data["basic"]["select_category"]}
          keyVal="select_category"
          value={selectedConditions["select_category"]}
        />
      );
    } else if (currentStepIndex === 0 && currentPageIndex === 1) {
      return <BasicDetailsConsult />;
    } else if (checkCondition()) {
      let list = new Array();
      list.push(
        <NLText
          saveData={saveResponse}
          data={currentValueList[currentPageIndex]}
          keyVal={currentKeyList[currentPageIndex]}
          value={selectedConditions[currentKeyList[currentPageIndex]]}
        />
      );
      // if (currentValueList[currentPageIndex]["showNextItem"]) {
      //   list.push(
      //     <NLText
      //       saveData={saveResponse}
      //       data={currentValueList[currentPageIndex + 1]}
      //       keyVal={currentKeyList[currentPageIndex + 1]}
      //     />
      //   );
      // }
      return list;
    } else {
      nextForm();
      return "";
    }
  };

  return (
    <React.Fragment>
    <Pixel/>
      <ConsultHeader
        selectedSteps={selectedSteps}
        currentStep={currentStepIndex}
      />
      <div className={styles["consult-container"]}>
        {renderView}
        <div className={styles["btn-box"]}>
          {!(currentPageIndex === 0 && currentStepIndex === 0) && (
            <button
              className={styles["back"]}
              onClick={() => prevForm(currentPageIndex - 1)}
            >
              <FaAngleDoubleLeft /> Back
            </button>
          )}

          <button
            className={styles["next"]}
            onClick={() => nextForm(currentPageIndex + 1)}
          >
            Next <FaAngleDoubleRight />
          </button>
        </div>
        <div className={styles["progress-box"]}>
          <div className={styles["current-step"]}>
            {selectedSteps[currentStepIndex]}
          </div>
          <div className={styles["botton-sec"]}>
            <div className={styles["progress-sec"]}>
              <div className={styles["loader"]}>
                <div
                  className={styles["filled"]}
                  style={{
                    width: `${((currentPageIndex + 1) / pagesInStep) * 100}%`,
                  }}
                >
                  {" "}
                </div>
              </div>
            </div>
            <div className={styles["step-number"]}>
              {currentPageIndex + 1}/{pagesInStep}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Consult;
