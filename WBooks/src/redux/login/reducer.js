import { LOGIN_TYPES } from './constants/loginTypes';

function loginHasErrored(state = false, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
function loginIsLoading(state = false, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
function loginAuthSuccessData(state = {}, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_AUTH_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

export const loginReducers = {
  loginHasErrored,
  loginIsLoading,
  loginAuthSuccessData
};
