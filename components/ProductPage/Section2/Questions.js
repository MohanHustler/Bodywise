import React, { useContext } from 'react'
import {
  Accordion, Card, AccordionContext, useAccordionToggle, Image
} from 'react-bootstrap'
import parse from 'html-react-parser';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header style={{ background: '#fff', borderBottom: 0, borderRadius: 10 }} className="f-18 disp-flex has-space-btwn vcenter hand txt-black avenir-roman" onClick={decoratedOnClick}>
      <div style={{ width: 'calc(100% - 30px)' }} >{children}</div>
      <div className="f-18 text-right" style={{ width: 30 }} >{!isCurrentEventKey ? <FaChevronDown /> : <FaChevronUp />}</div>
    </Card.Header>
  );
}

const Questions = ({
  full_ingredients = {}, who_its_for = {}, usage = {}
}) => {
  return (
    <Accordion defaultActiveKey="0" >
      {full_ingredients && (
        <div className="m-b-10" >
          <Card className="b-r-10" >
              <ContextAwareToggle eventKey="0">Full list of ingredients</ContextAwareToggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="m-b-10" >
                    <div className="m-b-5 bold">Ingredient Names:</div>
                    <div className="f-15" >{full_ingredients.ingredient_names || 'Not available'}</div>
                  </div>
                  <div className="m-b-10" >
                    <div className="m-b-5 bold">Formulated Without:</div>
                    <div className="f-15" >{full_ingredients.formulated_without || 'Not available'}</div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        )}
      {who_its_for && (
        <div className="m-b-10" >
          <Card className="b-r-10" >
            <ContextAwareToggle eventKey="1">{who_its_for.title}</ContextAwareToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="m-b-10" >
                  <div className="f-15" >{parse(who_its_for.text || 'Not available')}</div>
                </div>
                <div className="m-b-10" >
                  <div className="m-b-5 bold">{who_its_for.header}</div>
                  <div className="f-15" >{parse(who_its_for.sub_text || 'Not available')}</div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      )}
      {
        usage && usage.steps && (
          <div className="m-b-10" >
            <Card className="b-r-10" >
              <ContextAwareToggle eventKey="2">{usage.title}</ContextAwareToggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {
                    usage.steps.map((item, i) => (
                      <div key={i} className="m-b-10" >
                        <div className="m-b-5 bold">
                          <Image className="m-b-20" image="replace" style={{ width: 50, height: 50, background: '#dedede' }} roundedCircle />
                        </div>
                        <div className="f-15" >{parse(item.text || 'Not available')}</div>
                      </div>
                    ))
                  }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        )
      }
    </Accordion>
  )
}


export default Questions