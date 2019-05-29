import { createReducer, onAppend, onDelete } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  books: []
};

const reducerDescription = {
  [actions.ADD]: onAppend(),
  [actions.DELETE]: onDelete()
};
export const wishlistReducer = createReducer(Immutable(initialState), reducerDescription);
