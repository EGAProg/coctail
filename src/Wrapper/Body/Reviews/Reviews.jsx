import React from "react";
import styles from "./Reviews.module.css"
import Review from "./Review/Review";

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
            <div className={styles.AddRev}><p>Добавить отзыв</p></div>
        </div>
        )
};

export default Reviews;
