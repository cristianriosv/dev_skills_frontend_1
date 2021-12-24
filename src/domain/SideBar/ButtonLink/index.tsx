import React, { FC, ReactNode } from 'react';
import { Pill } from '../../../components/common';
import styles from './buttonLink.module.scss';

export type TLink = {
  icon: ReactNode,
  label: string,
  notifications?: number,
  active?: boolean
};

const Link: FC<TLink> = ({
  icon,
  label, notifications,
  active = false,
}) => (
  <div className={`${styles.container} ${active && styles.active}`}>
    <div className={styles.iconText}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      {label}
    </div>
    {notifications && (
      <Pill content={notifications} bg="info" />
    )}
  </div>
);

export default Link;
