import React, { Fragment } from 'react'
import {
  Row, Col, Card, Image, Accordion
} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa';
import parse from 'html-react-parser';
import Questions from './Questions'

const Section2 = ({ data = {} }) => {
  const {
    why_this_works = {},
    key_ingredients = {},
  } = data
  const renderProperties = (key, title) => {
    if (why_this_works && why_this_works[key]) {
      return (
        <div style={{ background: '#dedede', minHeight: 35 }} className="disp-flex f-14 vcenter wrap m-b-10 relative" >
          <div style={{ height: 35, border: '1px solid #fff', margin: "-1px -1px 0px 0px" }} className="disp-flex vcenter p-10 p-l-20 p-r-20 bold" >{title}</div>
          {why_this_works[key].map((item, i) => (
            <Fragment key={i} >
              <div style={{ height: 35, border: '1px solid #fff', margin: "-1px -1px 0px 0px", flex: 'auto' }} className="disp-flex vcenter p-10 p-l-20 p-r-20" >{item}</div>
            </Fragment>
          ))}
        </div>
      )
    }
    return null
  }
  return (
    <div className="section2-details">
      <div className="container-page text-center" >
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            <div className="title">{why_this_works.title}</div>
            <div className="sub-title" >{why_this_works.text}</div>
          </Col>
        </Row>
      </div>
      <div className="details-container avenir-roman">
        <div className="container-page" >
          <Row>
            <Col className="disp-flex hcenter" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
              <div className="details-card" >
                <Card className="full-width b-r-10" >
                  <Card.Body>
                    <div className="text-center">
                      <FaUserCircle style={{ fontSize: 30 }} />
                      <Card.Title className="f-16 bold m-t-5" >{why_this_works.doctor_name}</Card.Title>
                      <div className="disp-flex center" >
                        {why_this_works.doctor_note && <Card.Text className="f-14 text-left m-t-15" >{parse(why_this_works.doctor_note)}</Card.Text>}
                      </div>
                    </div>
                  </Card.Body>
                  <div className="m-b-15 m-t-10" >
                    {renderProperties('for', 'For')}
                    {renderProperties('with', 'With')}
                    {renderProperties('because', 'Because')}
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-page text-center" >
          <Row>
            <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
              <Row className="center" >
                {why_this_works.claims && !!why_this_works.claims.length && why_this_works.claims.map((item, i) => (
                  <Col key={i} md={6} lg={3} sm={6} xs={6} >
                    <div className="disp-flex hcenter"  >
                      <div>
                        <Image className="m-b-20" image="replace" style={{ width: 100, height: 100, background: '#dedede' }} roundedCircle />
                        <div >{item.claim}</div>
                        <div className="m-b-10" >{item.text}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          {key_ingredients && (
            <Row style={{ paddingTop: 50 }}>
              <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
                <div className="title">Key Ingredients</div>
                <div className="sub-title" >{key_ingredients.text}</div>
                <Row className="m-b-20" className="center">
                  {key_ingredients.list && key_ingredients.list.map((item, i) => (
                    <Col key={i} md={6} lg={4} sm={6} xs={6} >
                      <Card className="disp-flex hcenter b-r-10 m-b-15" style={{ color: '#111d3c', minHeight: 350 }}  >
                        <Card.Body>
                          <Image className="m-b-20" image="replace" style={{ width: 100, height: 100, background: '#dedede' }} roundedCircle />
                          <div>{item.name}</div>
                          <div className="m-t-10" >{item.text}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}
          <Row className="text-left" style={{ paddingTop: 50, color: '#111d3c' }} >
            <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
              <Questions {...data} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Section2