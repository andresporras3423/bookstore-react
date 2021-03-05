import { nanoid } from 'nanoid';
import Book from './Book';

function BooksList() {
  const books = [
    { id: Math.random(), title: '100 years of solitude', category: 'Action' },
    { id: Math.random(), title: 'History is USA', category: 'History' },
    { id: Math.random(), title: 'shining', category: 'Horror' },
    { id: Math.random(), title: 'The crow', category: 'Horror' },
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
