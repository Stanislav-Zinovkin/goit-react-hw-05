import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const MyAccesToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVkMDBmOWU2N2ZiYjc0MzFhNzBhZTRhYzgxMjI2OSIsIm5iZiI6MTc0NzMwMzk0Mi43MTEsInN1YiI6IjY4MjViZTA2NWFhYTI1NjQxYWFkYTNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cR8RLsiA2BbwDwmxcgMJLf6_XRnUt-u6VjO8vvys5Q";
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
      if (!query) return;
    async function fetchMovies() {
        try {
           setLoading(true);
           const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
            {headers: {
                Authorization :  `Bearer ${MyAccesToken}`
            },
            params: {query},
            }
           );
           setMovies(response.data.results);
        } catch (error){setError(error.message);

        }finally{setLoading(false);}
    }
       fetchMovies();}, [query, setLoading]);

       const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
          setQuery(searchTerm.trim());
        }
      };
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input  type="text"
               autoComplete="off"
               autoFocus
               placeholder="Search some movies!"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}/>
            
             <button type="submit">Search</button>
            </form>
            <div>
       <ul>
        {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
        ))}
       </ul>
    </div>
        </div>
    )
}
 export default MoviePage;