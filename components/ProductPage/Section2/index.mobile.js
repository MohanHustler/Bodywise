import React, { Fragment } from 'react'
import {
  Row, Col, Image, Accordion, Card,
} from 'react-bootstrap'
import parse from 'html-react-parser';
import { FaUserCircle } from 'react-icons/fa';
import Questions from './Questions';

const Section2 = ({ data = {} }) => {
  const {
    why_this_works = {},
    key_ingredients = {}
  } = data
  const renderProperties = (key, title) => {
    if (why_this_works && why_this_works[key]) {
      return (
        <div style={{ background: '#ffffff', minHeight: 35, border: 0 }} className="disp-flex vcenter wrap m-b-10 relative f-14" >
          <div style={{ height: 35, border: '1px solid #1a6c5e' }} className="disp-flex vcenter p-10 bold" >{title}</div>
          {why_this_works[key].map((item, i) => (
            <Fragment key={i} >
              <div style={{ height: 35, border: '1px solid #1a6c5e', flex: 'auto' }} className="disp-flex vcenter p-10" >{item}</div>
            </Fragment>
          ))}
        </div>
      )
    }
    return null
  }
  return (
    <div className="section2-mobile-details" style={{ paddingTop: 60 }} >
      <div className="container-page text-center" >
        <Row noGutters>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
            <div className="title">{why_this_works.title}</div>
            <div className="sub-title" >{why_this_works.text}</div>
          </Col>
        </Row>
      </div>
      <div className="details-container avenir-roman">
        <div className="container-page" >
          <Row noGutters>
            <div className="disp-flex vcenter" >
              <FaUserCircle style={{ fontSize: 25 }} />
              <div className="bold m-l-5" >{why_this_works.doctor_name} {why_this_works.doctor_note ? 'says' : ''}</div>
            </div>
            {why_this_works.doctor_note && <div style={{ width: '95%' }} className="m-t-15 f-14" >{parse(why_this_works.doctor_note)}</div>}
            <div style={{ color: '#111d3c' }} className="m-b-15 m-t-10 full-width" >
              {renderProperties('for', 'For')}
              {renderProperties('with', 'With')}
              {renderProperties('because', 'Because')}
            </div>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
              <Row noGutters className="text-center m-t-20" >
                {why_this_works.claims && !!why_this_works.claims.length && why_this_works.claims.map((item, i) => (
                  <Col key={i} md={4} lg={4} sm={4} xs={4} >
                    <div className="disp-flex hcenter"  >
                      <div className="f-14" >
                        <Image className="m-b-20" style={{ width: 50, height: 50, background: '#dedede' }} roundedCircle />
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
            <Row className="m-t-20" noGutters style={{ paddingTop: 50 }} >
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm={12} xs={12}>
                <div className="title">Key Ingredients</div>
                <div className="sub-title" >{key_ingredients.text}</div>
                {key_ingredients.list && key_ingredients.list.map((item, i) => (
                  <div key={i} className="text-center m-b-20" >
                    <Image className="m-b-10" style={{ width: 60, height: 60, background: '#dedede' }} roundedCircle />
                    <div className="f-16" >{item.name}</div>
                    <div className="m-t-10" >{item.text}</div>
                  </div>
                ))}
              </Col>
            </Row>
          )}
          <Row noGutters className="text-left" style={{ paddingTop: 50, color: '#111d3c' }} >
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm={12} xs={12}>
              <Questions {...data} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Section2