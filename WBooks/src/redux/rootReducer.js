import { combineReducers as CR } from 'redux';
import { wrapCombineReducers } from 'redux-recompose';

import { loginReducers } from './auth/reducer';
import reducer from './books/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = navReducer =>
  combineReducers({
    auth: loginReducers,
    books: reducer,
    nav: navReducer
  });

export default rootReducer;
