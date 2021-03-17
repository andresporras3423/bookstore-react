import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';

function BooksList(props) {
  const { books, category, handleFilterChange } = props;

  const filterBooks = () => books.filter(book => book.category === category || category === 'All');

  return (
    <div className="booksList">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table className="table border-color">
        <tbody>
          {
          filterBooks().map(book => (
            <Book book={book} key={nanoid()} />
          ))
      }
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleFilterChange: category => {
    dispatch(changeFilter(category));
  },
});

const mapStateToProps = state => ({
  books: state.book.books,
  category: state.filter.category,
});

BooksList.propTypes = {
  books: PropTypes.shape([]),
  category: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

BooksList.defaultProps = {
  books: null,
  category: 'All',
  handleFilterChange: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
