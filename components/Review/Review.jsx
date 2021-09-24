import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import styles from "./Review.module.scss";

const Reviews = (props) => {
  return (
    <React.Fragment>
      <div className={styles["total-reviews"]}>
        <div className={styles["number"]}>4.7</div>
        <div className={styles["star"]}>
          {/* <Rating name="read-only" value={4.7} readOnly /> */}
        </div>
        <div className={styles["text"]}>Based on 10 reviews</div>
      </div>
      <div className={styles["division"]}>
        <div className={styles["item"]}>
          <div className={styles["star"]}>
            {/* <Rating name="read-only" value={5} readOnly /> */}
          </div>
          <div className={styles["loader"]}>
            <div className={styles["filled"]} style={{ width: "50%" }}>
              {" "}
            </div>
          </div>
          <div className={styles["text"]}>(7)</div>
        </div>
        <div className={styles["item"]}>
          <div className={styles["star"]}>
            {/* <Rating name="read-only" value={4} readOnly /> */}
          </div>
          <div className={styles["loader"]}>
            <div className={styles["filled"]} style={{ width: "40%" }}>
              {" "}
            </div>
          </div>
          <div className={styles["text"]}>(5)</div>
        </div>
        <div className={styles["item"]}>
          <div className={styles["star"]}>
            {/* <Rating name="read-only" value={3} readOnly /> */}
          </div>
          <div className={styles["loader"]}>
            <div className={styles["filled"]} style={{ width: "70%" }}>
              {" "}
            </div>
          </div>
          <div className={styles["text"]}>(10)</div>
        </div>
        <div className={styles["item"]}>
          <div className={styles["star"]}>
            {/* <Rating name="read-only" value={2} readOnly /> */}
          </div>
          <div className={styles["loader"]}>
            <div className={styles["filled"]} style={{ width: "10%" }}>
              {" "}
            </div>
          </div>
          <div className={styles["text"]}>(2)</div>
        </div>
        <div className={styles["item"]}>
          <div className={styles["star"]}>
            {/* <Rating name="read-only" value={1} readOnly /> */}
          </div>
          <div className={styles["loader"]}>
            <div className={styles["filled"]} style={{ width: "0%" }}>
              {" "}
            </div>
          </div>
          <div className={styles["text"]}>(0)</div>
        </div>
      </div>
      <div className={styles["recommendation-percentage"]}>
        <div className={styles["percentage"]}>98%</div>
        reviewers would recommend this product
      </div>
      <div className={styles["review-list"]}>
        <div className={styles["title"]}>Reviews</div>
        {/* User review */}
        <div className={styles["review-box"]}>
          <div className={styles["user-section"]}>
            <div className={styles["profile-pic"]}>AS</div>
            <div className={styles["details"]}>
              <div className={styles["ud"]}>
                <div className={styles["name"]}>Anindya S.</div>
                <div className={styles["ver-stat"]}>Verified Buyer</div>
                <div className={styles["date"]}>15/5/2020</div>
              </div>
              <div className={styles["star"]}>
                {/* <Rating size="small" name="read-only" value={5} readOnly /> */}
              </div>
            </div>
          </div>
          <div className={styles["recomm-text"]}>
            <div className={styles["icon"]}>
              <FaThumbsUp />
            </div>
            I recommend this product
          </div>
          <div className={styles["user-review"]}>
            <div className={styles["title"]}>Good One</div>
            <div className={styles["text"]}>
              You may not always want to include a module on server-side. For
              example, when the module includes a library that only works in the
              browser.
            </div>
          </div>
          <div className={styles["item"]}>One Month Pack - Hair Shampoo</div>
          <div className={styles["actions"]}></div>
        </div>
        {/* User review */}
        <div className={styles["review-box"]}>
          <div className={styles["user-section"]}>
            <div className={styles["profile-pic"]}>AS</div>
            <div className={styles["details"]}>
              <div className={styles["ud"]}>
                <div className={styles["name"]}>Anindya S.</div>
                <div className={styles["ver-stat"]}>Verified Buyer</div>
                <div className={styles["date"]}>15/5/2020</div>
              </div>
              <div className={styles["star"]}>
                {/* <Rating size="small" name="read-only" value={5} readOnly /> */}
              </div>
            </div>
          </div>
          <div className={styles["recomm-text"]}>
            <div className={styles["icon"]}>
              <FaThumbsUp />
            </div>
            I recommend this product
          </div>
          <div className={styles["user-review"]}>
            <div className={styles["title"]}>Good One</div>
            <div className={styles["text"]}>
              You may not always want to include a module on server-side. For
              example, when the module includes a library that only works in the
              browser.
            </div>
          </div>
          <div className={styles["item"]}>One Month Pack - Hair Shampoo</div>
          <div className={styles["actions"]}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
