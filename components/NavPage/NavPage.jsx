import React, { useState, useEffect } from "react";
import {
  FaFlag,
  FaList,
  FaClone,
  FaClock,
  FaPen,
  FaUser,
  FaChartPie,
  FaEye,
  FaCog,
  FaHome,
  FaFolderOpen,
} from "react-icons/fa";
import { confirmBox } from "mosaic-react-components";
import Link from "next/link";
import Router from 'next/router';
import styles from "./NavPage.module.scss";

const NavPage = (props) => {
  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage && localStorage.getItem("user-tkn")) {
      setIsLogin(true);
    }
  }, []);
  const installApp = () => {
    props.showInstallButton.prompt();
  };

  const handleLogout = () => {
    confirmBox(
      "Are you sure you want to logout?",
      () => {
        localStorage.clear();
        props.closeModal();
      },
      () => {}
    );
  };
  const onLinkClick = (navLink) => {
    props.closeModal();
    Router.push(navLink)
  }
  return (
    <div className={styles["menu-box"]}>
      <div onClick={() => onLinkClick('/')}  className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaHome />
        </div>
        <div className={styles["label"]}>HOME</div>
      </div>
      <div onClick={() => onLinkClick('/hair')}  className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaFolderOpen />
        </div>
        <div className={styles["label"]}>HAIR</div>
      </div>
      <div style={{ opacity: 0.4 }} className={`${styles["menu-item"]} not-allowed`}>
        <div className={styles["icon"]}>
          <FaFolderOpen />
        </div>
        <div className={styles["label"]}>WEIGHT</div>
      </div>
      <div onClick={() => onLinkClick('/skin')}  className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaFolderOpen />
        </div>
        <div  className={styles["label"]}>SKIN</div>
      </div>
      <div style={{ opacity: 0.4 }} className={`${styles["menu-item"]} not-allowed`}>
        <div className={styles["icon"]}>
          <FaFolderOpen />
        </div>
        <div className={styles["label"]}>ANTI AGEING</div>
      </div>
      {/* <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaPen />
        </div>
        <div className={styles["label"]}>CONSULT</div>
      </div>
      <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaClock />
        </div>
        <div className={styles["label"]}>TIMELINE</div>
      </div> */}
      {isLogin && <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaUser />
        </div>
        <div className={styles["label"]}>PROFILE</div>
      </div>}
      {/* <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaChartPie />
        </div>
        <div className={styles["label"]}>REWARDS</div>
      </div>
      <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaCog />
        </div>
        <div className={styles["label"]}>SETTINGS</div>
      </div>
      <div className={styles["menu-item"]}>
        <div className={styles["icon"]}>
          <FaEye />
        </div>
        <div className={styles["label"]}>ABOUT US</div>
      </div> */}
      {props.showInstallButton && (
        <div className={styles["nav-btn"]} onClick={() => installApp()}>
          <div className={styles["icon"]}>
            <FaHome />
          </div>{" "}
          Add to Homescreen
        </div>
      )}
      {isLogin && (
        <div className={styles["logout-btn"]} onClick={handleLogout}>
          Logout
        </div>
      )}
      {!isLogin && (
        <Link href="/login">
          <div className={styles["logout-btn"]}>Sign In</div>
        </Link>
      )}
    </div>
  );
};

export default NavPage;
