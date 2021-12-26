import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormDoubleRange,
  FormFeedback,
  FormGroup,
  FormLabel,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

type TDateTimeForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  errors: Partial<Record<string, string>>,
  values: Partial<Record<string, string | number>>,
}

const DateTimeForm: FC<TDateTimeForm> = ({ onChange, errors, values }) => {
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
                isInvalid={!!errors.pickupDate}
                value={values.pickupDate}
              />
              <FormFeedback type="invalid">{errors.pickupDate}</FormFeedback>
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange
                min={6}
                max={23}
                currentMin={Number.parseFloat(values.pickupHourFrom.toString())}
                currentMax={Number.parseFloat(values.pickupHourTo.toString())}
                minTag={`${values.pickupHourFrom}hs`}
                maxTag={`${values.pickupHourTo}hs`}
                name="pickupHour"
                onChange={onChange}
              />
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
                isInvalid={!!errors.deliveryDate}
                value={values.deliveryDate}
              />
              <FormFeedback type="invalid">{errors.deliveryDate}</FormFeedback>
            </Col>
            <Col sm={6} md={6}>
              <FormDoubleRange
                min={6}
                max={23}
                currentMin={Number.parseFloat(values.deliveryHourFrom.toString())}
                currentMax={Number.parseFloat(values.deliveryHourTo.toString())}
                minTag={`${values.deliveryHourFrom}hs`}
                maxTag={`${values.deliveryHourTo}hs`}
                name="deliveryHour"
                onChange={onChange}
              />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default DateTimeForm;
