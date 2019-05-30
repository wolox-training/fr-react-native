import { combineReducers as CR } from 'redux';
import { wrapCombineReducers } from 'redux-recompose';

import { loginReducers } from './auth/reducer';
import { searchReducer } from './search/reducer';
import { booksReducer } from './books/reducer';
import { wishlistReducer } from './wishlist/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = navReducer =>
  combineReducers({
    auth: loginReducers,
    books: booksReducer,
    nav: navReducer,
    search: searchReducer,
    wishlist: wishlistReducer
  });

export default rootReducer;
