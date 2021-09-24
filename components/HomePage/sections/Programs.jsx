import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import useCheckSize from "../../../hooks/useCheckSize";

const Programs = ({ data = {} }) => {
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
        <Col style={{textAlign:"center"}} lg={12} md={12} sm={12} xs={12} className="m-t-10">
          <div className="sub-section-title">{data.title}</div>
          {data.subtitle &&
            !!data.subtitle.length &&
            data.subtitle.map((item, i) => (
              <div key={i} className="m-t-15 sub-section-subtitle">
                {item}
              </div>
            ))}
        </Col>
      </Row>
      <div className="m-t-10">
        <Row>
          {data.options &&
            !!data.options.length &&
            data.options.map((item, i) => (
              <Col
                key={i}
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className="p-10"
                span={6}
              >
                {item.disabled ? (
                  <div style={{}}>
                    <Card
                      style={{ height: checkFlag ? 300 : 200 }}
                      className="custom-card no-border not-allowed"
                    >
                      <div style={{ textAlign: "right" }}>
                        <Card.Img
                          className="b-r-5 img-cover"
                          style={{
                            opacity: 0.4,
                            height: checkFlag ? 300 : 200,
                            objectPosition: "right",
                          }}
                          src={item.image}
                        />
                        <div
                          style={{
                            float: "right",
                            background: "#5aeaaf",
                            width: "7rem",
                            textAlign: "center",
                            marginTop: "-33.5%",
                          }}
                        >
                          Coming Soon
                        </div>
                      </div>

                      <div
                        style={{
                          opacity: 0.4,
                          color: item.color,
                          fontSize: checkFlag ? 20 : 16,
                        }}
                        className="custom-card-title"
                      >
                        {item.title}
                      </div>

                      {/* <div
                        className="custom-card-title"
                        style={{
                          background: "#5aeaaf",
                          marginLeft: "233px",
                          width: "150px",

                          textAlign: "center",
                        }}
                      >
                        Coming Soon
                      </div> */}

                      <div className="custom-card-arrow-container">
                        <FaArrowRight
                          style={{
                            fontSize: checkFlag ? 20 : 16,
                            opacity: 0.4,
                          }}
                          className="hand"
                        />
                      </div>
                    </Card>
                  </div>
                ) : (
                  <Link href={item.link}>
                    <a className="a-link">
                      <Card
                        style={{ height: checkFlag ? 300 : 200, opacity: 1 }}
                        className="custom-card no-border hand"
                      >
                        <Card.Img
                          className="b-r-5 img-cover"
                          style={{
                            height: checkFlag ? 300 : 200,
                            objectPosition: "right",
                          }}
                          src={item.image}
                        />
                        <div
                          style={{
                            color: item.color,
                            fontSize: checkFlag ? 20 : 16,
                          }}
                          className="custom-card-title"
                        >
                          {item.title}
                        </div>
                        <div className="custom-card-arrow-container">
                          <FaArrowRight
                            style={{ fontSize: checkFlag ? 20 : 16 }}
                            className="hand"
                          />
                        </div>
                      </Card>
                    </a>
                  </Link>
                )}
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Programs;
