import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from '../reducers';
import initialState from './state';

export default createStore(reducer, initialState, applyMiddleware(logger, thunk, promise))