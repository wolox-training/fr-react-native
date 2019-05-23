import { login } from '@services/loginService/login';
import { NavigationActions } from 'react-navigation';
import { ROUTES } from '@constants/routes';

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
      const response = await login.loginApp(email, password);
      if (!response.ok) {
        throw Error(response);
      }
      const { client, uid, 'access-token': accessToken } = response.headers;
      await login.setCurrentUser(accessToken, client, uid);
      login.setHeader(accessToken, client, uid);
      dispatch(privateActionsCreators.loginSuccess(response.data));
      dispatch(NavigationActions.navigate({ routeName: ROUTES.App }));
    } catch (error) {
      dispatch(privateActionsCreators.loginFailure(error));
    }
  },
  setHeaders: async () => {
    const accessToken = await asyncStorageOperations.getAccessToken();
    const client = await asyncStorageOperations.getClient();
    const userId = await asyncStorageOperations.getUserId();
    login.setHeader(accessToken, client, userId);
  }
};
