import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from 'features/App';
import { configureStore, runSagaMiddleWare } from './store';
import { applyGlobalStyles } from 'common/styles';

applyGlobalStyles();

const store = configureStore();

runSagaMiddleWare();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
