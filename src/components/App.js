import '../App.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksForm />
        <BooksList />
      </div>
    </Provider>
  );
}

export default App;
