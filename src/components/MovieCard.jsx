import React, { useState, useEffect } from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div key={movie.imdbID}>
        {movie.Title}
        <img src={movie.Poster} />
        <span>{movie.Year}</span>
      </div>
    </>
  );
};

export default MovieCard;
