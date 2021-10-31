import React, { useCallback, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

function BooksApp(props) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      setBooks(await BooksAPI.getAll());
    };
    fetchBooks();
  }, []);

  const onChangeShelf = useCallback(
    (book, shelf) => {
      console.log(book, shelf);
      BooksAPI.update(book, shelf);
      const newBooks = books
        .filter(({ id }) => id !== book.id)
        .concat({ ...book, shelf });
      setBooks(newBooks);
    },
    [books]
  );

  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Home books={books} onChangeShelf={onChangeShelf} />
        </Route>
        <Route path='/search' exact>
          <Search booksOnShelves={books} onChangeShelf={onChangeShelf} />
        </Route>
      </Switch>
    </div>
  );
}
export default BooksApp;
