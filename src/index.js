import React from 'react';
import ReactDOM from 'react-dom';
require("babel-polyfill");

import "./css/styles.css";
import Root from "./root";

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);