import { login } from '@services/loginService/login';

import { actionTypes } from './constants/loginTypes';

const privateActionsCreators = {
  login: () => ({
    type: actionTypes.LOGIN
  }),
  loginFailure: error => ({
    type: actionTypes.LOGIN_FAILURE,
    payload: error
  }),
  loginSuccess: data => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  })
};

export const actionCreators = {
  login: (email, password) => async dispatch => {
    dispatch(privateActionsCreators.login());
    try {
      const response = await login.loginApp(email, password);
      if (!response.ok) {
        throw Error(response);
      }
      const { client, uid, 'access-token': accessToken } = response.headers;
      await login.setCurrentUser(accessToken, client, uid);
      dispatch(privateActionsCreators.loginSuccess(response.data));
    } catch (error) {
      dispatch(privateActionsCreators.loginFailure(error));
    }
  }
};
