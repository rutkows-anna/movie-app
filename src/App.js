import React from 'react';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import styles from './styles/styles.module.css'; 

function App() {
  return (
    <div className={styles.app}>
      <Nav />
    <MovieList />
    </div>
  );
}

export default App;
