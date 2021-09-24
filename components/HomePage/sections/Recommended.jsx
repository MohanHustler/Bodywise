import React from "react";
import { Col, Row, Button } from "react-bootstrap";

import Router from "next/router";

import useCheckSize from "../../../hooks/useCheckSize";

import ProductItem from "../../ProductItem/ProductItem";

const Recommended = ({ data = {} }) => {
  const size = useCheckSize();
  const checkFlag = size > 767;
  return (
    <div
      style={{
        paddingTop: checkFlag ? 45 : 20,
        paddingBottom: checkFlag ? 45 : 20,
      }}
      className="container-page"
    >
      <Row>
        <Col className="m-t-10 text-center" span={12}>
          <div className={`${checkFlag ? "main-section-title" : "sub-section-title"}`}>{data.title}</div>
          <div className="bold f-16 sub-section-subtitle">{data.subtitle}</div>
        </Col>
      </Row>
      <Row className="m-t-30" justify="center">
        {data.products.map((item, i) => (
          <Col
            key={i}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="m-t-10"
            span={6}
          >
            <ProductItem data={item} />
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: 45 }} justify="center">
        <Col lg={12} md={12} sm={12} xs={12} span={12}>
          <Button
            onClick={() => {
              Router.push("/skin");
            }}
            style={{ height: checkFlag ? 50 : 60, width: "100%" }}
            className={`${
              checkFlag ? "custom-button" : "custom-button-gradient"
            } full-width m-t-15 m-b-15`}
          >
            {data.button}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Recommended;
