import React, { useState, useEffect } from "react";
import styles from '../styles/styles.module.css'; 


const MovieCard = ({ movie }) => {
  return (
      <div key={movie.imdbID} className={styles.card}>
        <img src={movie.Poster} className={styles.poster}/>
        <p className={styles.title}>{movie.Title}</p>
        <p className={styles.year}>{movie.Year}</p>
      </div>
  );
};

export default MovieCard;
