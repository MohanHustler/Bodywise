import React from 'react'
import {
  Row, Col, Image,
} from 'react-bootstrap'
import { ucFirst } from '../../../utils'

const Section1 = ({ data = {} }) => {
  return (
    <div className="section1-details">
      <div className="container-page text-center" >
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            {data.title && <div className="title">{ucFirst(data.title.toLowerCase())}</div>}
            <div className="sub-title" >{data.text}</div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            <Image className="details-image full-width" src={data.link} rounded />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section1