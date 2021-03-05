import { nanoid } from 'nanoid';

function BooksList() {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']];
  return (
    <div>
      {
          groups.map(group => (
            <div className="calculator-group" key={nanoid()}>
              {group}
            </div>
          ))
      }
    </div>
  );
}

export default BooksList;
