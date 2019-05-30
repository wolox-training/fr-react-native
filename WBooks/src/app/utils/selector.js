import { createSelector } from 'reselect';

const getBooks = state => state.books.books;
const getId = (_, props) => props.id;
export const getBookSelector = createSelector(
  getBooks,
  getId,
  (books, id) => books.find(book => book.id === id)
);
