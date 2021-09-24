import React from 'react'
import dynamic from "next/dynamic";
import parse from 'html-react-parser';
import {
  Row, Col, Button, Image,
} from 'react-bootstrap';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import LogoIcon from '../../LogoIcon';

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  {
    ssr: false,
  }
);

const Product = ({ data }) => {
  return (
    <div className="product-mobile-details">
      <Carousel className="details-image" style={{ background: 'transparent' }} showThumb={false} showIndicators={false} showStatus={false} >
        {data.photos && data.photos.map((item, i) => <Image className="image img-contain" key={i} src={item} />)}
      </Carousel>
      <div className="details-container relative" style={{ paddingBottom: 50 }}>
        <div className="container-page">
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
              <div className="price" >Rs {data.price}</div>
              {data.regime_step && <div className="type" >{data.regime_step}</div>}
              <div className="title m-b-10 m-t-10">{data.name}</div>
              <div style={{ borderTop: '1px solid #31b19b', borderBottom: '1px solid #31b19b' }} className="disp-flex f-15 m-b-30 vcenter has-space-btwn wrap text-center bold" >
                <div className="p-10" >
                  <div>{data.rating ? data.rating : '-'}</div>
                  <div>
                    <Rating emptySymbol={<FaStar style={{ color: '#dedede' }} />} fullSymbol={<FaStar style={{ color: '#EB9633' }} />} fractions={1} initialRating={data.rating} readonly />
                  </div>
                </div>
                <div className="p-10" >
                  <div>{data.users_reviewed || 0}</div> 
                  <div>Reviewed</div>
                </div>
                <div className="p-10" >
                  <div>{data.user_recommended || '0%'}</div> 
                  <div>Recommendation</div>
                </div>
              </div>
              <div className="m-t-15 f-20 bold avenir-roman" >
                <span className="p-r-10" style={{ borderRight: '1px solid #dedede' }} >{data.size}</span>
                <span className="p-l-10" >{data.usage} usage</span>
              </div>
              {data.usage_instruction && <div className="m-t-10" >{parse(data.usage_instruction)}</div>}
            </Col>
          </Row>
        </div>
        <LogoIcon type="white" />
      </div>
    </div>
  )
}

export default Product