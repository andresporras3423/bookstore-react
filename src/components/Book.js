import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Ring from './Ring';

function Book(props) {
  const { book, handleRemoveBook } = props;

  const removeBook = () => {
    handleRemoveBook(book);
  };

  return (
    <tr>
      <td className="first-column">
        <p className="School-of">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="Suzanne-Collins">{book.author}</p>
        <p className="links-container">
          <button type="submit" className="link Comments">Comments</button>
          <button type="submit" className="link Comments" onClick={removeBook}>Remove</button>
          <button type="submit" className="link Comments">Edit</button>
        </p>
      </td>
      <td className="second-column">
        <Ring completed={book.completed} />
      </td>
      <td className="third-column">
        <h2 className="Current-Chapter">Current chapter</h2>
        <p className="Current-Lesson">{book.chapter}</p>
        <button className="Rectangle-2" type="submit"><span className="Update-progress">UPDATE PROGRESS</span></button>
      </td>
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
    completed: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  handleRemoveBook: null,
};

export default connect(null, mapDispatchToProps)(Book);
