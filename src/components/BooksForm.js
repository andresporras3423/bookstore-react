import { nanoid } from 'nanoid';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" />
      <select>
        {
        categories.map(category => (
          <option value={category} key={nanoid()}>{category}</option>
        ))
      }
      </select>
      <input type="submit" value="save" />
    </form>
  );
}

export default BooksForm;
