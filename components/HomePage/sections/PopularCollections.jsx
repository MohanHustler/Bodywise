import React from 'react';
import {
  Col, Row, Card,
} from 'react-bootstrap';
import useCheckSize from '../../../hooks/useCheckSize'

const PopularCollections = ({ data = {} }) => {
  const size = useCheckSize()
  const checkFlag = size > 767
  return (
    <div style={{ paddingTop: checkFlag ? 45 : 20, paddingBottom: checkFlag ? 45 : 20 }} className="container-page">
      <Row>
        <Col sm={12} xs={12} className="m-t-10 text-center" span={12}>
          <div className={`${checkFlag ? "main-section-title" : "sub-section-title"}`}>{data.title}</div>
        </Col>
      </Row>
      <Row className="m-t-30">
        {data.options && !!data.options.length && data.options.map((item, i) => (
          <Col key={i} lg={3} md={6} sm={6} xs={6} className="m-t-10" span={6}>
            <Card style={{ height: checkFlag ? 250 : 150, background: item.background }} className="custom-card no-border">
              <div className="custom-card-title" >{item.title}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
};

export default PopularCollections
