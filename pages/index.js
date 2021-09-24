import React, { Component } from "react";
import Head from "next/head";
import HomePage from "./../components/HomePage/";
import { connect } from "react-redux";
import { addToCart } from "./../redux/actions/addToCartAction";
import Pixel from "../components/Pixel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head> */}
        <Pixel />

        <section>
          <HomePage />
        </section>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   cartProps: state.cartStore,
// });

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
// export default connect(mapStateToProps, { addToCart })(Home);
