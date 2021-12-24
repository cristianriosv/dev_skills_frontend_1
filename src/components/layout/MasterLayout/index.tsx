import React, { FC, ReactNode } from 'react';
import styles from './masterLayout.module.scss';

type TMasterLayout = {
  sideBar: ReactNode,
  topBar: ReactNode
}

const MasterLayout: FC<TMasterLayout> = ({ sideBar, topBar, children }) => (
  <div className={styles.container}>
    {sideBar}
    <div className={styles.mainContent}>
      {topBar}
      {children}
    </div>
  </div>
);

export default MasterLayout;
