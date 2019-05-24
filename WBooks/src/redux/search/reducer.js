import Immutable from 'seamless-immutable';

import { actionTypes } from './constants/actionTypes';

const initialState = {
  text: ''
};

export const searchReducer = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case actionTypes.WRITE:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
