import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormGroup,
  FormLabel,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';
import countries from '../../../resources/data/countries';

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
          <FormControl
            name="pickupCountry"
            aria-label="pickupCountry"
            size="sm"
            onChange={onChange}
            isInvalid={!!errors.pickupCountry}
            value={values.pickupCountry}
            as="select"
            error={errors.pickupCountry}
          >
            <option value="">{routeTexts.countryPlaceholder}</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>{`${country.label} (${country.id})`}</option>
            ))}
          </FormControl>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="pickupAddress"
            aria-label="pickupAddress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
            isInvalid={!!errors.pickupAddress}
            error={errors.pickupAddress}
            value={values.pickupAddress}
          />
        </Col>
      </FormGroup>
      <FormGroup as={Row}>
        <FormLabel column sm={12} md={2}>
          {routeTexts.delivery}
          :
        </FormLabel>
        <Col sm={5} md={4}>
          <FormControl
            name="deliveryCountry"
            aria-label="deliveryCountry"
            as="select"
            size="sm"
            onChange={onChange}
            isInvalid={!!errors.deliveryCountry}
            value={values.deliveryCountry}
            error={errors.deliveryCountry}
          >
            <option>{routeTexts.countryPlaceholder}</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>{`${country.label} (${country.id})`}</option>
            ))}
          </FormControl>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="deliveryAddress"
            aria-label="deliveryAddress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
            isInvalid={!!errors.deliveryAddress}
            value={values.deliveryAddress}
            error={errors.deliveryAddress}
          />
        </Col>
      </FormGroup>
    </Card>
  );
};

export default RouteForm;
