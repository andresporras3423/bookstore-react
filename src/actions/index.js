import { CREATE_BOOK, REMOVE_BOOK } from '../types/index';

export const createBook = nBook => ({
  type: CREATE_BOOK,
  id: nBook.id,
  title: nBook.title,
  category: nBook.category,
});

export const removeBook = nBook => ({
  type: REMOVE_BOOK,
  id: nBook.id,
});

export default { createBook, removeBook };
