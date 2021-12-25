import React from 'react';
import { MasterLayout, SideBar, TopBar } from './domain';
import { NewDelivery } from './pages';
import AppProvider from './providers/AppProvider';
import './styles/global.scss';

const App = () => (
  <AppProvider>
    <MasterLayout sideBar={<SideBar />} topBar={<TopBar />}>
      <NewDelivery />
    </MasterLayout>
  </AppProvider>
);

export default App;
