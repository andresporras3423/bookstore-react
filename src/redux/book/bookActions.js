import { CREATE_BOOK, REMOVE_BOOK } from './bookTypes';

export const createBook = nBook => ({
  type: CREATE_BOOK,
  id: nBook.id,
  title: nBook.title,
  category: nBook.category,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});
