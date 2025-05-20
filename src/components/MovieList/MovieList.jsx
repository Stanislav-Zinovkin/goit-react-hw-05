import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css"
const MovieList = ({ movies }) => {
  const location = useLocation(); 

  if (!Array.isArray(movies)) {
    return <p>No movies to display.</p>;
  }

  return (
    <div className={styles.movieListContainer}>
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: `${location.pathname}${location.search}` }}
            className={styles.movieLink}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default MovieList;
