import { nanoid } from 'nanoid';
import Book from './Book';

function BooksList() {
  const books = [
    { id: Math.random(), title: '100 years of solitude', category: 'Action' },
    {},
    {},
    {},
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book book={book} key={nanoid()} />
          ))
      }
      </tbody>
    </table>
  );
}

export default BooksList;
