import React, { useEffect, useState, Fragment } from "react";
import styles from "./ReadNotificationsPage.module.scss";
import Swipeout from "rc-swipeout";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
const ReadNotificationsPage = ({ responsive }) => {
  const [notificationArray, setNotificationArray] = useState([]);

  useEffect(() => {
    let user_id = "12345";
    let data = {
      user_id: user_id
    };
    let readNotificationUrl = `https://cmx5ogdjoi.execute-api.ap-south-1.amazonaws.com/staging/getReadNotifications`;
    axios
      .post(CONFIG_CONSTANTS.url.GET_READ_NOTIFICATION, data)
      .then((response) => {
        //setShowNotifications(1)
        setNotificationArray(response.data.body.data);
      });
  }, []);

  return (
    <Fragment>
      {responsive ? (
        notificationArray &&
        notificationArray.map((item, index) => (
          <Swipeout
            key={index}
            left={[]}
            autoClose
            right={[
              {
                text: "COMPLETE",
                onPress: () => actionButton(item),
                className: styles["deleteButton"]
              }
            ]}
          >
            <div
              key={item.post_id}
              className={styles["read-card"]}
              onClick={() => window.open(item.url, "_blank")}
            >
              <div className={styles["inner-card"]}>
                <label>{item && item.title}</label>
                <FaChevronRight />
              </div>
              <div className={styles["outer-card"]}>
                <img src={item && item.image} alt="arrow-icon" />
              </div>
              <div className={styles["outer-card-number"]}>
                {item && item.post_id}
              </div>
            </div>
          </Swipeout>
        ))
      ) : (
        <div className={styles["toread-desktop"]}>
          {notificationArray &&
            notificationArray.map((item, index) => (
              <div className={styles["toread-desktop-card"]} key={index}>
                <div className={styles["toread-desktop-left"]}>
                  <FaChevronRight />
                </div>
                <div className={styles["toread-desktop-right"]}>
                  <div>
                    <h5>{item && item.title}</h5>
                    <p>
                      We know life happens year round, but it's never been more
                    </p>
                  </div>
                  <div>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default ReadNotificationsPage;
