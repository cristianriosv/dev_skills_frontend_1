import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormDoubleRange,
  FormGroup,
  FormLabel,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

type TDateTimeForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const DateTimeForm: FC<TDateTimeForm> = ({ onChange }) => {
  const { newDelivery: { dateAndTime: dateAndTimeTexts } } = generalTexts;

  // const handleChangeHours = (min: number, max: number) => {
  //   // eslint-disable-next-line no-console
  //   console.log(min, max);
  //   // onChange();
  // };

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
              <FormControl
                name="pickupDate"
                type="date"
                size="sm"
                onChange={onChange}
              />
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange min={0} max={24} name="pickupHour" onChange={onChange} />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mt-3">
            <FormLabel column sm={12} md={2}>
              {dateAndTimeTexts.deliveryDate}
              :
            </FormLabel>
            <Col sm={6} md={4}>
              <FormControl
                name="deliveryDate"
                type="date"
                size="sm"
                onChange={onChange}
              />
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange min={0} max={24} name="deliveryHour" onChange={onChange} />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default DateTimeForm;
