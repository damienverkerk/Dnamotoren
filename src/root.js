import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import getAppStore from './js/store/store';
import { addOccasion, getOccasions} from './js/actions/occasions';

const store = getAppStore();
const template =  
    (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );

store.dispatch(getOccasions()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});