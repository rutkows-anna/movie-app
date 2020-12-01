import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAdd, movieRemove } from "../../state/actions";
import styles from "./MovieCard.module.css";
import videographer from "../../assets/videographer.svg";

const MovieCard = ({ movie }) => {
  const moviesToWatch = useSelector((state) => state.moviesToWatch);
  const dispatch = useDispatch();
  const poster = movie.Poster === "N/A" ? videographer : movie.Poster;

  const isInWatchlist = (movieId) => {
    return moviesToWatch.map((movie) => movie.imdbID).includes(movieId);
  };

  const onAdd = (movie) => {
    dispatch(movieAdd(movie));
  };

  const onRemove = (movieId) => {
    dispatch(movieRemove(movieId));
  };

  return (
    <div key={movie.imdbID} className={styles.card}>
      <img src={poster} alt={movie.Title} className={styles.poster} />
      <div className={styles.cardContent}>
        <p className={styles.title}>{movie.Title}</p>
        <p className={styles.year}>{movie.Year}</p>
        {isInWatchlist(movie.imdbID) ? (
          <button
            className={styles.buttonRemove}
            onClick={() => onRemove(movie.imdbID)}
          >
            remove from watchlist
          </button>
        ) : (
          <button className={styles.buttonAdd} onClick={() => onAdd(movie)}>
            add to watchlist +
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
