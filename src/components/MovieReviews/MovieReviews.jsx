import React from "react";
import { useState, useEffect } from "react";
import awaitFun from "../../awaitFun/awaitFun";
import { useParams } from "react-router-dom";
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
        <div>
            {reviews.length ===0 ?(
                <p>Dont have any reviews</p>
            ): (
                <ul>
                    {reviews.map((review)=>(
                        <li key={review.id}>
                            <h2>{review.author}</h2>
                            <p>{review.content}</p>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
} 

export default MovieReviews;