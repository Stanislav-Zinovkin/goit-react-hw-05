import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link, useParams } from "react-router-dom";
import awaitFun from "../../awaitFun/awaitFun";
import MovieCast from "../../components/MovieCast/MovieCast";


const MovieDetailsPage = () => {
const {id} = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const response = await awaitFun(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
         
        );
        setMovie(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);
return(
    <div>
        {/*{loading && <p>Loading...</p>}*/}
        {movie && (
  <div>
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
    <div><Link to={`/movies/${id}/cast`}>Cast</Link>
         <Link to={`/movies/${id}/reviews`}>Reviews</Link>
    </div>
    <Outlet/>
  </div>
)}
    </div>
)


}
  

export default MovieDetailsPage;