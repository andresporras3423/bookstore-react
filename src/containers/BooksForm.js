import { useState } from 'react';
import { nanoid } from 'nanoid';

function BooksForm() {
  const [book, setBook] = useState({ title: '', category: 'Action' });

  const handleChange = (name, value) => {
    setBook({
      ...book,
      [name]: value,
    });
  };

  const updateTitle = e => {
    handleChange('title', e.target.value);
  };

  const updateCategory = e => {
    handleChange('category', e.target.value);
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
        onChange={updateTitle}
      />
      <span className="form-span">Category:</span>
      <select
        className="form-control"
        value={book.category}
        onChange={updateCategory}
        name="myinput2"
        id="myinput2"
      >
        {
        categories.map(category => (
          <option value={category} key={nanoid()}>{category}</option>
        ))
      }
      </select>
      <input type="submit" value="save" className="btn btn-primary btn-book-form" />
    </form>
  );
}

export default BooksForm;
