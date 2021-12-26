import React, { FC, useState } from 'react';
import { Button, Icon } from '../../components/common';
import { Form } from '../../components/form';
import { Container, Row, Col } from '../../components/layout';
import { Map } from '../../domain';
import { useAppContext } from '../../providers/AppProvider';
import generalTexts from '../../resources/constants/generalTexts';
import DateTimeForm from './DateTimeForm';
import FreightForm from './FreightForm';
import RouteForm from './RouteForm';

const NewDelivery: FC = () => {
  const { appConfig: { windowHeight } } = useAppContext();
  const [values, setValues] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={7} xl={6} xxl={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <RouteForm onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <FreightForm onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <DateTimeForm onChange={handleChange} />
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="d-flex justify-content-end">
                <Button type="button" variant="secondary" className="mx-1">
                  {generalTexts.newDelivery.resetForm}
                </Button>
                <Button type="submit">
                  <Icon icon="truck" color="light" height="20px" />
                  {' '}
                  {generalTexts.newDelivery.sendDelivery}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <Map
            height={windowHeight}
            defaultCenter={[52.343, 4.7942]}
            anchor={[52.343, 4.7942]}
            defaultZoom={7}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewDelivery;
