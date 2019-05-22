import { combineReducers } from 'redux';

import { loginReducers } from './auth/reducer';
import { booksReducer } from './books/reducer';

const rootReducer = navReducer =>
  combineReducers({
    nav: navReducer,
    auth: loginReducers,
    books: booksReducer
  });

export default rootReducer;
