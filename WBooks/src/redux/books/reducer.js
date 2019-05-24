import { completeState, createReducer, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {}
};

const stateDescription = {
  books: []
};

const initialState = completeState(stateDescription);

export const booksReducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
