import React from 'react';
import { Card } from '../../../components/common';
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';

const RouteForm = () => {
  const { newDelivery: { route: routeTexts } } = generalTexts;
  return (
    <Card title={routeTexts.title}>
      <FormGroup as={Row}>
        <FormLabel column sm={12} md={2}>
          {routeTexts.pickup}
          :
        </FormLabel>
        <Col sm={5} md={4}>
          <FormSelect size="sm">
            <option>{routeTexts.countryPlaceholder}</option>
            <option>Netherlands (NL)</option>
          </FormSelect>
        </Col>
        <Col sm={7} md={6}>
          <FormControl size="sm" placeholder={routeTexts.addressPlaceholder} />
        </Col>
      </FormGroup>
      <FormGroup as={Row}>
        <FormLabel column sm={12} md={2}>
          {routeTexts.delivery}
          :
        </FormLabel>
        <Col sm={5} md={4}>
          <FormSelect size="sm">
            <option>{routeTexts.countryPlaceholder}</option>
            <option>Netherlands (NL)</option>
          </FormSelect>
        </Col>
        <Col sm={7} md={6}>
          <FormControl size="sm" placeholder={routeTexts.addressPlaceholder} />
        </Col>
      </FormGroup>
    </Card>
  );
};

export default RouteForm;
