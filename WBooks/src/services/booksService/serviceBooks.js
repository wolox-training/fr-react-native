import api from '@config/api';

import { BOOKS_URL } from '../constants/urls';

export const serviceBooks = {
  getBooks: () => api.get(BOOKS_URL)
};
