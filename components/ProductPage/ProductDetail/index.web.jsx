import React from 'react'
import dynamic from "next/dynamic";
import parse from 'html-react-parser';
import {
  Row, Col, Button, Image,
} from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  {
    ssr: false,
  }
);

const Product = ({ data = {}, onBuyNow = () => null, checkInCart = false, toCart = () => null }) => {
  return (
    <div className="product-details">
      <div className="container-page" >
        <Row>
          <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
            {data.regime_step && <div className="type" >{data.regime_step}</div>}
            <div className="title">{data.name}</div>
            <div className="price" >Rs {data.price}/-</div>
            <div className="disp-flex m-t-15" >
              <Button onClick={toCart} variant="outline-dark" style={{ height: 50 }} className="disp-flex center full-width flex-1 m-l-5 m-r-5 m-b-5 m-t-10" >{checkInCart ? 'Go to cart' : 'Add to cart'}</Button>
              <Button onClick={onBuyNow} style={{ height: 50 }} className="disp-flex center full-width flex-1 m-l-5 m-r-5 m-b-5 m-t-10 custom-button" >Buy now</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="details-container">
        {/* <Image className="" src={data.banner_image} rounded /> */}
        <div className="container-page text-center" >
          <Row>
            <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
              <div className="disp-flex hcenter" >
                <Carousel showArrows={false} showStatus={false} className="details-image" style={{ background: 'transparent' }} showThumbs thumbWidth={100} showIndicators={false} >
                  {data.photos && data.photos.map((item, i) => <img key={i} src={item} className="image" />)}
                </Carousel>
              </div>
              <div className="disp-flex f-15 center bold" >
                <div className="p-10 m-l-15 m-r-15" >
                  {data.rating ? data.rating : '-'}
                  <FaStar style={{ color: '#EB9633' }} className="m-l-5" />
                </div>
                <div style={{ width: 1, height: 14, background: '#dedede' }} />
                <div className="p-10 m-l-15 m-r-15" >{data.users_reviewed || 0} Reviewed</div>
                <div style={{ width: 1, height: 14, background: '#dedede' }} />
                <div className="p-10 m-l-15 m-r-15" >{data.user_recommended || '0%'} Recommendation</div>
              </div>
              <div className="m-t-15 f-20 disp-flex center bold avenir-roman" >
                <div>{data.size}</div>
                <div className="m-lr-10" style={{ width: 1, height: 20, background: '#dedede' }} />
                <div>{data.usage} usage</div>
              </div>
              <div className="disp-flex center avenir-roman" >
                {data.usage_instruction && <div className="m-t-10 text-left" >{parse(data.usage_instruction)}</div>}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Product