import React from 'react';
import styles from "./Working.module.css";

const Working = () => {
    return (
        <div className={styles.holder}>
            <h3 id={styles.working}>Ваша заявка обрабатывается</h3>
            <p id={styles.specialEnj}>Наш специалист с Вами свяжется в ближайшее время</p>
            <h3 id={styles.thx}>Спасибо</h3>
        </div>
    )
};

export default Working;