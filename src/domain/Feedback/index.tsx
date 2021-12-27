import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { useAppContext } from '../../providers/AppProvider';

export type TFeedback = {
  title?: string,
  description?: string,
  canUserClose?: boolean,
  show?: boolean,
  type?: 'success' | 'danger',
}

const Feedback: FC = () => {
  const { feedback, setFeedback } = useAppContext();
  const {
    title, description, canUserClose, show, type,
  } = feedback;

  return (
    <Modal
      bg={type}
      onHide={canUserClose ? () => setFeedback({
        ...feedback,
        show: false,
        title: '',
        description: '',
        canUserClose: true,
      }) : null}
      show={show}
      centered
    >
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Body>
        {description}
      </Modal.Body>
    </Modal>
  );
};

export default Feedback;
