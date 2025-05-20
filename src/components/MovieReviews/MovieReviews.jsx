import React from "react";
import { useState, useEffect } from "react";
import awaitFun from "../../awaitFun/awaitFun";
import { useParams } from "react-router-dom";
import styles from "./MovieReviews.module.css";
const MovieReviews = () => {
const [loading, setLoading] = useState(false);
const [error,setError] = useState(null);
const {id} = useParams();
const [reviews, setReviews] = useState([]);
useEffect (()=>{
    async function fetchReviews() {
        try{
            setLoading(true);
            const response = await  awaitFun(
               `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
            )
            setReviews(response.results);
        }catch(error){setError(error.message);}
        finally{setLoading(false);}
    }fetchReviews();},[id]);

    return(
        <div className={styles.reviewsContainer}>
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : reviews.length === 0 ? (
          <p className={styles.noReviews}>No reviews available</p>
        ) : (
          <ul className={styles.reviewsList}>
            {reviews.map((review) => (
              <li key={review.id} className={styles.reviewItem}>
                <h3 className={styles.author}>{review.author}</h3>
                <p className={styles.content}>{review.content}</p>
              </li>
                    ))}
                </ul>
            )}
        </div>
    )
} 

export default MovieReviews;