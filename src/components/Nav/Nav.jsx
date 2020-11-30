import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import styles from "./Nav.module.css";
import night from "../../assets/night.svg";

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
        <li>
          <button
            className={styles.nightMode}
            onClick={() => console.log("night mode")}
          >
            <img
              src={night}
              alt="night mode"
              className={styles.nightModeIcon}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
