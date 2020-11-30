import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import styles from "./Home.module.css";
import videographer from "../../assets/videographer.svg";

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to movies app.</h1>
        <p className={styles.subtitle}>
          In app you can find your favourite movies and add them to watchlist.
        </p>
        <Link to={routes.movies} className={styles.button}>
          Search movies
        </Link>
      </div>
      <img src={videographer} alt="videographer" className={styles.image} />
    </main>
  );
};

export default Home;
