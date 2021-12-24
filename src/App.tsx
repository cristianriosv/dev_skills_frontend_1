import React from 'react';
import { MasterLayout } from './components/layout';
import { SideBar, TopBar } from './domain';
import { NewDelivery } from './pages';
import './styles/global.scss';

const App = () => (
  <MasterLayout sideBar={<SideBar />} topBar={<TopBar />}>
    <NewDelivery />
  </MasterLayout>
);

export default App;
