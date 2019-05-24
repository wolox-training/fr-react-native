import { serviceBooks } from '@services/booksService/serviceBooks';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['GET_BOOKS']));

const getBookAction = {
  type: actions.GET_BOOKS,
  target: 'books',
  service: serviceBooks.getBooks
};
export const actionCreators = {
  getBooks: () => getBookAction
};
