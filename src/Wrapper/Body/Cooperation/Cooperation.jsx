import React from "react";
import styles from "./Cooperation.module.css";
import CoopItems from "./CoopItems/CoopItems";
const Cooperation = () => {
    return (
        <div className={styles.CooperationHolder}>
            <h3 className={styles.cooperateWithUs}>Сотрудничество с нами</h3>
            <div className={styles.TextHolder}>
                <p>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </p>
            </div>
            <CoopItems textHead="Становитесь партнёром" textBody="Регистрируйтесь и 
переходите в свой кабинет"/>
        </div>
    )
};

export default Cooperation;