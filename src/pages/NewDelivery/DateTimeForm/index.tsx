import React from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormDoubleRange,
  FormGroup,
  FormLabel,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

const DateTimeForm = () => {
  const { newDelivery: { dateAndTime: dateAndTimeTexts } } = generalTexts;

  return (
    <Card title={dateAndTimeTexts.title}>
      <Row>
        <Col>
          <FormGroup as={Row} className="align-items-center">
            <FormLabel column sm={12} md={2}>
              {dateAndTimeTexts.pickupDate}
              :
            </FormLabel>
            <Col sm={6} md={4}>
              <FormControl type="date" size="sm" />
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange min={0} max={24} />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mt-3">
            <FormLabel column sm={12} md={2}>
              {dateAndTimeTexts.deliveryDate}
              :
            </FormLabel>
            <Col sm={6} md={4}>
              <FormControl type="date" size="sm" />
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange min={0} max={24} />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default DateTimeForm;
