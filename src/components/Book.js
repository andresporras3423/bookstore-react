import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleOnClick } = props;

  const removeBook = () => {
    handleOnClick(book);
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

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleOnClick: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  handleOnClick: null,
};

export default Book;
