import { serviceBooks } from '@services/booksService/serviceBooks';

export const actionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

const privateBookActions = {
  getBooksSuccess: books => ({ type: actionTypes.GET_BOOKS_SUCCESS, payload: books }),
  getBooksFailure: error => ({ type: actionTypes.GET_BOOKS_FAILURE, payload: error })
};

export const bookActions = {
  getBooks: () => async dispatch => {
    dispatch({ type: actionTypes.GET_BOOKS });
    const response = await serviceBooks.getBooks();
    if (response.ok) dispatch(privateBookActions.getBooksSuccess(response.data));
    else dispatch(privateBookActions.getBooksFailure(response));
  }
};

export default bookActions;
