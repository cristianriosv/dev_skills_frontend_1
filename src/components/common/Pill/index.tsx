import React, { FC } from 'react';
import { Badge } from 'react-bootstrap';
import styles from './pill.module.scss';

type TPill = {
  content: string | number,
  bg: string,
}

const Pill: FC<TPill> = ({ content, bg }) => (
  <div className={styles.pill}>
    <Badge bg={bg}>
      {content}
    </Badge>
  </div>
);

export default Pill;
