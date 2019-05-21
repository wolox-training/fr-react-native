import api from '@config/api';

import { LOGIN_URL } from '../constants/urls';

import { asyncStorageOperations } from './utils/asyncStorageOperations';
import { createHeaderObject } from './utils/createHeaderObject';

const setCurrentUser = async (accessToken, client, uid) => {
  await asyncStorageOperations.setAccessToken(accessToken);
  await asyncStorageOperations.setClient(client);
  await asyncStorageOperations.setUserId(uid);
  api.setHeaders(createHeaderObject(accessToken, client, uid));
};

export const login = {
  loginApp: (email, password) => api.post(LOGIN_URL, { email, password }),
  setCurrentUser: async (accessToken, client, uid) => setCurrentUser(accessToken, client, uid)
};
