import React from 'react';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import Watchlist from "./components/Watchlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
          <Route path="/movies" component={MovieList} />
          <Route path="/watchlist" component={Watchlist} />
          <Route exact path="/">
            <span>dupa</span>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
