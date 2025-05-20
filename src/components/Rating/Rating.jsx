import React from "react";
import styles from "./Rating.module.css"

const Rating = ({vote_average}) => {
if(!vote_average){return <p className={styles.noRating}>No rating available</p>;}
 const ratingPercent = (vote_average / 10)*100;
 return(
    <div className={styles.ratingContainer}>
        <div
        className={styles.rating}
        style={{ width: `${ratingPercent}%` }}
      ></div>
      <span className={styles.ratingText}>{vote_average}/10</span>
    </div>
 )
}
export default Rating;