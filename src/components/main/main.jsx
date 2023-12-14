import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../routes/App';

import { Provider } from 'react-redux';
import store from '../../pages/redux/store';

const root = document.getElementById('root');

const appRoot = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(appRoot);
} else {
  console.error("Element with id 'root' not found.");
}
