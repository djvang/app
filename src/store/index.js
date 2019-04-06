import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import api from '../middleware/api';
import reducer from '../reducers';
import initialState from './state';

export default createStore(reducer, initialState, applyMiddleware(thunk, promise, api("https://jsonplaceholder.typicode.com"), logger))