import { loginAppp } from '@services/login';

import { LOGIN_TYPES } from './constants/loginTypes';

export function loginHasErrored(bool) {
  return {
    type: LOGIN_TYPES.LOGIN_HAS_ERRORED,
    hasErrored: bool
  };
}
export function loginIsLoading(bool) {
  return {
    type: LOGIN_TYPES.LOGIN_IS_LOADING,
    isLoading: bool
  };
}
export function loginAuthSuccessData(data) {
  return {
    type: LOGIN_TYPES.LOGIN_AUTH_SUCCESS,
    data
  };
}

export const login = (email, password) => {
  return async dispatch => {
    dispatch(loginIsLoading(true));
    try {
      const response = await loginAppp(email, password);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(loginIsLoading(false));
      dispatch(loginAuthSuccessData(response.data));
    } catch (error) {
      dispatch(loginHasErrored(true));
    }
  };
};
