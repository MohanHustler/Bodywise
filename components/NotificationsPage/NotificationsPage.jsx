import React, { useState, useEffect } from "react";
import axios from "axios";
import Swipeout from "rc-swipeout";

import { FaUserCheck } from "react-icons/fa";
import ItemContent from "./ItemContent";
import TODO from "./Notification.json";
import styles from "./NotificationsPage.module.scss";
import CONFIG_CONSTANTS from "./../../constants/apiList";

const NotificationsPage = ({ responsive }) => {
  const [notificationArray, setNotificationArray] = useState([]);
  useEffect(() => {
  }, []);
  useEffect(() => {
    let user_id = "007";
    let data = {
      user_id: user_id
    };
    let notificationUrl = `https://cmx5ogdjoi.execute-api.ap-south-1.amazonaws.com/staging/getNotifications`;
    axios
      .post(CONFIG_CONSTANTS.url.GET_DO_NOTIFICATION, data)
      .then((response) => {
        //setShowNotifications(1)
        setNotificationArray(response.data.body.data);
      });
  }, []);
  const actionButton = (item) => {
    let data = {
      user_id: item.user_id,
      notification_id: item.notification_id
    };
    axios
      .post(CONFIG_CONSTANTS.url.UPDATE_DO_NOTIFICATION, data)
      .then((response) => {
      });
  };

  return (
    <React.Fragment>
      {responsive ? (
        notificationArray &&
        notificationArray.map((todo, index) => (
          <Swipeout
            key={index}
            left={[]}
            autoClose
            right={[
              {
                text: "COMPLETE",
                onPress: () => actionButton(todo),
                className: styles["deleteButton"]
              }
            ]}
          >
            <div className={styles["todo-card"]}>
              <div className={styles["todo-card-left"]}>
                <h3>{todo.title}</h3>
                <label>{todo.subtext}</label>
                <span>{todo.time_string}</span>
              </div>
              <div className={styles["todo-card-right"]}>
                <FaUserCheck />
              </div>
            </div>
          </Swipeout>
        ))
      ) : (
        <div className={styles["todo-desktop"]}>
          {notificationArray &&
            notificationArray.map((todo, index) => (
              <div className={styles["todo-desktop-card"]} key={index}>
                <div className={styles["todo-desktop-card-left"]}>
                  <div className={styles["todo-desktop-card-left-icon"]}>
                    <FaUserCheck />
                  </div>
                  <div className={styles["todo-desktop-card-left-text"]}>
                    <label>{todo.time_string}</label>
                    <p>{todo.title}</p>
                  </div>
                </div>
                <div className={styles["todo-desktop-card-right"]}>
                  <label>Button</label>
                </div>
              </div>
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default NotificationsPage;
