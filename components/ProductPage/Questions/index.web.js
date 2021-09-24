import React, { useContext } from "react";
import {
  Row,
  Col,
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header style={{ background: '#fff', }} className="f-18 disp-flex has-space-btwn vcenter hand no-border bold p-t-20 p-b-20" onClick={decoratedOnClick}>
      <div style={{ width: 'calc(100% - 30px)' }} >{children}</div>
      <div className="f-16 text-right" style={{ width: 30 }} >{!isCurrentEventKey ? <FaChevronDown /> : <FaChevronUp />}</div>
    </Card.Header>
  );
}

const Questions = ({ data = [], name = '', mobile = false }) => {
  return (
    <div style={{ background: '#fff' }} className={mobile ? "questions-mobile-details" : "questions-details"}>
      <div className="container-page text-center" >
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            <div className="title">We’ve Got Answers</div>
            <div className="sub-title">
              Frequently asked questions About {name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={{ span: 10, offset: 1 }} sm={12} xs={12}>
            <Accordion defaultActiveKey="0">
              {data.map((item, i) => (
                <div key={i} className="text-left">
                  <Card style={{ borderBottom: '2px solid #000', borderRadius: 0 }} className="no-border" >
                    <ContextAwareToggle eventKey={`${i}`}>{item.question}</ContextAwareToggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <Card.Body>{item.ans}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Questions;
