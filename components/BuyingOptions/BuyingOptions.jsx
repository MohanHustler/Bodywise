import React, { useState, useEffect } from "react";
import { Image } from 'react-bootstrap'
import { addToCart } from "./../../redux/actions/addToCartAction";
import { subtractFromCart } from "./../../redux/actions/subtractFromCart";
import { connect } from "react-redux";
import { FaCaretRight } from "react-icons/fa";
import QuantityInput from "./../QuantityInput/QuantityInput";
import Link from "next/link";
import parse from 'html-react-parser';

import styles from "./BuyingOptions.module.scss";

const BuyingOptions = (props) => {
  const productData = props.productData;
  let allProducts = [];
  let suggestedProducts = Object.values(productData.suggested_product || {});
  useEffect(() => {
    props.cartProps.productList.forEach((product) => {
      if (productData.name === product.name) {
        productData.quantity = product.quantity || 0;
      }
      suggestedProducts.forEach((item) => {
        if (item.name === product.name) {
          item.quantity = product.quantity || 0;
        }
      });
    });
  });

  const addToCartFn = (product, qty) => {
    props.addToCart(product, product.quantity ? product.quantity + qty : qty);
  };

  const subtractFromCartFn = (product, qty) => {
    props.subtractFromCart(
      product,
      product.quantity ? product.quantity - qty : 0
    );
  };
  const handleQuantityChange = (status, unit, item) => {
    if (status === "add") {
      addToCartFn(item, unit);
    } else if (status === "subtract") {
      subtractFromCartFn(item, unit);
    }
  };
  return (
    <React.Fragment>
      <div className={styles["bo-container"]}>
        <div className={styles["title"]}>Your Health Briefcase</div>
        <div className={styles["briefcase"]}>
          <div className={styles["item-box"]}>
            <div className={styles["left"]}>
              <Image className="img-contain" src={productData.photos && !!productData.photos.length ? productData.photos[0] : productData.banner_image} />
            </div>
            <div className={styles["right"]}>
              <div className={styles["name"]}>{productData.name}</div>
              {productData.usage_instruction && <div className={styles["desc"]}>
                {parse(productData.usage_instruction)}
              </div>}
              <div className={styles["price"]}>Rs {productData.price}</div>
              <div className={styles["buy-btn"]}>
                {productData.quantity > 0 && (
                  <QuantityInput
                    onQuantityChange={handleQuantityChange}
                    item={productData}
                    value={productData.quantity}
                  ></QuantityInput>
                )}
                {(!productData.quantity || productData.quantity <= 0) && (
                  <button
                    className={styles["addButton"]}
                    onClick={() => {
                      addToCartFn(productData, 1);
                    }}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
          {suggestedProducts && !!suggestedProducts.length && (
            <>
              <div className={styles["regime-seperator"]}>
                Suggested Regimes
              </div>
              <div className={styles["regime-title-text"]}>
                This Product is part of the {productData.regime_name}
                <br />
                Save more on purchasing the complete regime
              </div>
              {suggestedProducts.map((item, index) => (
                <div key={index} className={styles["item-box"]}>
                  <div className={styles["left"]}>
                    <img src={item.imgUrl} />
                  </div>
                  <div className={styles["right"]}>
                    <div className={styles["name"]}>{item.name}</div>
                    <div className={styles["desc"]}>
                      {/* {item.usage_instruction} */}
                    </div>
                    <div className={styles["price"]}>Rs {item.price}</div>
                    <div className={styles["buy-btn"]}>
                      {item.quantity > 0 && (
                        <QuantityInput
                          onQuantityChange={handleQuantityChange}
                          item={item}
                          value={item.quantity}
                        ></QuantityInput>
                      )}
                      {(!item.quantity || item.quantity <= 0) && (
                        <button
                          className={styles["addButton"]}
                          onClick={() => {
                            addToCartFn(item, 1);
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {props.cartProps.productList.length > 0 && (
        <div className={styles["buy-button-box"]}>
          <div className={styles["left"]}>
            <div className={styles["items"]}>
              {props.cartProps.totalItems} item(s)
            </div>
            <div className={styles["price"]}>
              Rs {props.cartProps.billing.grandTotal}
            </div>
          </div>
          <Link href="/cart">
            <div className={styles["right"]}>
              Place Order <FaCaretRight />
            </div>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartStore,
});
export default connect(mapStateToProps, { addToCart, subtractFromCart })(
  BuyingOptions
);
