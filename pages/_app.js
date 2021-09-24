import App from "next/app";
import React from "react";
import dynamic from "next/dynamic";
import { store } from "../redux/store";
import Head from "next/head";
import MetaTags from "./../components/MetaTags/MetaTags";
const confirmBox = dynamic(
  () => import("mosaic-react-components").then((mod) => mod.confirmBox),
  {
    ssr: false,
  }
);
const CommonComponent = dynamic(
  () => import("./../components/CommonComponent/CommonComponent"),
  {
    ssr: false,
  }
);

import "bootstrap/dist/css/bootstrap.min.css";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "mosaic-react-components/dist/index.css";
import "rc-swipeout/assets/index.css";
import "./index.scss";

class MyApp extends App {
  state = {};

  initializeAnalytics = () => {
    ReactGA.initialize("UA-149836656-10");
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  sendNotifications = () => {
    // check if the browser supports notifications
    if (!("Notification" in window)) {
      //   alertBox("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // var notification = new Notification(
      //   "Notification permission has already been granted!"
      // );
    } else if (Notification.permission !== "denied") {
      confirmBox(
        "We would like to send you notification to keep you up to date with our producs and services.",
        () => {
          Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
              var notification = new Notification("Thank you for accepting :)");
            }
          });
        },
        () => {}
      );
    }
  };

  componentDidMount() {
    // this.initializeAnalytics();
    // this.sendNotifications();
  }

  // static async getInitialProps({ Component, ctx }) {
  //   const pageProps = Component.getInitialProps
  //     ? await Component.getInitialProps(ctx)
  //     : {};

  //   // client-side only, run on page changes, do not run on server (SSR)
  //   if (typeof window === "object") {
  //     // ReactGA.pageview(ctx.asPath);
  //   }

  //   return { pageProps: pageProps };
  // }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <MetaTags />
          {/* <link
            rel="preload"
            href="https://d2r1yp2w7bby2u.cloudfront.net/js/a.js"
            as="script"
          ></link>
          <link
            rel="preload"
            href="http://static.clevertap.com/js/a.js"
            as="script"
          ></link>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
               clevertap.account.push({"id": "TEST-9K7-RZ4-K95Z"});
               clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
               clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
                (function () {
                    var wzrk = document.createElement('script');
                    wzrk.type = 'text/javascript';
                    wzrk.async = true;
                    wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(wzrk, s);
                 })();

                `,
            }}
          /> */}
        </Head>
        <CommonComponent />
        <Component {...pageProps} />
      </>
    );
  }
}

export default store.withRedux(MyApp);
