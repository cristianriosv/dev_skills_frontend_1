import React, { FC } from 'react';
import { Col, Container, Row } from '../components/layout';
import { Map } from '../domain';
import { useAppContext } from '../providers/AppProvider';
import generalTexts from '../resources/constants/generalTexts';

const MyDeliveries: FC = () => {
  const { appConfig: { windowHeight } } = useAppContext();
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={7} xl={6} xxl={6}>
          <Row className="py-3">
            <Col sm={12}>
              <h3>{generalTexts.myDeliveries.title}</h3>
              <p>{generalTexts.myDeliveries.description}</p>
            </Col>
          </Row>
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

export default MyDeliveries;
