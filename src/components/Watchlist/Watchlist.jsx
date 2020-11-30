import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PageWrapper from "../PageWrapper/PageWrapper";
import MovieWrapper from "../MovieWrapper/MovieWrapper";
import { useSelector } from "react-redux";
import styles from "./Watchlist.module.css";

const Watchlist = () => {
  const moviesToWatch = useSelector((state) => state.moviesToWatch);

  return (
    <PageWrapper>
      <MovieWrapper>
        {moviesToWatch.length > 0 ? (
          moviesToWatch.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className={styles.text}>No movies in your watchlist. Add some!</p>
        )}
      </MovieWrapper>
    </PageWrapper>
  );
};

export default Watchlist;
