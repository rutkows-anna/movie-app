import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect((response) => {
    fetch(`http://www.omdbapi.com/?s=${"star wars"}&apikey=${"839b3f45"}`)
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.Search);
        console.log(movies.Search);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

