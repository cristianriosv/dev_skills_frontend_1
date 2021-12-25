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
  const [prevWidth, setPrevWidth] = useState(0);
  const { appConfig, setAppConfig } = useAppContext();
  const { toggleMenu } = appConfig;

  const handleWindowResize = useCallback(() => {
    if (Math.abs(window.innerWidth - prevWidth) > 40 && window.innerWidth < 763 && toggleMenu) {
      setPrevWidth(window.innerWidth);
      setAppConfig({ ...appConfig, toggleMenu: false });
    }
    if (Math.abs(window.innerWidth - prevWidth) > 40 && window.innerWidth > 763 && !toggleMenu) {
      setPrevWidth(window.innerWidth);
      setAppConfig({ ...appConfig, toggleMenu: true });
    }
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
