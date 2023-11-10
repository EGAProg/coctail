import React from "react";
import styles from "./Reviews.module.css"
import Review from "./Review/Review";
import { NavLink } from "react-router-dom";
const Reviews = () => {
    return (
        <div>
            <h2 className={styles.reviewsFrom}>Отзывы наших покупателей</h2>
            <div className={styles.Reviews}>
                <Review text="Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. "/>
                <Review text="Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. "/>
                <div className={styles.nextRev}>
                    {/* <div className={styles.line}></div> */}
                    <div className={styles.arr}></div>
                </div>

            </div>
            <NavLink to="/working">
            <div className={styles.AddRev}><p>Добавить отзыв</p></div>
            </NavLink>
        </div>
    )
};

export default Reviews;
