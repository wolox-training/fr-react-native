import Immutable from 'seamless-immutable';

import { actionTypes } from './constants/loginTypes';

const initialState = {
  isLoading: false,
  error: {},
  data: {}
};

export const loginReducers = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case actionTypes.LOGIN:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { isLoading: false, error: {}, data: action.payload };
    default:
      return state;
  }
};
