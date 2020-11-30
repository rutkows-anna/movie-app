import React from "react";
import styles from "./MovieWrapper.module.css";

const MovieWrapper = ({ children }) => {
  return <section className={styles.movieWrapper}>{children}</section>;
};

export default MovieWrapper;
