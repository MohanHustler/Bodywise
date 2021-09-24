import React from 'react';
import {
  Col, Row, Button,
} from 'react-bootstrap';

const Banner = ({ data = {} }) => (
  <div style={{ padding: '20px 50px', background: '#111D3C' }} className="container-page">
    <Row justify="center" className="vcenter">
      <Col lg={8} md={8} sm={12} xs={12} className="m-t-10 p-10 vcenter" span={8}>
        <div style={{ color: '#fff' }} className='sub-section-title'>{data.title}</div>
        <div style={{ color: '#fff' }} className="m-t-15 main-section-subtitle">
          {data.subtitle}
        </div>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12} className="m-t-10 p-10 disp-flex center" span={4}>
        <Button style={{ height: 50 }} className="disp-flex center full-width">{data.button}</Button>
      </Col>
    </Row>
  </div>
);

export default Banner
