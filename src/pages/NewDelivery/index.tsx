import React, { FC, useState } from 'react';
import { Button, Icon } from '../../components/common';
import { Form } from '../../components/form';
import { Container, Row, Col } from '../../components/layout';
import { Map } from '../../domain';
import useFormValidation from '../../hooks/useFormValidation';
import { useAppContext } from '../../providers/AppProvider';
import generalTexts from '../../resources/constants/generalTexts';
import { newDeliverySchema, newDeliveryInitialData } from '../../resources/schemas/newDeliveryForm';
import DateTimeForm from './DateTimeForm';
import FreightForm from './FreightForm';
import RouteForm from './RouteForm';

const NewDelivery: FC = () => {
  const { appConfig: { windowHeight }, feedback, setFeedback } = useAppContext();
  const [submitting, setSubmitting] = useState(false);

  const {
    errors,
    values,
    resetForm,
    handleChange,
    handleSubmit,
  } = useFormValidation({
    schema: newDeliverySchema,
    initData: newDeliveryInitialData,
    submit: () => {
      setSubmitting(true);
      setTimeout(() => {
        setFeedback({
          ...feedback,
          show: true,
          title: generalTexts.newDelivery.success.title,
          description: generalTexts.newDelivery.success.description,
        });
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={7} xl={6} xxl={6}>
          <Row className="py-3">
            <Col sm={12}>
              <h3>{generalTexts.newDelivery.title}</h3>
              <p>{generalTexts.newDelivery.description}</p>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <RouteForm onChange={handleChange} errors={errors} values={values} />
              </Col>
            </Row>
            <Row>
              <Col>
                <FreightForm onChange={handleChange} errors={errors} values={values} />
              </Col>
            </Row>
            <Row>
              <Col>
                <DateTimeForm onChange={handleChange} errors={errors} values={values} />
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="d-flex justify-content-end">
                <Button type="button" variant="secondary" className="mx-1" onClick={() => resetForm()}>
                  {generalTexts.newDelivery.resetForm}
                </Button>
                <Button type="submit" disabled={submitting}>
                  <Icon icon="truck" color="light" height="20px" />
                  {' '}
                  {!submitting ? generalTexts.newDelivery.sendDelivery : generalTexts.loading}
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
