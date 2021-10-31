import { SHELVES } from './constants';

function Book({ book, onChangeShelf }) {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks?.thumbnail}")`,
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select
            value={book.shelf || 'none'}
            onChange={(e) => onChangeShelf(book, e.target.value)}
          >
            <option value='move' disabled>
              Move to...
            </option>
            {SHELVES.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors?.join(', ')}</div>
    </div>
  );
}

export default Book;
