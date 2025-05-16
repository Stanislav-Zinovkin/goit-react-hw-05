import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import awaitFun from "../../awaitFun/awaitFun"
    



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
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li> 
            ))}
          </ul>
        </div>
      );
}
export default HomePage;