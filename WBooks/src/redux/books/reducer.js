import Immutable from 'seamless-immutable';

import { actionTypes } from './actions';

const initialState = {
  books: [],
  isLoading: false,
  error: {}
};

export const booksReducer = (state = Immutable(initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_BOOKS:
      return { ...state, isLoading: true };

    case actionTypes.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, isLoading: false };

    case actionTypes.GET_BOOKS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
