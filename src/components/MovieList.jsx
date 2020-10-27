import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import styles from '../styles/styles.module.css'; 

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [moviesToWatch, setMoviesToWatch] = useState([])

  useEffect((response) => {
    fetch(`http://www.omdbapi.com/?s=${"star wars"}&apikey=${"839b3f45"}`)
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.Search);
        console.log(movies.Search);
      });
  }, []);

const handleMoviesToWatch = (movie) => {
  setMoviesToWatch(prevMovie => [...prevMovie, movie])
    console.log(moviesToWatch)
}

  return (
    <section className={styles.appContent}>
      <div className={styles.container}>
        { 
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onMoviesToWatch={handleMoviesToWatch}/>
        ))}
       {moviesToWatch.length > 0 ? 
       moviesToWatch.map((movie) => (
         <MovieCard key={movie.imdbID} movie={movie} onMoviesToWatch={handleMoviesToWatch}/>
       )) : <span>No movies in your list! Add some!</span>
       }
      </div>
    </section>
  );
}

export default MovieList;


