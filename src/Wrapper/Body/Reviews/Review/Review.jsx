import React from "react";
import styles from "./Review.module.css"
import Stars from "./Stars/Stars";

const Review = (props) => {
    return (
    <div className={styles.review}>
        <div class v Name={styles.avatarHolder}>
            <img src="/images/shirt.png" alt=" " className={styles.avatar}></img>
        </div>
        <div className={styles.reviewHolderItems}>
            <div className={styles.starInnersHolder}>
                <div className={styles.starHolder}>
                    <Stars stars="/icons/star.svg"/>
                </div>
                <div className={styles.starHolder}>
                    <Stars stars="/icons/star.svg"/>
                </div>
                <div className={styles.starHolder}>
                    <Stars stars="/icons/star.svg"/>
                </div>
                <div className={styles.starHolder}>
                    <Stars stars="/icons/star.svg"/>
                </div>
                <div className={styles.starHolder}>
                    <Stars stars="/icons/star.svg"/>
                </div>
            </div>
            <div className={styles.reviewText}>
                <p>{props.text}</p>
            </div>
            
            <div className={styles.ownerName}>
                <p className={styles.name}>Анна Баребух</p>
                <p className={styles.date}>23.02.2022</p>
            </div>
        </div>
    </div>)
};

export default Review
