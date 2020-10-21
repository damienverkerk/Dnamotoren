import {createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "../actions";
import rootReducer from "../reducers";

const demoState = {
    occasions: [
        {
        id: '123abcdefghiklmn',
        title: 'harleydavidson1',
        description: 'Origin thrust Robert Langdon into the danger',
        brand: 'harley',
        manufacture_date: 2008
        }
    ],

    filters: {
        text: '',
        sortBy: '',
        startYear: undefined,
        endYear: undefined
    }
};

export default function configureStore(persistedState) {
    const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware));
    store.dispatch(verifyAuth());
    return store;
}; 

