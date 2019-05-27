import { createReducer, completeReducer, onSetValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  text: ''
};

const reducerDescription = {
  [actions.WRITE]: (state, action) => ({ ...state, [action.target]: action.payload })
};
export const searchReducer = createReducer(Immutable(initialState), reducerDescription);
