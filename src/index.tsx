import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import AppProvider from './providers/AppProvider';

ReactDom.render(
  <AppProvider><App /></AppProvider>,
  document.getElementById('app'),
);
