import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import awaitFun from "../../awaitFun/awaitFun";
import styles from "./MovieCast.module.css";
const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
const MovieCast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      let isCancelled = false;
    
      async function fetchMovie() {
        try {
          setLoading(true);
          const response = await awaitFun(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`
          );
          if (!isCancelled) {
            setCast(response.cast);
          }
        } catch (error) {
          if (!isCancelled) setError(error.message);
        } finally {
          if (!isCancelled) setLoading(false);
        }
      }
    
      fetchMovie();
    
      return () => {
        isCancelled = true;
      };
    }, [id]);
      return(
        <div className={styles.castContainer}>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                className={styles.actorImg}
              />
              <p className={styles.actorName}>{actor.name}</p>
              <p className={styles.characterName}>{actor.character}</p>
            </li>
                    ))}
                </ul>) : (<p>Information is not available</p>
            )}
        </div>
      );
};


export default MovieCast;