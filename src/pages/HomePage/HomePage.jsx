import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import awaitFun from "../../awaitFun/awaitFun"
import styles from "./HomePage.module.css"
    



const HomePage = () => {
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(()=> {
        
        async function loadMmovies(){
            try {
                setLoading(true)
                const data = await awaitFun("https://api.themoviedb.org/3/trending/movie/day?language=en-US")

                
                setMovies(data.results)
            }catch(error){
               setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        loadMmovies()
    },[])
    return (
      <div className={styles.homePage}>
      {loading && <p className={styles.loading}>Loading movies...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li className={styles.movieItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title}
            </Link>
          </li>
            ))}
          </ul>
        </div>
      );
}
export default HomePage;