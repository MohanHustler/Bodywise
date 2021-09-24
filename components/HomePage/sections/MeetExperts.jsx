import React from 'react';
import {
  Col, Row, Card,
} from 'react-bootstrap';

import useCheckSize from '../../../hooks/useCheckSize'
import CarouselCommon from '../../CarouselCommon';
import LogoIcon from '../../LogoIcon';

const MeetExperts = ({ data = {} }) => {
  const size = useCheckSize()
  const checkFlag = size > 767
  const renderItems = (item) => (
    <Card className={checkFlag ? "custom-card" : "custom-card carousel-card"}>
      <Row noGutters>
        <Col lg={7} md={12} sm={12} xs={12}>
          <div className="p-10 text-left" style={{padding: 20, height:checkFlag ? 280 : 320,justifyContent:"space-between", flexDirection:"column" ,display:"flex"}}>
            <div className="f-14">
              <div>{item.expert.description}</div>
            </div>
            <div className="m-t-10">
              <div style={{ marginTop: 20, color: '#111D3C', marginBottom: 0, fontSize: 16 }} className="bold">{item.expert.name}</div>
              <p style={{ color: '#6C6C6C', fontSize: 12 }}>{item.expert.desig}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  )
  return (
    <div style={{ paddingTop: checkFlag ? 45 : 20, paddingBottom: checkFlag ? 45 : 20 }} className="special-card-background">
      <div className="container-page" >
        {!checkFlag && <LogoIcon />}
        <Row justify="center">
          <Col md={12} lg={12} sm={12} xs={12} className="m-t-10 text-center" span={12}>
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
              <Col key={i} lg={6} md={6} sm={12} xs={12} className="m-t-15" span={6}>
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
};

export default MeetExperts
