import { combineReducers } from 'redux';

import { itemsHasErrored, itemsIsLoading, loginAuthSuccess } from './login/reducer';

const rootReducer = combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  loginAuthSuccess
});

export default rootReducer;
