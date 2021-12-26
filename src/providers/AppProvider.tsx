import React, {
  FC, createContext, useState, useMemo, useContext,
} from 'react';

type TAppConfig = {
  toggleMenu: boolean,
  windowHeight: number,
};

type TAppContext = {
  appConfig: TAppConfig,
  setAppConfig: React.Dispatch<React.SetStateAction<TAppConfig>>,
};

const AppContext = createContext<TAppContext>({
  appConfig: {
    toggleMenu: true,
    windowHeight: 0,
  },
  setAppConfig: () => {},
});

const AppProvider: FC = ({ children }) => {
  const [appConfig, setAppConfig] = useState({
    toggleMenu: true,
    windowHeight: window.innerHeight,
  });
  const config: TAppContext = useMemo<TAppContext>(
    () => ({ appConfig, setAppConfig }),
    [appConfig],
  );

  return (
    <AppContext.Provider value={config}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
