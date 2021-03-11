import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBook } from './actions/index';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  books: [
    { id: Math.random(), title: '100 years of solitude', category: 'Action' },
    { id: Math.random(), title: 'History of USA', category: 'History' },
    { id: Math.random(), title: 'The shining', category: 'Horror' },
    { id: Math.random(), title: 'Ruby for dummies', category: 'Learning' },
  ],
};

const store = createStore(rootReducer, applyMiddleware(thunk));

initialState.books.forEach(book => store.dispatch(createBook(book)));

const wrap = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {wrap}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
