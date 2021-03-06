import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList(props) {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book book={book} key={nanoid()} />
          ))
      }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.shape([]),
};

BooksList.defaultProps = {
  books: null,
};

export default connect(mapStateToProps)(BooksList);
