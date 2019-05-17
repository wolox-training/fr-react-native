import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reactotron from '../../ReactotronConfig';

import rootReducer from './rootReducer';

const enhancers = [];
enhancers.push(applyMiddleware(thunk));
enhancers.push(reactotron.createEnhancer());
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, compose(...enhancers));
}
