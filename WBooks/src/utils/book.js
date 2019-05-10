import booksInfo from '../constants/books';

export const getBookById = id => booksInfo.find(book => book.id === id);
