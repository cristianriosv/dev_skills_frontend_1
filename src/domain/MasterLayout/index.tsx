import React, {
  FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { useAppContext } from '../../providers/AppProvider';
import styles from './masterLayout.module.scss';

type TMasterLayout = {
  sideBar: ReactNode,
  topBar: ReactNode
}

const MasterLayout: FC<TMasterLayout> = ({ sideBar, topBar, children }) => {
  const [prevWidth, setPrevWidth] = useState(1024);
  const { appConfig, setAppConfig } = useAppContext();
  const { toggleMenu, windowHeight, limitToggle } = appConfig;

  const handleWindowResize = useCallback(() => {
    let newConfig = {};
    if (window.innerWidth - prevWidth < 0 && window.innerWidth <= limitToggle && toggleMenu) {
      newConfig = { ...newConfig, toggleMenu: false };
    }
    if (window.innerWidth - prevWidth > 0 && window.innerWidth > limitToggle && !toggleMenu) {
      newConfig = { ...newConfig, toggleMenu: true };
    }
    if (window.innerHeight !== windowHeight) {
      newConfig = { ...newConfig, windowHeight: window.innerHeight };
    }
    if (Object.keys(newConfig).length) {
      setAppConfig({ ...appConfig, ...newConfig });
    }
    setPrevWidth(window.innerWidth);
  }, [toggleMenu, setAppConfig, prevWidth, setPrevWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <div className={styles.content}>
      {sideBar}
      <div className={`${styles.mainContent} ${toggleMenu && styles.toggleMenu}`}>
        {topBar}
        {children}
      </div>
    </div>
  );
};

export default MasterLayout;
