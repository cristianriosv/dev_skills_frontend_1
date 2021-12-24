import React from 'react';
import generalTexts from '../../resources/constants/generalTexts';
import styles from './topBar.module.scss';
import { Icon } from '../../components/common';

const TopBar = () => (
  <div className={styles.container}>
    <div className={styles.user}>
      {generalTexts.topBar.userData}
      <div className={styles.icon}>
        <Icon icon="user" width="100%" height="100%" />
      </div>
    </div>
  </div>
);

export default TopBar;
