import { Link } from 'react-router-dom';
import Book from './Book';

import { SHELVES } from './constants';

function Home({ books, onChangeShelf }) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {SHELVES.map(({ id, name }) => (
            <div className='bookshelf' key={id}>
              <h2 className='bookshelf-title'>{name}</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {books
                    .filter(({ shelf }) => shelf === id)
                    .map((book) => (
                      <li key={book.id}>
                        <Book book={book} onChangeShelf={onChangeShelf} />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
