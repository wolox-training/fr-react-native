import { loginApp } from '@services/login';

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
      const response = await loginApp(email, password);
      if (!response.ok) {
        throw Error(response);
      }
      dispatch(privateActionsCreators.loginSuccess(response.data));
    } catch (error) {
      dispatch(privateActionsCreators.loginFailure(error));
    }
  }
};
