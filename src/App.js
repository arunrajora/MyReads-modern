import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './Home';
import Search from './Search';

function BooksApp(props) {
  const showSearchPage = true;
  return <div className='app'>{showSearchPage ? <Search /> : <Home />}</div>;
}
export default BooksApp;
