import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

type TRouteForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
}
const RouteForm: FC<TRouteForm> = ({ onChange }) => {
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
            name="pickCountry"
            size="sm"
            onChange={onChange}
          >
            <option>{routeTexts.countryPlaceholder}</option>
            <option value="NL">Netherlands (NL)</option>
          </FormSelect>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="pickAdress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
          />
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
          >
            <option>{routeTexts.countryPlaceholder}</option>
            <option>Netherlands (NL)</option>
          </FormSelect>
        </Col>
        <Col sm={7} md={6}>
          <FormControl
            name="deliveryAddress"
            size="sm"
            placeholder={routeTexts.addressPlaceholder}
            onChange={onChange}
          />
        </Col>
      </FormGroup>
    </Card>
  );
};

export default RouteForm;
