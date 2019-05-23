import { serviceBooks } from '@services/booksService/serviceBooks';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['GET_BOOKS']));

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: serviceBooks.getBooks
  })
};
