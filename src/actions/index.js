import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../types/index';

export const createBook = nBook => ({
  type: CREATE_BOOK,
  id: nBook.id,
  title: nBook.title,
  category: nBook.category,
  author: nBook.author,
  completed: nBook.completed,
  chapter: nBook.chapter,
});

export const removeBook = nBook => ({
  type: REMOVE_BOOK,
  id: nBook.id,
});

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export default { createBook, removeBook, changeFilter };
