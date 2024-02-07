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
            <div className={styles.More}>
                <CoopItems textHead="Становитесь партнёром" 
                    textBody="Регистрируйтесь и переходите в свой кабинет"/>
                <CoopItems textHead="Рекламируйте товары" 
                    textBody="Рекламируйте наши товары на форумах, сайтах, в социальных сетях"/>
                <CoopItems textHead="Приводите покупателей" 
                    textBody="Приводите покупателей на наш сайт по уникальной ссылке"/>
                <CoopItems textHead="Получайте бонусы" 
                    textBody="Копите бонусы от каждого оплаченного заказа"/>
            </div>
            <h3 className={styles.perspective}>Это выгодно. Какие преимущества?</h3>
            <div className={styles.More}>
                <div className={styles.perspectiveInner}>
                    <img  className={styles.PersIMG} src="/icons/gear.svg" alt="gear"></img>
                    <p className={styles.whyPersText}>Автоматизация процессов</p>
                </div>
                <div className={styles.perspectiveInner}>
                    <img className={styles.PersIMG} src="/icons/list.svg" alt="gear"></img>
                    <p className={styles.whyPersText}>Пополнение ассортимента</p>
                </div>
                <div className={styles.perspectiveInner}>
                    <img className={styles.PersIMG} src="/icons/learningPeople.svg" alt="gear"></img>
                    <p className={styles.whyPersText}>Поддержка и обучение</p>
                </div>
                <div className={styles.perspectiveInner}>
                    <img className={styles.PersIMG} src="/icons/finanses.svg" alt="gear"></img>
                    <p className={styles.whyPersText}>Бонусы за новых клиентов</p>
                </div>
            </div>
        </div>
    )
};

export default Cooperation;