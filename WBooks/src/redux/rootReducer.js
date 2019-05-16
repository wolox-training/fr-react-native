import { combineReducers } from 'redux';

import { loginHasErrored, loginIsLoading, loginAuthSuccess } from './login/reducer';

const rootReducer = combineReducers({
  loginHasErrored,
  loginIsLoading,
  loginAuthSuccess
});

export default rootReducer;
