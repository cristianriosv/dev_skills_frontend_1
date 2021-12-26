import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormFeedback,
  FormGroup,
  FormLabel,
  FormSelect,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

type TRouteForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  errors: Partial<Record<string, string>>,
  values: Partial<Record<string, string | number>>,
};
const RouteForm: FC<TRouteForm> = ({ onChange, errors, values }) => {
  const { newDelivery: { route: routeTexts } } = generalTexts;
  return (
    <Card title={routeTexts.title}>
      <FormGroup as={Row}>
        <FormLabel column sm={12} md={2}>
          {routeTexts.pickup}
          :
        </FormLabel>
        <Col sm={5} md={4}>
          <FormSelect
            name="pickupCountry"
            size="sm"
            onChange={onChange}
            isInvalid={!!errors.pickupCountry}
            value={values.pickupCountry}
          >
            <option value="">{routeTexts.countryPlaceholder}</option>
            <option value="NL">Netherlands (NL)</option>
          </FormSelect>
          <FormFeedback type="invalid">{errors.pickupCountry}</FormFeedback>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="pickupAddress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
            isInvalid={!!errors.pickupAddress}
            value={values.pickupAddress}
          />
          <FormFeedback type="invalid">{errors.pickupAddress}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup as={Row}>
        <FormLabel column sm={12} md={2}>
          {routeTexts.delivery}
          :
        </FormLabel>
        <Col sm={5} md={4}>
          <FormSelect
            name="deliveryCountry"
            size="sm"
            onChange={onChange}
            isInvalid={!!errors.deliveryCountry}
            value={values.deliveryCountry}
          >
            <option>{routeTexts.countryPlaceholder}</option>
            <option>Netherlands (NL)</option>
          </FormSelect>
          <FormFeedback type="invalid">{errors.deliveryCountry}</FormFeedback>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="deliveryAddress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
            isInvalid={!!errors.deliveryAddress}
            value={values.deliveryAddress}
          />
          <FormFeedback type="invalid">{errors.deliveryAddress}</FormFeedback>
        </Col>
      </FormGroup>
    </Card>
  );
};

export default RouteForm;
