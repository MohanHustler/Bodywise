import React, { useState, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from 'next/router';
import Header from "./../../components/Header";
import { Carousel } from "react-responsive-carousel";
import BottomMenu from "./../../components/BottomMenu";
import LinkCard from "./../../components/LinkCard/LinkCard";
import ProductItem from "./../../components/ProductItem/ProductItem";
import Accordion from "./../../components/Accordion/Accordion";
import { FaBell, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { StaticData } from "./../../constants/data";
import styles from "./../hair/hair.module.scss";
import Pixel from "./../../components/Pixel";
import parse from 'html-react-parser';
import CarouselCommon from '../../components/CarouselCommon';
import {
  Col, Row, Card,
} from 'react-bootstrap';
import useCheckSize from '../../hooks/useCheckSize';
import MeetExperts from '../../components/HomePage/sections/MeetExperts';

const Skin = () => {
  const [toggle, setToggle] = useState(false);
  const size = useCheckSize()
  const checkFlag = size > 767

  const hairData = StaticData.hairJson;
  const skinData = StaticData.skinJson;
  const displayProducts = Object.values(skinData.display);
  const itemData = displayProducts.map((item) => {
    let itemObj = {
      name_unused: item.name,
      url_key: item.url_key,
      imgUrl: item.imgUrl,
      price: item.price,
      is_rx: item.is_rx,
      is_kit: item.is_kit,
      regime_steps: item.regime_steps
    };
    const currentRegime = Object.keys(skinData.sections.complete_regime.steps).filter((reg) =>
      item.regime_steps.includes(reg)
    );
    itemObj.desc = currentRegime[0].step_name;
    return itemObj;
  });

  const renderItems = (item) => (
    <Card className={checkFlag ? "custom-card" : "custom-card carousel-card"}>
      <Row noGutters>
        <Col lg={7} md={12} sm={12} xs={12}>
          <div className="p-10 text-left" style={{padding: 20, height:checkFlag ? 280 : 320,justifyContent:"space-between", flexDirection:"column" ,display:"flex"}}>
            <div className="f-14">
              <div>{item.description}</div>
            </div>
            <div className="m-t-10">
              <div style={{ marginTop: 20, color: '#111D3C', marginBottom: 0, fontSize: 16 }} className="bold">{item.name}</div>
              <p style={{ color: '#6C6C6C', fontSize: 12 }}>{item.desig}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  )

  return (
    <React.Fragment>
      <Pixel />
      <Head>
        <title>Be Bodywise - Hair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles["hair-box"]}>
        {/* <section className={styles["slider-section"]}>
          <Carousel
            autoPlay
            infiniteLoop
            centerMode
            showStatus={false}
            dynamicHeight={false}
            showThumbs={false}
            centerSlidePercentage={80}
          >
            <div>
              <div className={`${styles["carousal-item"]} carousal-item-s1`}>
                <div className={styles["img-con"]}>
                  <img src="https://picsum.photos/id/1/400/300" />
                </div>
              </div>
            </div>
            <div>
              <div className={`${styles["carousal-item"]} carousal-item-s1`}>
                <div className={styles["img-con"]}>
                  <img src="https://picsum.photos/id/2/400/300" />
                </div>
              </div>
            </div>
            <div>
              <div className={`${styles["carousal-item"]} carousal-item-s1`}>
                <div className={styles["img-con"]}>
                  <img src="https://picsum.photos/id/3/400/300" />
                </div>
              </div>
            </div>
          </Carousel>
        </section> */}

        <div>
          <section className={styles["sec-pad"]}>
            <div className={styles.header}>{skinData.header}</div>
            <div className={styles.text}>{skinData.title}</div>
          </section>
          <section className={styles["product-sec"]}>
            {itemData.map((item, index) => (
              <ProductItem data={item} />
            ))}

            <div
              className={[
                `${styles["gradient-btn"]} ${styles["text-uppercase"]}`
              ]}
            >
              View All Products
            </div>
          </section>
        </div>
        <div>
          <section className={styles["consult-sec"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw.png" />
            </div>
            <div className={styles["sec-header"]}>
              {skinData.sections.consult.title}
            </div>

            <div className={styles["gradient-text"]}>
              {skinData.sections.consult.text}
            </div>
            <div className={styles["gradient-text"]}>
              {skinData.sections.consult.sub_text}
            </div>
            <div className={styles["gradient-btn"]}>
              {skinData.sections.consult.button_text}
            </div>
          </section>
          {/* <section className={styles.banner}>
            <img src="https://picsum.photos/id/1068/600/600" alt="" />
          </section> */}
        </div>
        <div>
          <section className={styles["complete-regime-sec"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw.png" />
            </div>
            <div className={styles["sec-header"]}>
              {skinData.sections.complete_regime.title}
            </div>
            <div className={styles["sec-text"]}>
              {skinData.sections.complete_regime.sub_text}
            </div>
            <div className={styles["rec-products"]}>
              {Object.keys(skinData.sections.complete_regime.steps).map((index) => (
                <div key={index} className={styles["rec-prod-box"]} onClick={()=>{Router.push(`/product/${skinData.sections.complete_regime.steps[index].url_key}`)}}>
                  <div className={styles["top"]}>
                    <div className={styles["number"]}>{index}</div>
                    <div className={styles["title"]}>{skinData.sections.complete_regime.steps[index].text}</div>
                  </div>
                  <div className={styles["content"]}>
                    <div className={styles["img-left"]}>
                      <img
                        src={skinData.sections.complete_regime.steps[index].imgUrl}
                        alt=""
                      />
                    </div>
                    <div className={styles["right"]}>
                      <div className={styles["prod-name"]}>{skinData.sections.complete_regime.steps[index].product}</div>
                      <div className={styles["details"]}>
                        <div className={styles["emp-s"]}>
                          {hairData.section3.doctor_name} says
                        </div>
                        <div className={styles["text"]}>{skinData.sections.complete_regime.steps[index].features}</div>
                        <div className={styles["fwb"]}>
                          <div className={styles["white-box"]}>
                            <div className={styles["title"]}>For</div>
                            {hairData.section3.for.map((item, index) => (
                              <div className={styles["value"]} key={index}>
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className={styles["white-box"]}>
                            <div className={styles["title"]}>With</div>
                            {hairData.section3.with.map((item, index) => (
                              <div className={styles["value"]} key={index}>
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className={styles["white-box"]}>
                            <div className={styles["title"]}>Because</div>
                            {hairData.section3.because.map((item, index) => (
                              <div className={styles["value"]} key={index}>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles["button-box"]}>
                          Buy Now (Rs 399)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles["sec"]}>
            <div className={styles["why-regime-works"]}>
              <div className={"sec-img-tp"}>
                <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw.png" />
              </div>
              <div className={styles["title"]}>
                {skinData.sections.why_this_works.title}
              </div>
              <div className={styles["sub-text"]}>
                {skinData.sections.why_this_works.sub_text}
              </div>
            </div>

            <div className={styles["about-prod-doc"]}>
              <div className={styles["emp-s"]}>
                {skinData.sections.why_this_works.doctor_name} says
              </div>
              <div className={styles["text"]}>
                {skinData.sections.why_this_works.doctor_note}
              </div>
              <div className={styles["fwb"]}>
                <div className={styles["white-box"]}>
                  <div className={styles["title"]}>For</div>
                  {skinData.sections.why_this_works.for.map((item, index) => (
                    <div className={styles["value"]} key={index}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={styles["white-box"]}>
                  <div className={styles["title"]}>With</div>
                  {skinData.sections.why_this_works.contains.map(
                    (item, index) => (
                      <div className={styles["value"]} key={index}>
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div className={styles["white-box"]}>
                  <div className={styles["title"]}>Because</div>
                  {skinData.sections.why_this_works.because.map(
                    (item, index) => (
                      <div className={styles["value"]} key={index}>
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className={styles["icon-box"]}>
                {skinData.sections.claims.items.map((item, index) => (
                  <div key={index} className={styles["item-box"]}>
                    <div className={styles["icon"]}>
                      <FaBell />
                    </div>
                    <div className={styles["label"]}>{item.text}</div>
                  </div>
                ))}
              </div>
              <Accordion
                title={skinData.sections.what_to_expect.title}
                itemsObj={skinData.sections.what_to_expect.items}
              />
              <Accordion
                title="Safety Information"
                itemsArr={skinData.safety_information}
              />
              <Accordion
                title="Who is this suitable for"
                itemsArr={skinData.who_its_for}
              />
            </div>
          </section>
          <section className={styles["sec-pad"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw.png" />
            </div>
            <div className={styles["sec-header"]}>
              Expert Recommended Products
            </div>
            <div className={styles["sec-text"]}>
              Here's what Dr. Shobita has to say about this regime
            </div>
            <div className={styles["ing-box-container"]}>
              {skinData.sections.ingredients.items.map((item, index) => (
                <div className={styles["ing-box"]} key={index}>
                  {/* <div className={styles["image-box"]}>
                    <div className={styles["gradient-box"]}></div>
                    <div className={styles["top"]}>
                      <img
                        src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/acne.png"
                        alt=""
                      />
                    </div>
                    <div className={styles["bottom"]}>
                      <div className={styles["to1"]}>
                        <div className={styles["con"]}>{item.title}</div>
                        <FaAngleRight />
                      </div>
                    </div>
                  </div> */}
                  <div style={{textAlign:"center"}} className={styles["con"]}>{item.title}</div>
                  <div className={styles["ing-content"]}>{item.text}</div>
                  <div className={styles["prod-box"]}>
                    <div className={styles["left"]}>
                      <div className={styles["c1"]}>{item.active.text}</div>
                      {item.active.items.map((item, index) => (
                        <div key={index} className={styles["c2"]} onClick={(() => {Router.push(`/product/${item.url_key}`)})}>
                          {item.name} <FaAngleRight />
                        </div>
                      ))}
                    </div>
                    {/* <div className={styles["right"]}>
                      <img
                        src="https://res.cloudinary.com/mosaic-wellness/image/upload/w_100,h_100/staging/app/1.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <section className={styles.banner}>
            <img src="https://picsum.photos/id/1068/600/600" alt="" />
          </section> */}
        </div>
        <div style={{marginTop:30}}>
          <section className={styles["how-it-works-sec"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw.png" />
            </div>
            <div className={styles["sec-header"]}>
              {skinData.sections.how_it_works.title}
            </div>
            {skinData.sections.how_it_works.steps.map((item, index) => (
              <Fragment key={index}>
                <div className={styles["gradient-header"]}>{item.title}</div>
                <div className={styles["gradient-text"]}>{parse(item.text)}</div>
                {/* <div className={styles["gradient-text"]}>
                  Not sure what will work for you?
                  <br /> Schedule a free online consultation with our renowned
                  experts
                </div> */}
              </Fragment>
            ))}
            <div className={styles["gradient-btn"]}>
              {skinData.sections.how_it_works.button_text}
            </div>
          </section>

          <section className={`${styles["sec-pad"]} ${styles["gradient-section"]} doctor-section`}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw_plain.png" />
            </div>
            <div className={styles["sec-header"]}>
              {skinData.sections.experts.title}
            </div>
            <div className={styles["gradient-text"]}>
              {skinData.sections.experts.subtitle}
            </div>
            <div className={`${checkFlag ? 'container-page' : ''}`} >
              {checkFlag ? (
                <Row className="m-t-30">
                  {skinData.sections.experts.options && !!skinData.sections.experts.options.length && skinData.sections.experts.options.map((item, i) => (
                    <Col key={i} lg={6} md={6} sm={12} xs={12} className="m-t-15" span={6}>
                      {renderItems(item)}
                    </Col>
                  ))}
                </Row>
              ) : (
                <CarouselCommon>
                  {skinData.sections.experts.options && !!skinData.sections.experts.options.length && skinData.sections.experts.options.map((item, i) => (
                    <div key={i} >
                      {renderItems(item)}
                    </div>
                  ))}
                </CarouselCommon>
              )}
            </div>

            <div className={styles["carousel-gradient-btn"]}>
              {skinData.sections.experts.button_text}
            </div>
          </section>
          {/* <section className={styles["sec-pad"]}>
            <div className={styles["img-card-box"]}>
              <div className={styles["sec-header"]}>
                Browse Popular Collections
              </div>
              <LinkCard
                gradientStart="rgba(85, 231, 154, 0.5)"
                gradientEnd="#abeff1"
              >
                <div className={`${styles["lsb-label"]} ${styles["l1"]}`}>
                  Rs 999 Store
                </div>
              </LinkCard>
              <LinkCard
                gradientStart="rgba(37, 95, 239, .5)"
                gradientEnd="#255fef"
              >
                <div className={`${styles["lsb-label"]} ${styles["l1"]}`}>
                  Essentials
                </div>
              </LinkCard>
              <LinkCard
                gradientStart="rgba(61, 213, 138, .5)"
                gradientEnd="#3dd58a"
              >
                <div className={`${styles["lsb-label"]} ${styles["l1"]}`}>
                  Loved by All
                </div>
              </LinkCard>
              <LinkCard
                gradientStart="rgba(204, 212, 234, .5)"
                gradientEnd="#ccd4ea"
              >
                <div className={`${styles["lsb-label"]} ${styles["l1"]}`}>
                  New Arrivals
                </div>
              </LinkCard>
            </div>
          </section> */}

          <section
            className={`${styles["sec-pad"]} ${styles["gradient-section"]} doctor-section`}
          >
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bbw_plain.png" />
            </div>
            <div className={styles["sec-header"]}>
              {skinData.sections.testimonials.title}
            </div>
            <div className={styles["gradient-text"]}>
              Here are some stories from ClubWise members
            </div>

            <Carousel
              autoPlay
              infiniteLoop
              centerMode
              showStatus={false}
              dynamicHeight={false}
              showThumbs={false}
              centerSlidePercentage={80}
            >
              {skinData.sections.testimonials.customers.map((item, index) => (
                  <div
                    className="doc-carousal"
                  >
                  <Card key={index} className={checkFlag ? "custom-card" : "custom-card carousel-card"}>
                    <Row noGutters>
                      <Col lg={7} md={12} sm={12} xs={12}>
                        <div className="p-10 text-left" style={{padding: 20, height:checkFlag ? 320 : 360,justifyContent:"space-between", flexDirection:"column" ,display:"flex"}}>
                          <div className="f-14">
                            <div>{item.text}</div>
                          </div>
                          <div className="m-t-10">
                            <div style={{ marginTop: 20, color: '#111D3C', marginBottom: 0, fontSize: 16 }} className="bold">{item.name}</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
            </Carousel>
            <Link href="/your-wellness-assessment">
              <div className={styles["carousel-gradient-btn"]}>
                CONSULT AN EXPERT TODAY
              </div>
            </Link>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skin;
