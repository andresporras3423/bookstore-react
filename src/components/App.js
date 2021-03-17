import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import BooksHeader from '../containers/BookHeader';

function App() {
  return (
    <div className="App">
      <BooksHeader />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
