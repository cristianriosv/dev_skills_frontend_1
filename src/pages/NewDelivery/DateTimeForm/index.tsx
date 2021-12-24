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
          <FormGroup as={Row}>
            <FormLabel column md={2}>
              {dateAndTimeTexts.pickupDate}
              :
            </FormLabel>
            <Col sm={4} md={4}>
              <FormControl type="date" size="sm" />
            </Col>
            <Col sm={4} md={6}>
              <FormDoubleRange />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default DateTimeForm;
