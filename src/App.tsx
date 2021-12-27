import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import config from './resources/constants/config';
import {
  Feedback, MasterLayout, SideBar, TopBar,
} from './domain';
import { MyDeliveries, NewDelivery, History } from './pages';
import './styles/global.scss';

const App = () => (
  <HashRouter basename={config.basePath}>
    <Feedback />
    <MasterLayout sideBar={<SideBar />} topBar={<TopBar />}>
      <Routes>
        <Route path="/" element={<NewDelivery />} />
        <Route path="/my-deliveries" element={<MyDeliveries />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </MasterLayout>
  </HashRouter>
);

export default App;
