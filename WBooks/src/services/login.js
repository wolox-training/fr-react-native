import api from '@config/api';

import { LOGIN_URL } from './constants/urls';

const loginCalls = {
  loginApp: (email, password) => api.post(LOGIN_URL, { email, password })
};

export const loginAppp = (email, password) => api.post(LOGIN_URL, { email, password });
