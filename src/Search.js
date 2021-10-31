import * as BooksAPI from './BooksAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function Search({ booksOnShelves, onChangeShelf }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const books = await BooksAPI.search(query);
        setSearchResults(books.error ? [] : books);
      } else {
        setSearchResults([]);
      }
    };
    fetchResults();
  }, [query]);
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by title or author'
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults.map((book) => {
            const shelf = booksOnShelves.find(
              ({ id }) => book.id === id
            )?.shelf;
            return (
              <li key={book.id}>
                <Book book={{ ...book, shelf }} onChangeShelf={onChangeShelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
