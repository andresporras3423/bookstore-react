import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList(props) {
  const { books, handleRemoveBook } = props;

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book book={book} handleRemoveBook={handleRemoveBook} key={nanoid()} />
          ))
      }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  books: state.book.books,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: nBook => {
    dispatch(removeBook(nBook));
  },
});

BooksList.propTypes = {
  books: PropTypes.shape([]),
  handleRemoveBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: null,
  handleRemoveBook: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
