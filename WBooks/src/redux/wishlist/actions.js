import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD', 'DELETE']);

const TARGET = {
  books: 'books'
};

export const actionCreators = {
  add: id => ({
    type: actions.ADD,
    payload: { id },
    target: TARGET.books
  }),
  delete: id => ({
    type: actions.DELETE,
    payload: id,
    target: TARGET.books
  })
};
