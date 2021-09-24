import React from 'react';
import PropTypes from 'prop-types'
import {
  Col, Row, Card,
} from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import LogoIcon from '../../LogoIcon';

import useCheckSize from '../../../hooks/useCheckSize'
import CarouselCommon from '../../CarouselCommon';

const CustomerComments = ({ data = {} }) => {
  const size = useCheckSize()
  const checkFlag = size > 767
  const renderItems = (item) => (
    <Card style={{ height: 350 }} className="custom-card">
      <div className="custom-card-body">
        <div className="text-left" style={{ height: 270, overflowY: 'auto' }}>
          {item.text}
        </div>
        <div className="disp-flex vcenter" >
          <div className="center" style={{ width: 40 }} >
            <FaRegUserCircle style={{ fontSize: 30 }} />
          </div>
          <div style={{ width: 'calc(100% - 40px)' }} className="text-left p-l-5">
            <div style={{ color: '#111D3C', marginBottom: 0, fontSize: 14 }} className="bold">{item.name} {item.age && `(${item.age})`}</div>
            <p style={{ color: '#6C6C6C', fontSize: 12 }}>{item.productName}</p>
          </div>
        </div>
      </div>
    </Card>
  )
  if (data.options && data.options.length) {
    return (
      <div className={checkFlag ? '' : 'special-card-background'} style={{ paddingTop: checkFlag ? 45 : 20, paddingBottom: checkFlag ? 45 : 20 }}>
        <div className="container-page">
          {!checkFlag && <LogoIcon />}
          <Row>
            <Col sm={12} xs={12} className="m-t-10 text-center" span={12}>
              <div className={`${checkFlag ? "main-section-title" : "sub-section-title"}`}>{data.title}</div>
              <div className="m-t-15 main-section-subtitle">
                {data.subtitle}
              </div>
            </Col>
          </Row>
        </div>
        <div className={`${checkFlag ? 'container-page' : ''}`} >
          {checkFlag ? (
            <Row className="m-t-30">
              {data.options && !!data.options.length && data.options.map((item, i) => (
                <Col key={i} lg={3} md={6} sm={12} xs={12} className="m-t-15">
                  {renderItems(item)}
                </Col>
              ))}
            </Row>
          ) : (
            <CarouselCommon>
              {data.options && !!data.options.length && data.options.map((item, i) => (
                <div key={i} >
                  {renderItems(item)}
                </div>
              ))}
            </CarouselCommon>
          )}
        </div>
      </div>
    )
  }
  return null
};

CustomerComments.propTypes = {
  data: PropTypes.object,
}

CustomerComments.defaultProps = {
  data: {
    title: '',
    subtitle: '',
    options: [],
  },
}

export default CustomerComments
