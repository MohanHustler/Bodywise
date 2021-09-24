import React, { Component } from "react";
import Head from "next/head";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "./../../redux/actions/addToCartAction";
import axios from "axios";
import Router from "next/router";
import Rupee from "./../../components/Rupee/Rupee";
import styles from "./Listing.module.scss";
import Pixel from '../../components/Pixel';

export class Listing extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    if (localStorage.getItem("user-tkn")) {
      CONFIG_CONSTANTS.id.user_token = localStorage.getItem("user-tkn");
    }
  }

  static async getInitialProps({ store }) {
    let resp = await axios.get(CONFIG_CONSTANTS.url.PRODUCTS_MB, {
      params: {
        storeId: CONFIG_CONSTANTS.id.store_id,
        currencyCode: "INR",
        "searchCriteria[pageSize]": 0,
        "searchCriteria[currentPage]": 1,
      },
    });
    let response = [...resp.data.items];
    return { products: response };
  }

  buyItem = (item) => {
    this.props.addToCart({
      detail: item,
      quantity: 1,
    });
    Router.push("/cart");
  };

  render() {
    return (
      <>
      <Pixel/>
        <Head>
          <title>BodyWise - Listing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Listing</div>
        <div data-test="listing-container" className={styles.container}>
          {this.props.products.map((item, index) => (
            <div
              className={styles.product}
              key={index}
              //onClick={(e) => this.handleExpand(e, index)}
            >
              <div>
                <h5>{item.name}</h5>

                <div>
                  <Rupee>{item.price_info.final_price}</Rupee>
                </div>
                <Button onClick={() => this.buyItem(item)}>BUY NOW</Button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProps: state.cartStore,
});
export default connect(mapStateToProps, { addToCart })(Listing);
