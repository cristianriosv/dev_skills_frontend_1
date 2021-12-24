import React, { useState } from 'react';
import { Card } from '../../../components/common';
import {
  FormControlAppends,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  RadioSelector,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';
import typesOfGoods from '../../../resources/constants/typeOfGoods';

const FreightForm = () => {
  const [good, setGood] = useState(typesOfGoods[0].id);
  const { newDelivery: { freightDetails: freightTexts } } = generalTexts;

  const handleSelectGood: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setGood(e.target.value);
  };

  return (
    <Card title={freightTexts.title}>
      <Row>
        <Col md={6}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.typeOfGoods}
              :
            </FormLabel>
            <Col sm={7}>
              <RadioSelector
                options={typesOfGoods}
                selected={good}
                onChange={handleSelectGood}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.quantity}
              :
            </FormLabel>
            <Col sm={4} md={6}>
              <FormSelect size="sm">
                <option>Pallet</option>
              </FormSelect>
            </Col>
            <Col md={1}>
              x
            </Col>
            <Col sm={4} md={5}>
              <FormControl size="sm" value={1} />
            </Col>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.weight}
              :
            </FormLabel>
            <Col sm={4} md={12}>
              <FormControlAppends size="sm" postText="kg" value="1" />
            </Col>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup as={Row}>
            <FormLabel column sm={12}>
              {freightTexts.volume}
              :
            </FormLabel>
            <Col sm={4} md={4}>
              <FormControlAppends size="sm" postText="cm" value={1} />
            </Col>
            <Col sm={4} md={4}>
              <FormControlAppends size="sm" postText="cm" value={1} />
            </Col>
            <Col sm={4} md={4}>
              <FormControlAppends size="sm" postText="cm" value={1} />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default FreightForm;
