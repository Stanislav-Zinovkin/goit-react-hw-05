import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import awaitFun from "../../awaitFun/awaitFun";
import MovieCast from "../../components/MovieCast/MovieCast";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import styles from "./movieDetailsPage.module.css"
import Rating from "../../components/Rating/Rating";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


const MovieDetailsPage = () => {
  const location = useLocation();
const {id} = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const castRef = useRef(null);

const castScroll = () => {
  setTimeout(() => {
    if (castRef.current) {
      castRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 1000);
}

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
  const from = location.state?.from || "/movies";
  const posterUrl = "https://image.tmdb.org/t/p/w500";
return(
    <div className={styles.container}>
      <GoBackBtn/>
        {/*{loading && <p>Loading...</p>}*/}
        {movie && (
  <div className={styles.movieDetailsContainer}>
    {movie.poster_path && (
             <img
             src={
               movie.poster_path
                 ? `${posterUrl}${movie.poster_path}`
                 : defaultImg
             }
             alt={movie.title}
             className={styles.moviePoster}
           />
          )}
    <h1>{movie.title}</h1>
    <Rating vote_average={movie.vote_average}/>
    <p>{movie.overview}</p>
    <div className={styles.linkContainer} ><Link to={`/movies/${id}/cast`} state={{from: location.pathname}} onClick={castScroll}>Cast</Link>
         <Link to={`/movies/${id}/reviews`} state={{from: location.pathname}}>Reviews</Link>
    </div>
    <div ref={castRef}></div>
    <Outlet/>
  </div>
)}
    </div>
)


}
  

export default MovieDetailsPage;