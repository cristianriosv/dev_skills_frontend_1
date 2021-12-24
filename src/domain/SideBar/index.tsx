import React from 'react';
import styles from './sideBar.module.scss';
import LogoBig from '../../assets/images/logoBig.svg';
import ButtonLink from './ButtonLink';
import sideBarLinks from '../../resources/constants/sideBarLinks';
import { Icon } from '../../components/common';

const SideBar = () => {
  const active = 'newDelivery';

  const notifications = (id : string) : number => {
    switch (id) {
      case 'myDeliveries': return 2;
      case 'history': return 5;
      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoBig className={styles.logoBig} />
      </div>
      <div>
        {sideBarLinks.map((link) => (
          <ButtonLink
            active={link.id === active}
            notifications={notifications(link.id)}
            key={link.id}
            icon={
              <Icon color="light" icon={link.icon} width="25px" />
            }
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
