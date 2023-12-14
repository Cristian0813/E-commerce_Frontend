import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import Navbar from '../../../components/navbar/navbar';

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById('root')
);

