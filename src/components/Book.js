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
      <td>
        <p className="School-of">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="Suzanne-Collins">{book.author}</p>
        <p className="links-container">
          <button type="submit" className="link Comments">Comments</button>
          <button type="submit" className="link Comments" onClick={removeBook}>Remove</button>
          <button type="submit" className="link Comments">Edit</button>
        </p>
      </td>
      <td>{book.title}</td>
      <td>{book.category}</td>
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
    author: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  handleRemoveBook: null,
};

export default connect(null, mapDispatchToProps)(Book);
