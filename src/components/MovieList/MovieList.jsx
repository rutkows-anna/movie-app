import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import PageWrapper from "../PageWrapper/PageWrapper";
import MovieWrapper from "../MovieWrapper/MovieWrapper";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./MovieList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../state/actions";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChanged = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(searchValue));
  };

  return (
    <PageWrapper>
      <form className={styles.form} onSubmit={handleSumbit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for movies"
          value={searchValue}
          onChange={handleSearchValueChanged}
        ></input>
        <button className={styles.button}>search</button>
      </form>
      <MovieWrapper>
        <ClipLoader size={60} color={"#8083FF"} loading={loading} />

        {error !== null ? (
          <p className={styles.error}>{error}</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </MovieWrapper>
    </PageWrapper>
  );
};

export default MovieList;
