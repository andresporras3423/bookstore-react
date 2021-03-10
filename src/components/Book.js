import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

function Book(props) {
  const { book, handleRemoveBook } = props;

  const removeBook = () => {
    handleRemoveBook(book);
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="submit" onClick={removeBook}>Remove book</button></td>
    </tr>
  );
}

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: nBook => {
    dispatch(removeBook(nBook));
  },
});

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  handleRemoveBook: null,
};

export default connect(null, mapDispatchToProps)(Book);
