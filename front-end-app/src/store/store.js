import { createStore, applyMiddleware } from "redux";

import categoryReducer from '../reducers/categories-reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default () => {
    return createStore(categoryReducer, applyMiddleware(thunk, logger));
};