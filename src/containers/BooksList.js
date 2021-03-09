import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList(props) {
  const { books, handleOnClick } = props;

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
            <Book book={book} handleOnClick={handleOnClick} key={nanoid()} />
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
  handleOnClick: nBook => {
    dispatch(removeBook(nBook));
  },
});

BooksList.propTypes = {
  books: PropTypes.shape([]),
  handleOnClick: PropTypes.func,
};

BooksList.defaultProps = {
  books: null,
  handleOnClick: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
