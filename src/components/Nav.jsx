import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Link
  } from "react-router-dom";
import styles from '../styles/styles.module.css'; 
import MovieList from "./MovieList";
import Watchlist from "./Watchlist";

  function Nav() {
      return (
          <nav className={styles.navigation}>
            <ul className={styles.mainNav}>
              <li>
                <NavLink activeClassName={styles.selected} className={styles.navLinks} exact to="/movies" >Movies</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selected} className={styles.navLinks} exact to="/watchlist" >Watchlist</NavLink>
              </li>
            </ul>
          </nav>
     
      )
  }


  

  export default Nav;