import React from "react";
import ReactDom from 'react-dom';
import Router from './js/components/Router';

import getAppStore from './js/store/store';
import {getOccasions} from './js/actions/occasions';
import { Provider } from 'react-redux';

import "./css/styles.css";

const store = getAppStore();

const template = (
  <Provider store={store}>
    <Router />
  </Provider>
);

store.dispatch(getOccasions()).then(() => {
  ReactDom.render(template, document.getElementById('root'));
});


