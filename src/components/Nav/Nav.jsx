import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.mainNav}>
        <li>
          <NavLink
            activeClassName={styles.selected}
            className={styles.navLinks}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.selected}
            className={styles.navLinks}
            exact
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.selected}
            className={styles.navLinks}
            exact
            to={routes.watchlist}
          >
            Watchlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
