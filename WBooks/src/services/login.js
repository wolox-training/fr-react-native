import api from '@config/api';

import { LOGIN_URL } from './constants/urls';

export default {
  loginApp: (email, password) => api.get(LOGIN_URL, { email, password })
};
