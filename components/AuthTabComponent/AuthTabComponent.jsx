import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import LoginPage from "./../LoginPage/LoginPage";
import SignupPage from "./../SignupPage/SignupPage";

import styles from "./AuthTabComponent.module.scss";

const AuthTabComponent = (props) => {
  return (
    <>
      <Tabs className={styles["loginTabs"]} defaultActiveKey="profile">
        <Tab pullRight eventKey="home" label="Sign Up">
            <SignupPage isModal={true} onSuccess={props.onSuccess} onFailure={props.onFailure}/>
        </Tab>
        <Tab pullRight eventKey="profile" label="Login">
            <LoginPage isModal={true} onSuccess={props.onSuccess} onFailure={props.onFailure}/>
        </Tab>
      </Tabs>
    </>
  );
};

export default AuthTabComponent;
