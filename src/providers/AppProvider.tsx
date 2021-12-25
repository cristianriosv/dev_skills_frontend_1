import React, {
  FC, createContext, useState, useMemo, useContext,
} from 'react';

type TAppConfig = {
  toggleMenu: boolean,
};

type TAppContext = {
  appConfig: TAppConfig,
  setAppConfig: React.Dispatch<React.SetStateAction<TAppConfig>>,
};

const AppContext = createContext<TAppContext>({
  appConfig: {
    toggleMenu: true,
  },
  setAppConfig: () => {},
});

const AppProvider: FC = ({ children }) => {
  const [appConfig, setAppConfig] = useState({
    toggleMenu: true,
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
