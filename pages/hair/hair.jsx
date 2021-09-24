import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "./../../components/Header";
import { Carousel } from "react-responsive-carousel";
import BottomMenu from "./../../components/BottomMenu";
import LinkCard from "./../../components/LinkCard/LinkCard";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { FaBell, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { StaticData } from "./../../constants/data";
import styles from "./hair.module.scss";
import Pixel from "../../components/Pixel";

const Hair = () => {
  const hairData = StaticData.hairJson;
  const displayProducts = Object.values(hairData.display);
  const itemData = displayProducts.map((item) => {
    let itemObj = {
      name: item.name,
      url_key: item.name.toLowerCase(),
      imgUrl: item.image,
      price: item.price,
      is_rx: item.is_rx,
      is_kit: item.is_kit,
      regime_steps: item.regime_steps
    };
    const currentRegime = Object.keys(hairData.regime_details).filter((reg) =>
      item.regime_steps.includes(reg)
    );
    itemObj.desc = currentRegime[0].step_name;
    return itemObj;
  });
  // {
  //   name: "Acne control cleansing cream",
  //   url_key: "Serum",
  //   imgUrl:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/w_375/staging/app/1.png",
  //   desc: "Cleanse + Nourish",
  //   price: 3999,
  // };

  // const itemData2 = {
  //   name: "Complete Anti Ageing Regime",
  //   url_key: "acne-gel",
  //   imgUrl:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/w_375/staging/app/1.png",
  //   desc: "Cleanse + Repair + Moisturize + protect",
  //   price: 3999,
  // };

  return (
    <React.Fragment>
      <Pixel />
      <Head>
        <title>Be Bodywise - Hair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles["hair-box"]}>
        <section className={styles["slider-section"]}>
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
        </section>

        <div>
          <section className={styles["sec-pad"]}>
            <div className={styles.header}>{hairData.section1}</div>
            <div className={styles.text}>{hairData.desc}</div>
          </section>
          <section>
            {itemData.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}

            <div className={styles["gradient-btn"]}>View All Products</div>
          </section>
        </div>
        <div>
          <section className={styles["sec-pad"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["gradient-header"]}>
              {hairData.section2.title}
            </div>
            {hairData.section2.desc.map((data, index) => (
              <div key={index} className={styles["gradient-text"]}>
                {data}
              </div>
            ))}
            <div className={styles["gradient-btn"]}>
              {hairData.section2.btnText}
            </div>
            <section className={styles.banner}>
              <img src="https://picsum.photos/id/1068/600/600" alt="" />
            </section>
          </section>
        </div>
        <div>
          <section className={styles["sec-pad"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["sec-header"]}>
              Expert Recommended Products
            </div>
            <div className={styles["gradient-text"]}>
              Here's what Dr. Shobita has to say about this regime
            </div>
            <div className={styles["rec-products"]}>
              {itemData.map((item, index) => (
                <div key={index} className={styles["rec-prod-box"]}>
                  <div className={styles["top"]}>
                    <div className={styles["number"]}>1</div>
                    <div className={styles["title"]}>Lorem</div>
                  </div>
                  <div className={styles["content"]}>
                    <div className={styles["img-left"]}>
                      <img
                        src="https://res.cloudinary.com/mosaic-wellness/image/upload/w_300,h_600/staging/app/1.png"
                        alt=""
                      />
                    </div>
                    <div className={styles["right"]}>
                      <div className={styles["prod-name"]}>Face Wash</div>
                      <div className={styles["details"]}>
                        <div className={styles["emp-s"]}>
                          {hairData.section3.doctor_name} says
                        </div>
                        <div className={styles["text"]}>
                          {hairData.section3.line1}
                        </div>
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
                <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/icon.png" />
              </div>
              <div className={styles["title"]}>{hairData.section3.title}</div>
              <div className={styles["sub-text"]}>{hairData.section3.text}</div>
            </div>

            <div className={styles["about-prod-doc"]}>
              <div className={styles["emp-s"]}>
                {hairData.section3.doctor_name} says
              </div>
              <div className={styles["text"]}>{hairData.section3.line1}</div>
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
              <div className={styles["icon-box"]}>
                {hairData.section3.claims.map((item, index) => (
                  <div key={index} className={styles["item-box"]}>
                    <div className={styles["icon"]}>
                      <FaBell />
                    </div>
                    <div className={styles["label"]}>{item.claim}</div>
                  </div>
                ))}
              </div>
              <div className={styles["acc-box"]}>
                <div className={styles["acc-header"]}>
                  <div className={styles["title"]}>What to Expect</div>
                  <FaAngleDown />
                </div>
                <div className={styles["acc-body"]}>
                  <div className={styles["acc-box-head"]}>
                    1 - 2 Months of Use
                  </div>
                  <div className={styles["acc-box-content"]}>
                    There will be signficant reduction in hairloess. Lorem ipsum
                    dolor sit amet aversis prognosis negative
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles["sec-pad"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["sec-header"]}>
              Expert Recommended Products
            </div>
            <div className={styles["gradient-text"]}>
              Here's what Dr. Shobita has to say about this regime
            </div>
            <div className={styles["ing-box"]}>
              <div className={styles["image-box"]}>
                <div className={styles["top"]}>
                  <img
                    src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/acne.png"
                    alt=""
                  />
                </div>
                <div className={styles["bottom"]}>
                  <div className={styles["to1"]}>
                    <div className={styles["con"]}>Biotin</div>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
              <div className={styles["ing-content"]}>
                The wonder vitamin for battling hair loss. Biotin is a complex
                of multiple B Vitamins that help to make sure your hair are
                always there for you.
              </div>
              <div className={styles["prod-box"]}>
                <div className={styles["left"]}>
                  <div className={styles["c1"]}>Active Ingredient of</div>
                  <div className={styles["c2"]}>Anti Hairfall Shampoo</div>
                  <div className={styles["c3"]}>
                    View Product <FaAngleRight />
                  </div>
                </div>
                <div className={styles["right"]}>
                  <img
                    src="https://res.cloudinary.com/mosaic-wellness/image/upload/w_100,h_100/staging/app/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className={styles["sec-pad"]}>
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["sec-header"]}>How it Works?</div>
            <div className={styles["gradient-header"]}>Help us know you</div>
            <div className={styles["gradient-text"]}>
              Know what you are looking for?
              <br /> Browse our carefully crafted solutions.
            </div>
            <div className={styles["gradient-text"]}>
              Not sure what will work for you?
              <br /> Schedule a free online consultation with our renowned
              experts
            </div>
            <div className={styles["gradient-header"]}>
              Wellness at your doorstep
            </div>
            <div className={styles["gradient-text"]}>
              Get your products delivered in safe and discreet packages in 5-7
              days
            </div>
            <div className={styles["gradient-text"]}>
              In-case some of your purchases require preliminary health
              assessment, we've got you covered
            </div>
            <div className={styles["gradient-header"]}>
              Your regime. Your expert
            </div>
            <div className={styles["gradient-text"]}>
              Get free regular checks and follow ups which helps us make sure
              you get the maximum results
            </div>
            <div className={styles["gradient-btn"]}>SHOP NOW</div>
          </section>

          <section
            className={`${styles["sec-pad"]} ${styles["gradient-section"]} doctor-section`}
          >
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["sec-header"]}>Meet the experts</div>
            <div className={styles["gradient-text"]}>
              Get free regular checks and follow ups which helps us make sure
              you get the maximum results
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
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  1
                </div>
              </div>
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  2
                </div>
              </div>
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  3
                </div>
              </div>
            </Carousel>

            <div className={styles["gradient-btn"]}>
              CONSULT AN EXPERT TODAY
            </div>
          </section>
          <section className={styles["sec-pad"]}>
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
          </section>
          <section
            className={`${styles["sec-pad"]} ${styles["gradient-section"]} doctor-section`}
          >
            <div className={styles["img-seperator"]}>
              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/bwicon.png" />
            </div>
            <div className={styles["sec-header"]}>Our Customers Love Us</div>
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
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  1
                </div>
              </div>
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  2
                </div>
              </div>
              <div>
                <div className={`${styles["carousal-item-doc"]} doc-carousal`}>
                  3
                </div>
              </div>
            </Carousel>
            <Link href="/your-wellness-assessment">
              <div className={styles["gradient-btn"]}>
                CONSULT AN EXPERT TODAY
              </div>
            </Link>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hair;
