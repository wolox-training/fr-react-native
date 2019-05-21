import api from '@config/api';

import { BOOKS_URL } from './constants/urls';

export const getBooks = () => api.post(BOOKS_URL);
