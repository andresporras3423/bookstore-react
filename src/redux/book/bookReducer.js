import { CREATE_BOOK, REMOVE_BOOK } from './bookTypes';

const initialState = {
  books: [
    { id: Math.random(), title: '100 years of solitude', category: 'Action' },
    { id: Math.random(), title: 'History is USA', category: 'History' },
    { id: Math.random(), title: 'The shining', category: 'Horror' },
    { id: Math.random(), title: 'The crow', category: 'Horror' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: (() => {
        const nBooks = state.books;
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
