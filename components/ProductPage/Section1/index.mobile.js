import React from 'react'
import {
  Row, Col, Image, Container
} from 'react-bootstrap'
import LogoIcon from '../../LogoIcon';
import { ucFirst } from '../../../utils'

const Section1 = ({ data = {} }) => {
  return (
    <div className="section1-mobile-details" style={{ paddingTop: 40 }} >
      <div className="container-page text-center" >
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={12} xs={12}>
            {data.title && <div className="title">{ucFirst(data.title.toLowerCase())}</div>}
            <div className="sub-title" >{data.text}</div>
          </Col>
        </Row>
      </div>
      <div className="relative" >
        <Row noGutters>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm={12} xs={12}>
            <Image className="details-image full-width img-cover" src={data.link} rounded />
          </Col>
        </Row>
        <LogoIcon type="white" />
      </div>
    </div>
  )
}

export default Section1