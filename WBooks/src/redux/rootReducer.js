import { combineReducers as CR } from 'redux';
import { wrapCombineReducers } from 'redux-recompose';

import { loginReducers } from './auth/reducer';
import reducer from './books/reducer';
import { searchReducer } from './search/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = navReducer =>
  combineReducers({
    auth: loginReducers,
    books: reducer,
    nav: navReducer,
    search: searchReducer
  });

export default rootReducer;
