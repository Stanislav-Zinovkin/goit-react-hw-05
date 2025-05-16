import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
    if (!Array.isArray(movies)) {
        return <p>No movies to display.</p>;
      }
      return(
<div>
       <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
        ))}
       </ul>
    </div>)
}
export default MovieList;