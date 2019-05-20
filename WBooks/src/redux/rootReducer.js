import { combineReducers } from 'redux';

import { loginReducers } from './login/reducer';

const rootReducer = combineReducers({
  auth: loginReducers
});

export default rootReducer;
