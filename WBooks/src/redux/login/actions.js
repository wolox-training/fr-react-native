import { loginApp } from '@services/login';

import { actionTypes } from './constants/loginTypes';
import { asyncStorageOperations } from './utils/asyncStorageOperations';

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
      await asyncStorageOperations.setAccessToken(response.headers['access-token']);
      await asyncStorageOperations.setClient(response.headers.client);
      await asyncStorageOperations.setUserId(response.headers.uid);
      dispatch(privateActionsCreators.loginSuccess(response.data));
    } catch (error) {
      dispatch(privateActionsCreators.loginFailure(error));
    }
  }
};
