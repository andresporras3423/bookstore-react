import { nanoid } from 'nanoid';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form className="form-group booksForm">
      <span className="form-span">Title:</span>
      <input type="text" className="form-control" name="myinput" id="myinput" />
      <span className="form-span">Category:</span>
      <select className="form-control" name="myinput2" id="myinput2">
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
