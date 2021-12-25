import React from 'react';
import styles from './sideBar.module.scss';
import LogoBig from '../../assets/images/logoBig.svg';
import LogoSmall from '../../assets/images/logoSmall.svg';
import ButtonLink from './ButtonLink';
import sideBarLinks from '../../resources/constants/sideBarLinks';
import { Icon } from '../../components/common';
import { useAppContext } from '../../providers/AppProvider';
import ButtonToggle from './ButtonToggle';

const SideBar = () => {
  const active = 'newDelivery';
  const { appConfig, setAppConfig } = useAppContext();
  const { toggleMenu } = appConfig;

  const changeToggleMenu = () => {
    setAppConfig({ ...appConfig, toggleMenu: !toggleMenu });
  };

  const notifications = (id : string) : number => {
    switch (id) {
      case 'myDeliveries': return 2;
      case 'history': return 5;
      default: return null;
    }
  };

  return (
    <div className={`${styles.container} ${toggleMenu && styles.toggle}`}>
      <div className={styles.logoContainer}>
        {toggleMenu
          ? <LogoBig className={styles.logoBig} />
          : <LogoSmall className={styles.logoSmall} />}
      </div>
      <ButtonToggle onClick={changeToggleMenu} toggleMenu={toggleMenu} />
      <div>
        {sideBarLinks.map((link) => (
          <ButtonLink
            toggleMenu={toggleMenu}
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
