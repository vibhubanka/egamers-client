import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { Global } from '@emotion/core';
import globalStyles from 'utils/styles/global';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Global styles={globalStyles} />

      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
