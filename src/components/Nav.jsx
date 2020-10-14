import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styles from '../styles/styles.module.css'; 
import MovieList from "./MovieList";

  function Nav() {
      return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/movies" component={MovieList}>
            </Route>
            <Route path="/">
              <span>dupa</span>
            </Route>
          </Switch>
        </div>
      </Router>
      )
  }




  export default Nav;