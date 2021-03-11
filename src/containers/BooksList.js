import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BooksList(props) {
  const { books, category } = props;

  return (
    <div>
      <CategoryFilter />
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
          books.filter(book => book.category === category || category === 'All').map(book => (
            <Book book={book} key={nanoid()} />
          ))
      }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.book.books,
  category: state.filter.category,
});

BooksList.propTypes = {
  books: PropTypes.shape([]),
  category: PropTypes.string,
};

BooksList.defaultProps = {
  books: null,
  category: 'All',
};

export default connect(mapStateToProps)(BooksList);
