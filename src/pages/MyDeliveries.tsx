import React, { FC } from 'react';
import { Icon, Table } from '../components/common';
import { Col, Container, Row } from '../components/layout';
import { useAppContext } from '../providers/AppProvider';
import generalTexts from '../resources/constants/generalTexts';

const MyDeliveries: FC = () => {
  const { freights } = useAppContext();
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Row className="py-3">
            <Col sm={12}>
              <h3>{generalTexts.myDeliveries.title}</h3>
              <p>{generalTexts.myDeliveries.description}</p>
            </Col>
            {freights.length <= 0
              ? (
                <Col sm="12" className="d-flex align-items-center justify-content-center">
                  <h5>{generalTexts.myDeliveries.empty}</h5>
                  <Icon icon="truck" color="dark" width="100px" />
                </Col>
              )
              : (
                <Col>
                  <Table size="sm" responsive="sm">
                    <thead>
                      <tr>
                        <th>{generalTexts.myDeliveries.table.id}</th>
                        <th>{generalTexts.myDeliveries.table.pickup}</th>
                        <th>{generalTexts.myDeliveries.table.delivery}</th>
                        <th>{generalTexts.myDeliveries.table.type}</th>
                        <th>{generalTexts.myDeliveries.table.details}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {freights.map((delivery) => (
                        <tr key={`${delivery.id}`}>
                          <td>{delivery.id}</td>
                          <td>
                            <p>{`${delivery.pickupDate} ${delivery.pickupHourFrom}hs - ${delivery.pickupHourTo}hs`}</p>
                            <p>{`${delivery.pickupAddress} ${delivery.pickupCountry}`}</p>
                          </td>
                          <td>
                            <p>{`${delivery.deliveryDate} ${delivery.deliveryHourFrom}hs - ${delivery.deliveryHourTo}hs`}</p>
                            <p>{`${delivery.deliveryAddress} ${delivery.deliveryCountry}`}</p>
                          </td>
                          <td>
                            <p>{`${delivery.freightGood} x ${delivery.freightQuantity}`}</p>
                            <p>{`Pallets: ${delivery.freightType}`}</p>
                          </td>
                          <td>
                            <p>{`Vol (cm3): ${delivery.freightDepth}x${delivery.freightHeight}x${delivery.freightWidth}`}</p>
                            <p>{`Weight (kg): ${delivery.freightWeight}`}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDeliveries;
