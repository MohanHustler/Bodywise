import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import Head from "next/head";
import useRequest from '../../hooks/useRequest'
import useCheckSize from '../../hooks/useCheckSize'
import ProductDetailWeb from '../../components/ProductPage/ProductDetail/index.web'
import Section1Web from '../../components/ProductPage/Section1/index.web'
import Section2Web from '../../components/ProductPage/Section2/index.web'
import Header from '../../components/Header'
import Questions from '../../components/ProductPage/Questions/index.web'
import CustomerComments from '../../components/HomePage/sections/CustomerComments'
import EffectWeb from '../../components/ProductPage/Effect/index.web'
import Loader from '../../components/Loader';
import CONFIG_CONSTANTS from "../../constants/apiList";
import PRODUCT from '../../constants/product'

import EffectMobile from '../../components/ProductPage/Effect/index.mobile'
import Section1Mobile from '../../components/ProductPage/Section1/index.mobile'
import Section2Mobile from '../../components/ProductPage/Section2/index.mobile'
import ProductMobile from '../../components/ProductPage/ProductDetail/index.mobile'
import Pixel from '../../components/Pixel';

import ModalBox from "../../components/ModalBox/ModalBox";
import BuyingOptions from "../../components/BuyingOptions";
import { Button } from 'react-bootstrap';
import { landingCustomerComments } from '../../components/HomePage/sections/data'

import { addToCart } from '../../redux/actions/addToCartAction'
import Footer from '../../components/Footer/index.mobile'

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;
  const dispatch = useDispatch()
  const [productData, setproductData] = useState({});
  const [buyingOptions, setBuyingOptions] = useState(0);
  const cartData = useSelector(state => state.cartStore)
  var fbEventDone = false;
  const handleModalClose = () => {
    setBuyingOptions(0);
  };


  const {doRequest, error, loading} = useRequest({
    url: CONFIG_CONSTANTS.url.GET_PRODUCT + pid,
    method: 'get',
    body: {},
    onSuccess: (data) => {
      setproductData(JSON.parse(data))
    }
  })

  const size = useCheckSize()
  const checkFlag = size > 767

  useEffect(() => {
    doRequest();
    if(!fbEventDone){
      fbEventDone = true;
      fbq('track', 'ViewContent',{content_id : pid});
    }
  }, []);

  const checkInCart = cartData && cartData.productList && cartData.productList.length && cartData.productList.findIndex(item => (productData.name && item.name === productData.name)) > -1

  const toCart = () => {
    if (checkInCart) {
      router.push('/cart')
    } else {
      dispatch(addToCart(productData, 1));
    }
  }
  const renderElements = () => {
    if (checkFlag) {
      return (
        <div>
          <ProductDetailWeb checkInCart={checkInCart} toCart={toCart} data={productData} onBuyNow={() => setBuyingOptions(1)} />
          <Section1Web data={productData.sections && productData.sections.video ? productData.sections.video : {}} />
          <Section2Web data={productData.sections || {}} />
          <EffectWeb data={productData.sections || {}} />
          <Questions data={productData.sections && productData.sections.faq ? productData.sections.faq : []} name={productData.name} />
          <CustomerComments data={{...landingCustomerComments, options: (productData.sections && productData.sections.testimonials ? productData.sections.testimonials.map((item) => ({...item, productName: productData.name})) : {})}} />
        </div>
      )
    }
    const buyButton = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 50,
      zIndex: 2,
      display: 'flex',
      background: '#fff'
    }
    return (
      <div>
        <ProductMobile data={productData} onBuyNow={() => setBuyingOptions(1)} />
        <Section1Mobile data={productData.sections && productData.sections.video ? productData.sections.video : {}} />
        <Section2Mobile data={productData.sections || {}} />
        <EffectMobile data={productData.sections || {}} />
        <Questions mobile data={productData.sections && productData.sections.faq ? productData.sections.faq : []} name={productData.name} />
        <CustomerComments data={{...landingCustomerComments, options: (productData.sections && productData.sections.testimonials ? productData.sections.testimonials.map((item) => ({...item, productName: productData.name})) : {})}} />
        <div style={buyButton} >
          <Button className="custom-button disp-flex center no-b-r bold flex-1" onClick={toCart} >{checkInCart ? 'Go to Cart' : 'Add to Cart'}</Button>
          <Button className="disp-flex center no-b-r bold flex-1" onClick={() => setBuyingOptions(1)} >Buy Now {productData.price && `(Rs ${productData.price})`}</Button>
        </div>
      </div>
    )
  }
  return (
    <>
    <Pixel/>
      <Head>
        <title>Be Bodywise</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Women's Wellness. Simplified" />
      </Head>
      <Header />
      <Loader loading={loading} error={error} >
        {renderElements()}
        {buyingOptions > 0 && (
          <ModalBox
            title={"Buying Options"}
            closeModal={() => handleModalClose()}
          >
            <BuyingOptions productData={productData} />
          </ModalBox>
        )}
      </Loader>
      <Footer />
    </>
  )
}

export default Product