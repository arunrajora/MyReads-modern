import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './Home';
import Search from './Search';

function BooksApp(props) {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/search' exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}
export default BooksApp;
