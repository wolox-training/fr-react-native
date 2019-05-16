import loginApp from '@services/login';
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
export function loginAuthSuccess(data) {
  return {
    type: LOGIN_TYPES.LOGIN_AUTH_SUCCESS,
    data
  };
}

export const login = async (email, password) => {
  return dispatch => {
    dispatch(loginIsLoading(true));
    try{
    const response = await loginApp(email, password);
    if (!response.ok){
        throw Error(response.statusText);
    }
    dispatch(loginIsLoading(false));
    dispatch(loginAuthSuccess(response.data))
    }catch{
        dispatch(itemsHasErrored(true));
    }
  };
}
