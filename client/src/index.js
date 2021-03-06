/* eslint-disable react/jsx-filename-extension */
import 'rxjs';

import React from 'react';
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';

import './index.css';

import rootReducer from './reducer.root';
import rootEpic from './epic.root';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// store initial state, mostly splitted to combined reducers initial states
const initialState = {};
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

addLocaleData([...locale_en, ...locale_es]);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

export default store;
