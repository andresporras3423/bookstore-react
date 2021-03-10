import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function BooksForm(props) {
  const { handleCreateBook } = props;
  const [book, setBook] = useState({ title: '', category: 'Action' });

  const handleChange = name => event => {
    setBook({
      ...book,
      [name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleCreateBook({ id: Math.random(), title: book.title, category: book.category });
    setBook({
      title: '',
      category: 'Action',
    });
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form className="form-group booksForm">
      <span className="form-span">Title:</span>
      <input
        type="text"
        className="form-control"
        name="myinput"
        id="myinput"
        value={book.title}
        onChange={handleChange('title')}
      />
      <span className="form-span">Category:</span>
      <select
        className="form-control"
        value={book.category}
        onChange={handleChange('category')}
        name="myinput2"
        id="myinput2"
      >
        {
        categories.map(category => (
          <option value={category} key={nanoid()}>{category}</option>
        ))
      }
      </select>
      <input type="submit" value="save" className="btn btn-primary btn-book-form" onClick={handleSubmit} />
    </form>
  );
}

BooksForm.propTypes = {
  handleCreateBook: PropTypes.func,
};

BooksForm.defaultProps = {
  handleCreateBook: null,
};

export default BooksForm;
