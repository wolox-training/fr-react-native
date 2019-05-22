import { combineReducers } from 'redux';

import { loginReducers } from './auth/reducer';
import { booksReducer } from './books/reducer';

const rootReducer = combineReducers({
  auth: loginReducers,
  books: booksReducer
});

export default rootReducer;
