import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reactotron from '../../ReactotronConfig';

import rootReducer from './rootReducer';

const enhancers = [];
enhancers.push(reactotron.createEnhancer());

export default function configureStore(initialState, navReducer, middlewareNav) {
  enhancers.push(applyMiddleware(thunk, middlewareNav));
  return createStore(rootReducer(navReducer), initialState, compose(...enhancers));
}
