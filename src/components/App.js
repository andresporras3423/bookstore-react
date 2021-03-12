import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <nav className="panel-bg">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <span className="BOOKS">BOOKS</span>
        <span className="CATEGORIES">CATEGORIES</span>
        <span className="Oval">
          <span className="Mask" />
        </span>
      </nav>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
