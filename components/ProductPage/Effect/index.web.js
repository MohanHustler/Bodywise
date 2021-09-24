import React from 'react'
import {
  Row, Col, Card, Image,
} from 'react-bootstrap'
import { FaUserCircle, FaRegUserCircle } from 'react-icons/fa';


const Effect = ({ data = {} }) => {
  const {
    effect_you_feel = {},
  } = data
  const imageStyle = {
    width: '100%', minHeight: 110, background: '#dedede', minWidth: 100, maxHeight: 175,
  }
  return (
    <div className="effect-details">
      <div className="container-page text-center" >
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            <div className="title">{effect_you_feel.title}</div>
            <div className="sub-title" >{effect_you_feel.text}</div>
          </Col>
        </Row>
      </div>
      <div className="details-container">
        <div className="container-page" >
          <Row>
            <Col className="disp-flex" md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
              <div>
                {
                  effect_you_feel.effects && effect_you_feel.effects.map((item, i) => (
                    <Row key={i} className="m-b-15" >
                      <Col sm={2} xs={2} className="disp-flex center" >
                        <Image style={imageStyle} image="replace" className="img-fit b-r-10" />
                      </Col>
                      <Col sm={8} xs={8}>
                        <div className="f-16 bold m-b-10" >{item.title}</div>
                        <div className="f-14" >{item.text}</div>
                      </Col>
                    </Row>
                  ))
                }
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-page" >
          <Row className="m-t-30" >
            <Col className="disp-flex hcenter m-t-10" lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
              <div className="details-customer-card" >
                <Card className="full-width b-r-10" >
                  <Card.Body>
                    <div className="">
                      <Card.Title className="f-18 bold" style={{ minHeight: 175 }} >&ldquo;{effect_you_feel.customer_note}&rdquo;</Card.Title>
                      <div className="disp-flex vcenter m-t-10" >
                        <div className="center" style={{ width: 40 }} >
                          <FaRegUserCircle style={{ fontSize: 30 }} />
                        </div>
                        <div style={{ width: 'calc(100% - 40px)' }} className="text-left p-l-5">
                          <div style={{ marginBottom: 0 }} className="bold italic f-16">{effect_you_feel.customer_name}</div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Effect