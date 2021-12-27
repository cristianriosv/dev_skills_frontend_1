import React, { FC, ReactNode } from 'react';
import { Pill } from '../../../components/common';
import styles from './buttonLink.module.scss';

export type TLink = {
  icon: ReactNode,
  label: string,
  notifications?: number,
  active?: boolean,
  toggleMenu: boolean,
};

const Link: FC<TLink> = ({
  icon,
  label, notifications,
  active = false,
  toggleMenu,
}) => (
  <div className={`${styles.container} ${active && styles.active}`}>
    <div className={styles.iconText}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      {toggleMenu && label}
    </div>
    {toggleMenu && notifications > 0 && (
      <Pill content={notifications} bg="info" />
    )}
  </div>
);

export default Link;
