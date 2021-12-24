import React, { FC } from 'react';
import styles from './card.module.scss';

type TCard = {
  title: string
}

const Card: FC<TCard> = ({ title, children }) => (
  <div className={styles.container}>
    <div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
);

export default Card;
