import React, { FC } from 'react';
import { Container, Row, Col } from '../../components/layout';
import DateTimeForm from './DateTimeForm';
import FreightForm from './FreightForm';
import RouteForm from './RouteForm';

const NewDelivery: FC = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={12} lg={9} xl={7} xxl={6}>
        <Row>
          <Col>
            <RouteForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <FreightForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <DateTimeForm />
          </Col>
        </Row>
      </Col>
      <Col>
        Map
      </Col>
    </Row>
  </Container>
);

export default NewDelivery;
