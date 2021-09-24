import React, { Component } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Image } from "react-bootstrap";
const Header = dynamic(() => import("../Header"), { ssr: false });
import useCheckSize from "../../hooks/useCheckSize";
// import BottomMenu from "./../BottomMenu";
const BottomMenu = dynamic(() => import("./../BottomMenu"), { ssr: false });
const ProductItem = dynamic(() => import("../ProductItem/ProductItem"), {
  ssr: false,
});
import styles from "./home.module.scss";
const CarouselSection = dynamic(() => import("./sections/CarouselSection"), {
  ssr: false,
});
const Programs = dynamic(() => import("./sections/Programs"), { ssr: false });
const Personalized = dynamic(() => import("./sections/Personalized"), {
  ssr: false,
});
const Recommended = dynamic(() => import("./sections/Recommended"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("./sections/HowItWorks"), {
  ssr: false,
});
const MeetExperts = dynamic(() => import("./sections/MeetExperts"), {
  ssr: false,
});
// const PopularCollections = dynamic(() => import('./sections/PopularCollections'), { ssr: false })
const CustomerComments = dynamic(() => import("./sections/CustomerComments"), {
  ssr: false,
});
import Banner from "./sections/Banner";
import {
  landingCarousel,
  landingPrograms,
  landingPersonalized,
  landingBanner,
  landingCustomerComments,
  landingHowItWorks,
  landingMeetExperts,
  landingPopularCollections,
  landingRecommended,
} from "./sections/data";
import LogoIcon from "../LogoIcon";

import Footer from "../../components/Footer/index.mobile";
import SuspenseCommon from "../SuspenseCommon";

const Home = () => {
  const size = useCheckSize();
  return (
    <SuspenseCommon>
      <Head>
        <title>Be Bodywise</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Women's Wellness. Simplified" />
      </Head>
      <Header />
      <section className={styles["hm-body"]}>
        <CarouselSection data={landingCarousel} />
        <Programs data={landingPrograms} />
        <Personalized data={landingPersonalized} />
        {!(size > 767) && (
          <div className="relative" style={{ marginBottom: 50 }}>
            <Image
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/category_images/acne.png"
              alt="bodywise-banner"
              className="img-cover"
              style={{ height: 400 }}
            />
            <LogoIcon type="white" />
          </div>
        )}
        <Recommended data={landingRecommended} />
        <HowItWorks data={landingHowItWorks} />
        <MeetExperts data={landingMeetExperts} />
        {/* <PopularCollections data={landingPopularCollections} /> */}
        <CustomerComments data={landingCustomerComments} />
        <Banner data={landingBanner} />
      </section>
      <Footer />
      {/* {!(size > 767) && <BottomMenu />} */}
    </SuspenseCommon>
  );
};

export default Home;
