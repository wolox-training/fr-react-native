import { loginApp } from '@services/login';
import api from '@config/api';

import { actionTypes } from './constants/loginTypes';
import { asyncStorageOperations } from './utils/asyncStorageOperations';
import { createHeaderObject } from './utils/createHeaderObject';

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
      const { client, uid, 'access-token': accessToken } = response.headers;
      await asyncStorageOperations.setAccessToken(accessToken);
      await asyncStorageOperations.setClient(client);
      await asyncStorageOperations.setUserId(uid);
      api.setHeaders(createHeaderObject(accessToken, client, uid));
      dispatch(privateActionsCreators.loginSuccess(response.data));
    } catch (error) {
      dispatch(privateActionsCreators.loginFailure(error));
    }
  }
};
