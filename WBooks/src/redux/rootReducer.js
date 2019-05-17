import { combineReducers } from 'redux';

import { loginReducers } from './login/reducer';

const rootReducer = combineReducers({
  ...loginReducers
});

export default rootReducer;
