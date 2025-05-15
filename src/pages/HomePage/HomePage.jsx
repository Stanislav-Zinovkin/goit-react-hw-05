import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const MyApiKey = "a35d00f9e67fbb7431a70ae4ac812269";
    const MyAccesToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVkMDBmOWU2N2ZiYjc0MzFhNzBhZTRhYzgxMjI2OSIsIm5iZiI6MTc0NzMwMzk0Mi43MTEsInN1YiI6IjY4MjViZTA2NWFhYTI1NjQxYWFkYTNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cR8RLsiA2BbwDwmxcgMJLf6_XRnUt-u6VjO8vvys5Q";

    useEffect(()=> {
        
        async function fetchMmovies(){
            try {
                setLoading(true)
                const response = await axios.get(
                     'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
,
                    {headers:{
                        Authorization: `Bearer ${MyAccesToken}`
                    },
               
                      }

                );
                setMovies(response.data.results)
            }catch(error){
               setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchMmovies()
    },[])
return(
    <div>
       <ul>
        {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
        ))}
       </ul>
    </div>
)
}
export default HomePage;