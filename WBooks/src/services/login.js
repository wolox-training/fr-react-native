import api from '@config/api';

import { LOGIN_URL } from './constants/urls';

export const loginApp = (email, password) => api.post(LOGIN_URL, { email, password });
