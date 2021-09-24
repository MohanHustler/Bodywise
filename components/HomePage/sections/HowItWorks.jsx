import React from 'react';
import {
  Col, Row, Typography, Card, Button,
} from 'react-bootstrap';
import useCheckSize from '../../../hooks/useCheckSize'
import LogoIcon from '../../LogoIcon';

const HowItWorks = ({ data = {} }) => {
  const size = useCheckSize()
  const checkFlag = size > 767
  return (
    <div style={{ paddingTop: checkFlag ? 45 : 20, paddingBottom: checkFlag ? 75 : 35 }} className="container-page">
      {!checkFlag && <LogoIcon />}
      <Row justify="center">
        <Col sm={12} xs={12} className="m-t-10  text-center" span={12}>
          <div className={`${checkFlag ? "main-section-title" : "sub-section-title"}`}>{data.title}</div>
        </Col>
      </Row>
      {data.options && !!data.options.length && data.options.map((item, i) => (
        <Row key={i} className="m-t-30" justify="center">
          {/* {checkFlag && <Col lg={{ span: 6, order: i % 2 === 0 ? 'first' : 'last' }} md={{ span: 6, order: i % 2 === 0 ? 'first' : 'last' }} sm={12} xs={12} className="m-t-10">
            <Card className="custom-card no-border b-r-5" style={{ height: 300, background: '#ebecec' }} />
          </Col>} */}
          <Col style={{textAlign:"center"}} lg={{ span: 12, order: i % 2 !== 0 ? 'first' : 'last' }} md={{ span: 12, order: i % 2 === 0 ? 'first' : 'last' }} sm={12} xs={12} className="m-t-10">
            <div className={`${checkFlag ? "main-section-title" : "sub-section-title gradient-background-title disp-flex center"}`}>{item.title}</div>
            {item.subtitle && !!item.subtitle.length && item.subtitle.map((p, j) => (
              <div key={`${i}-${j}`} className="m-t-15 main-section-subtitle">
                {p}
              </div>
            ))}
          </Col>
        </Row>
      ))}
      <Row style={{ marginTop: 45 }} justify="center">
        <Col lg={12} md={12} sm={12} xs={12} span={12}>
          <Button style={{ height: 50 }} size="large" className={`${checkFlag ? 'custom-button' : 'custom-button-gradient'} full-width disp-flex center f-16`}>{data.button}</Button>
        </Col>
      </Row>
    </div>
  )
};

export default HowItWorks
