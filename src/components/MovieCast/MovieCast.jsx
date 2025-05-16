import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import awaitFun from "../../awaitFun/awaitFun";

const MovieCast = ({ setError}) => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function fetchMovie() {
          try {
            setLoading(true);
            const response = await awaitFun(
             `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US` ,
             
            );
            setCast(response.cast);
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
            <h2>Cast</h2>
            {cast.length > 0 ? (
                <ul>
                    {cast.map((actor)=>(
                        <li key={actor.id}>
                            {actor.profile_path && (
                                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                                className="actor-img"/>
                            )}
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    ))}
                </ul>) : (<p>Information is not available</p>
            )}
        </div>
      );
};


export default MovieCast;