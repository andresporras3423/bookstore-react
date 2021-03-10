import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import { createBook } from '../actions/index';

function App(props) {
  const { handleCreateBook } = props;
  return (
    <div className="App">
      <BooksForm handleCreateBook={handleCreateBook} />
      <BooksList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleCreateBook: nBook => {
    dispatch(createBook(nBook));
  },
});

App.propTypes = {
  handleCreateBook: PropTypes.func,
};

App.defaultProps = {
  handleCreateBook: null,
};

export default connect(null, mapDispatchToProps)(App);
