import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './sideBar.module.scss';
import LogoBig from '../../assets/images/logoBig.svg';
import LogoSmall from '../../assets/images/logoSmall.svg';
import ButtonLink from './ButtonLink';
import sideBarLinks from '../../resources/constants/sideBarLinks';
import { Icon } from '../../components/common';
import { useAppContext } from '../../providers/AppProvider';
import ButtonToggle from './ButtonToggle';

const SideBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const { appConfig, setAppConfig } = useAppContext();
  const { toggleMenu, limitToggle } = appConfig;

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

  const handleClick = () => {
    if (window.innerWidth < limitToggle && toggleMenu) {
      setAppConfig({ ...appConfig, toggleMenu: false });
    }
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

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
          <Link to={link.path} key={link.id} onClick={handleClick}>
            <ButtonLink
              toggleMenu={toggleMenu}
              active={link.path === active}
              notifications={notifications(link.id)}
              icon={
                <Icon color="light" icon={link.icon} width="25px" />
              }
              label={link.label}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
