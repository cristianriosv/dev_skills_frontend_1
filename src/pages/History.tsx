import React, { FC } from 'react';
import { Col, Container, Row } from '../components/layout';
// import { useAppContext } from '../providers/AppProvider';
import generalTexts from '../resources/constants/generalTexts';

const History: FC = () => (
  <Container fluid>
    <Row>
      <Col sm={12}>
        <Row className="py-3">
          <Col sm={12}>
            <h3>{generalTexts.history.title}</h3>
            <p>{generalTexts.history.description}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default History;
