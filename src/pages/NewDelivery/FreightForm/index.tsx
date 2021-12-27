import React, { FC } from 'react';
import { Card } from '../../../components/common';
import {
  FormGroup,
  FormLabel,
  FormControl,
  RadioSelector,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';
import typesOfGoods from '../../../resources/constants/typeOfGoods';
import pallets from '../../../resources/data/pallets';

type TFreightForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
  errors: Partial<Record<string, string>>,
  values: Partial<Record<string, string | number>>,
}

const FreightForm: FC<TFreightForm> = ({ onChange, errors, values }) => {
  const { newDelivery: { freightDetails: freightTexts } } = generalTexts;

  const handleSelectGood: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e);
  };

  return (
    <Card title={freightTexts.title}>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <FormGroup as={Row}>
            <FormLabel column sm={12} md={12}>
              {freightTexts.typeOfGoods}
              :
            </FormLabel>
            <Col sm={7} md={6}>
              <RadioSelector
                name="freightGood"
                options={typesOfGoods}
                selected={values.freightGood.toString()}
                onChange={handleSelectGood}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.quantity}
              :
            </FormLabel>
            <Col xs={6} sm={6} md={6}>
              <FormControl
                name="freightType"
                aria-label="freightType"
                as="select"
                size="sm"
                onChange={onChange}
                isInvalid={!!errors.freightType}
                value={values.freightType}
                error={errors.freightType}
              >
                {pallets.map((pallet) => (
                  <option key={pallet.id} value={pallet.id}>{pallet.label}</option>
                ))}
              </FormControl>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <FormControl
                name="freightQuantity"
                aria-label="freightQuantity"
                placeholder="0"
                type="number"
                preText="x"
                size="sm"
                onChange={onChange}
                value={values.freightQuantity}
                isInvalid={!!errors.freightQuantity}
                error={errors.freightQuantity}
              />
            </Col>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.weight}
              :
            </FormLabel>
            <Col sm={4} md={12}>
              <FormControl
                name="freightWeight"
                aria-label="freightWeight"
                placeholder="0"
                type="number"
                size="sm"
                postText="kg"
                onChange={onChange}
                value={values.freightWeight}
                isInvalid={!!errors.freightWeight}
                error={errors.freightWeight}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col sm={12} md={8} lg={9}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.volume}
              :
            </FormLabel>
            <Col xs={4} sm={4} md={4}>
              <FormControl
                name="freightHeight"
                aria-label="freightHeight"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
                value={values.freightHeight}
                isInvalid={!!errors.freightHeight}
                error={errors.freightHeight}
              />
            </Col>
            <Col xs={4} sm={4} md={4}>
              <FormControl
                name="freightWidth"
                aria-label="freightWidth"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
                value={values.freightWidth}
                isInvalid={!!errors.freightWidth}
                error={errors.freightWidth}
              />
            </Col>
            <Col xs={4} sm={4} md={4}>
              <FormControl
                name="freightDepth"
                aria-label="freightDepth"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
                value={values.freightDepth}
                isInvalid={!!errors.freightDepth}
                error={errors.freightDepth}
              />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default FreightForm;
