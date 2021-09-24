import React from 'react';
import Router from "next/router";
import {
  Col, Row, Card, Button,
} from 'react-bootstrap';
import useCheckSize from '../../../hooks/useCheckSize'
import LogoIcon from '../../LogoIcon';

const Personalized = ({ data = {} }) => {
  const size = useCheckSize()
  const checkFlag = size > 767
  return (
    <div style={{ textAlign:"center", paddingTop: checkFlag ? 45 : 20, paddingBottom: checkFlag ? 45 : 20 }} className="container-page">
      {!checkFlag && <LogoIcon />}
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="m-t-10">
          <div className={`${checkFlag ? "main-section-title" : "sub-section-title"}`}>{data.title}</div>
          {data.subtitle && !!data.subtitle.length && data.subtitle.map((item, i) => (
            <div key={i} className="m-t-15 main-section-subtitle">
              {item}
            </div>
          ))}
          <Button onClick={() => Router.push('/your-wellness-assessment')} style={{ height: 60, width: checkFlag ? 250 : '100%' }} className={`${checkFlag ? 'custom-button' : 'custom-button-gradient'} m-t-15 m-b-15`}>{data.button}</Button>
        </Col>
        {/* {checkFlag && data.options && !!data.options.length && data.options.map((item, i) => (
          <Col key={i} lg={7} md={7} sm={12} xs={12} className="m-t-10" >
            <Card className="custom-card no-border b-r-5" style={{ height: 450, background: '#ebecec' }} />
          </Col>
        ))} */}
      </Row>
    </div>
  )
};

export default Personalized
