import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  Row, Col, Image,
} from 'react-bootstrap';
import Link from 'next/link'
import Router from 'next/router';
import dynamic from "next/dynamic";
import {
  FaBell,
  FaShoppingCart,
  FaUserCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import axios from "axios";
import { connect } from "react-redux";

import ModalBox from "./../ModalBox";
import NavPage from "./../NavPage/NavPage";
import ReadNotificationsPage from "./../ReadNotificationsPage/ReadNotificationsPage";
import PullOutBox from "./../PullOutBox";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import { addUser } from "./../../redux/actions/addUser";
import { fillinitialCart } from "./../../redux/actions/fillInitialCart";
import Profile from "./../Profile/Profile";
import { secondaryHeaderLinks } from '../../constants/data'
import AuthTabComponent from "../AuthTabComponent/AuthTabComponent";

const NotificationsPage = dynamic(
  () => import("./../NotificationsPage/NotificationsPage"),
  { ssr: false, loading: () => <p>loading your Notifications</p> }
);
const Cart = dynamic(() => import("./../Cart/Cart"), {
  ssr: false,
  loading: () => <p>Loading Cart</p>,
});
const CartIcon = dynamic(() => import("./../CartIcon/CartIcon"), {
  ssr: false,
});

import styles from "./Header.module.scss";

const HeaderWeb = (props) => {
  const [showMenu, setShowMenu] = useState(0);
  const [showNotifications, setShowNotifications] = useState(0);
  const [showInstallButton, setshowInstallButton] = useState(false);
  const [notificationArray, setNotificationArray] = useState([]);
  const [notificationType, setNotificationType] = useState(1);
  const [showPullOutCart, setshowPullOutCart] = useState(0);
  const [showProfile, setshowProfile] = useState(0);
  const [showLogin, setshowLogin] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const [windowSize, setWindowSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // called on every update
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setshowInstallButton(e);
    });
  });
  // called on component load
  useEffect(() => {
    if (localStorage && localStorage.getItem("user-tkn")) {
      setLoggedIn(true);
    }
    getUserDetails();
    loadInitialCart();
  }, []);

  const loadInitialCart = () => {
    if (localStorage && localStorage.getItem("cartProps")) {
      props.fillinitialCart(JSON.parse(localStorage.getItem("cartProps")));
    }
  };

  const getUserDetails = () => {
    if (
      localStorage &&
      localStorage.getItem("user-tkn") &&
      !props.userProps.customer.address
    ) {
      let auth = "Bearer " + localStorage.getItem("user-tkn");
      let headers = {
        "Content-Type": "application/json",
        Authorization: auth,
      };
      axios
        .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, {
          headers: headers,
          validateStatus: function (status) {
            return true;
          },
        })
        .then((resp) => {
          if (resp.status === 200) {
            props.addUser(resp.data);
          }
        });
    }
  };


  const onLogin = (response) => {
    localStorage.setItem("user-tkn", response.data);
    if (localStorage && localStorage.getItem("user-tkn")) {
      setLoggedIn(true);
    }
    mergeCarts();
    loadInitialCart();
    handleModalClose();
    let returnUrl = Router.query.next || "/";
    Router.push(returnUrl);
  }

  const onAuthFail = () => {
    handleModalClose();
  }

  const handleModalClose = () => {
    setShowMenu(0);
    setShowNotifications(0);
    setshowLogin(0);
    setshowProfile(0);
  };

  const showProfileClick = () => {
    setshowProfile(1);
  };

  const showLoginClick = () => {
    setshowLogin(1);
  };

  const showPullOutCartClick = () => {
    setshowPullOutCart(1);
  };

  const handlePulloutClose = () => {
    setshowPullOutCart(0);
  };


  return (
    <>
      <header className="container-page">
        <div className="web">
          <Row>
            <Col lg={4} md={5} className="left-nav">
              <div className="left-nav-item">SHOP</div>
              <div className="left-nav-item">LEARN</div>
              <div className="left-nav-item">CONSULT</div>
            </Col>
            <Col lg={4} md={2} className="logo-container" >
              <Image onClick={() => Router.push('/')} className="logo" src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/logo.svg" />
            </Col>
            <Col lg={4} md={5} className="right-nav">
              {/* <div role="presentation" onClick={() => setShowNotifications(1)} className="right-nav-item">
                <div className="right-nav-item-icon-container"><FaBell className="right-nav-item-icon" /></div>
                <div className="right-nav-item-text">Message</div>
              </div> */}
              <div role="presentation" onClick={showPullOutCartClick} className="right-nav-item">
                <div className="right-nav-item-icon-container relative">
                  <FaShoppingCart className="right-nav-item-icon" />
                  {props.cartProps && !!props.cartProps.totalItems && (
                    <span className="icon-count">
                      {props.cartProps.totalItems}
                    </span>
                  )}
                </div>
                <div className="right-nav-item-text">Cart</div>
              </div>
              <div
                role="presentation"
                onClick={loggedIn ? showProfileClick : showLoginClick}
                className="right-nav-item"
              >
                <FaUserCircle style={{ fontSize: 30 }} />
              </div>
            </Col>
          </Row>
        </div>
      </header>
      <header className="container-page">
        <div className="web secondary">
          <Row className="justify-content-center">
            <Col className="secondary-nav" span={12}>
              {secondaryHeaderLinks.map((item, i) => (
                <div key={item.key} style={{ opacity: item.disabled ? 0.5 : 1 }} className="secondary-nav-item">
                  {item.disabled ? <div className="not-allowed" >{item.title}</div> : <Link href={item.key}><a className={"a-link"} >{item.title}</a></Link>}
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </header>

      {showMenu > 0 && (
        <ModalBox closeModal={handleModalClose}>
          <NavPage
            closeModal={handleModalClose}
            showInstallButton={showInstallButton}
          />
        </ModalBox>
      )}
      {showProfile > 0 && (
        <ModalBox closeModal={handleModalClose}>
          <Profile responsive={windowSize <= 450 ? true : false} />
        </ModalBox>
      )}
      {showLogin > 0 && (
        <ModalBox closeModal={handleModalClose}>
          <AuthTabComponent isModal={true} onSuccess={onLogin} onFailure={onAuthFail}/>
        </ModalBox>
      )}
      {windowSize <= 400 && showNotifications > 0 && (
        <ModalBox closeModal={handleModalClose}>
          <h5 className={styles["heading"]}>ACTION ITEMS</h5>
          <div className={styles["multi-button"]}>
            <button
              style={{ outline: "none" }}
              onClick={() => setNotificationType(0)}
              className={
                notificationType == 0
                  ? styles["notificationButtonActive"]
                  : styles["notificationButton"]
              }
            >
              TO DO
            </button>
            <button
              style={{ outline: "none" }}
              onClick={() => setNotificationType(1)}
              className={
                notificationType == 1
                  ? styles["notificationButtonActive"]
                  : styles["notificationButton"]
              }
            >
              TO READ
            </button>
          </div>
          {notificationType == 0 && <NotificationsPage responsive={true} />}
          {notificationType == 1 && <ReadNotificationsPage responsive={true} />}
        </ModalBox>
      )}

      {windowSize >= 400 && showNotifications > 0 && (
        <PullOutBox close={handleModalClose}>
          <div className={styles["notification-drawers"]}>
            <div className={styles["notification-drawers-header"]}>
              <FaRegTimesCircle onClick={() => setShowNotifications(0)} />
              <h1>Action</h1>
            </div>
            <div className={styles["notification-drawers-body"]}>
              <div className={styles["notification-drawers-action"]}>
                <ul>
                  <li
                    onClick={() => setNotificationType(0)}
                    className={notificationType == 0 ? styles["active"] : ""}
                  >
                    To-Do
                  </li>
                  <li
                    onClick={() => setNotificationType(1)}
                    className={notificationType == 1 ? styles["active"] : ""}
                  >
                    To-Read
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {notificationType == 0 && <NotificationsPage responsive={false} />}
          {notificationType == 1 && (
            <ReadNotificationsPage responsive={false} />
          )}
        </PullOutBox>
      )}

      {showPullOutCart > 0 && (
        <PullOutBox close={handlePulloutClose}>
          <Cart hideHeader={true} onCloseCart={handlePulloutClose} />
        </PullOutBox>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userProps: state.userStore,
  cartProps: state.cartStore,
});
export default connect(mapStateToProps, {
  addUser,
  fillinitialCart,
})(HeaderWeb);
