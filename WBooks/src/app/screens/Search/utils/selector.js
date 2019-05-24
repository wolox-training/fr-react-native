import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';

const getBooks = state => state.books.books;
const getText = state => state.search.text;

export const getBooksSelector = createSelector(
  getBooks,
  getText,
  (books, text) => {
    return Immutable.asMutable(
      books.filter(book => book.title.toLowerCase().includes(text.toLowerCase()))
    ).sort(book => book.id);
  }
);
export const getEmptyInputSelector = createSelector(
  getText,
  text => !text
);
