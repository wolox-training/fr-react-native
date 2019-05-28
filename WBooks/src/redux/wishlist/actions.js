import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD', 'DELETE']);

export const actionCreators = {
  add: id => ({
    type: actions.ADD,
    payload: { id },
    target: 'books'
  }),
  delete: id => ({
    type: actions.DELETE,
    payload: id,
    target: 'books'
  })
};
