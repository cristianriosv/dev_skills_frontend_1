import React, { FC, useState } from 'react';
import { Card } from '../../../components/common';
import {
  FormControlAppends,
  // FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  RadioSelector,
} from '../../../components/form';
import { Row, Col } from '../../../components/layout';
import generalTexts from '../../../resources/constants/generalTexts';
import typesOfGoods from '../../../resources/constants/typeOfGoods';

type TFreightForm = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
}

const FreightForm: FC<TFreightForm> = ({ onChange }) => {
  const [good, setGood] = useState(typesOfGoods[0].id);
  const { newDelivery: { freightDetails: freightTexts } } = generalTexts;

  const handleSelectGood: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e);
    setGood(e.target.value);
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
                selected={good}
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
              <FormSelect
                name="freightType"
                size="sm"
                onChange={onChange}
              >
                <option>Pallet</option>
              </FormSelect>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <FormControlAppends
                name="freightQuantity"
                placeholder="0"
                type="number"
                preText="x"
                size="sm"
                onChange={onChange}
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
              <FormControlAppends
                name="freightWeight"
                placeholder="0"
                type="number"
                size="sm"
                postText="kg"
                onChange={onChange}
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
              <FormControlAppends
                name="freightHeight"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
              />
            </Col>
            <Col xs={4} sm={4} md={4}>
              <FormControlAppends
                name="freightWidth"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
              />
            </Col>
            <Col xs={4} sm={4} md={4}>
              <FormControlAppends
                name="freightDepth"
                placeholder="0"
                type="number"
                size="sm"
                postText="cm"
                onChange={onChange}
              />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default FreightForm;
