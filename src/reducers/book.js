import { CREATE_BOOK, REMOVE_BOOK } from '../types/index';

const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: (() => {
        const nBooks = [...state.books];
        nBooks.push({ id: action.id, title: action.title, category: action.category });
        return nBooks;
      })(),
    };
    case REMOVE_BOOK: return {
      ...state,
      books: (() => {
        const nBooks = state.books.filter(book => book.id !== action.id);
        return nBooks;
      })(),
    };
    default: return state;
  }
};

export default bookReducer;
