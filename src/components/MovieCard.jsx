import React, { useState, useEffect } from "react";
import styles from '../styles/styles.module.css'; 


const MovieCard = ({ movie, onMoviesToWatch }) => {

  const onClickAdd = () => {
    onMoviesToWatch(movie);
  } 
  return (
      <div key={movie.imdbID} className={styles.card}>
          <img src={movie.Poster} className={styles.poster}/>
          <div className={styles.cardContent}>
            <p className={styles.title}>{movie.Title}</p>
            <p className={styles.year}>{movie.Year}</p>
            <button className={styles.button} onClick={onClickAdd}>add to watchlist +</button>
          </div>
      </div>
  );
};

export default MovieCard;
