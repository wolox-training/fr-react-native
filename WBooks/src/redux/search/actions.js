import { createTypes } from 'redux-recompose';

export const actions = createTypes(['WRITE']);

export const actionCreators = {
  write: text => ({
    type: actions.WRITE,
    payload: text,
    target: 'text'
  })
};
