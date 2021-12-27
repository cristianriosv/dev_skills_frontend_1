import React, {
  FC, createContext, useState, useMemo, useContext,
} from 'react';
import { TFeedback } from '../domain/Feedback';

type TAppConfig = {
  toggleMenu: boolean,
  windowHeight: number,
  limitToggle: number,
};

type TAppContext = {
  appConfig: TAppConfig,
  setAppConfig: React.Dispatch<React.SetStateAction<TAppConfig>>,
  feedback: TFeedback,
  setFeedback: React.Dispatch<React.SetStateAction<TFeedback>>,
};

const AppContext = createContext<TAppContext>({
  appConfig: {
    toggleMenu: true,
    windowHeight: 0,
    limitToggle: 763,
  },
  setAppConfig: () => {},
  feedback: {},
  setFeedback: () => {},
});

const AppProvider: FC = ({ children }) => {
  const [appConfig, setAppConfig] = useState({
    toggleMenu: true,
    windowHeight: window.innerHeight,
    limitToggle: 763,
  });
  const [feedback, setFeedback] = useState<TFeedback>({
    show: false,
    title: '',
    description: '',
    canUserClose: true,
  });
  const config: TAppContext = useMemo<TAppContext>(
    () => ({
      appConfig, setAppConfig, feedback, setFeedback,
    }),
    [appConfig, feedback],
  );

  return (
    <AppContext.Provider value={config}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
