import { combineReducers } from 'redux';

import { loginReducers } from './auth/reducer';
import { booksReducer } from './books/reducer';

const rootReducer = navReducer =>
  combineReducers({
    auth: loginReducers,
    books: booksReducer,
    nav: navReducer
  });

export default rootReducer;
