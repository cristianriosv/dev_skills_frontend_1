import React, { FC } from 'react';
import { Icon } from '../components/common';
import { Col, Container, Row } from '../components/layout';
import generalTexts from '../resources/constants/generalTexts';

const History: FC = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <Row className="py-3">
          <Col sm={12}>
            <h3>{generalTexts.history.title}</h3>
            <p>{generalTexts.history.description}</p>
          </Col>
          <Col sm="12" className="d-flex align-items-center justify-content-center">
            <h5>{generalTexts.myDeliveries.empty}</h5>
            <Icon icon="history" color="dark" width="80px" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default History;
