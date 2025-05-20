import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import axios from "axios";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import styles from "./MoviesPage.module.css"

const MoviePage = () => {
  const MyAccesToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVkMDBmOWU2N2ZiYjc0MzFhNzBhZTRhYzgxMjI2OSIsIm5iZiI6MTc0NzMwMzk0Mi43MTEsInN1YiI6IjY4MjViZTA2NWFhYTI1NjQxYWFkYTNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cR8RLsiA2BbwDwmxcgMJLf6_XRnUt-u6VjO8vvys5Q";
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  
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

       const handleSearch = (searchTerm) => {
        if (searchTerm) {
          setSearchParams({ query: searchTerm });
        } else {
          setSearchParams({});
        }
      };
      
    return(
      <div className={styles.moviePageContainer}>
      <GoBackBtn />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList movies={movies} />
    </div>
    )
}
 export default MoviePage;