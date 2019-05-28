import { createReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  text: ''
};

const reducerDescription = {
  [actions.WRITE]: onReadValue()
};
export const searchReducer = createReducer(Immutable(initialState), reducerDescription);
