import React from "react";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
    const classes = {
        'circle': true,
        'A': true,
        'B': true,
        'C': true,
        'D': true,
      };
      
    return (
        <div className={styles.why}>
            <p className={styles.whyUs}>Почему выбирают нас?</p>
            <div className={styles.whyInner}>
                <div className={styles.whyTop}>
                    <div className={styles.par} >
                        <p>Скидки постоянным клиентам от 5%</p>
                        
                    </div>
                    <div className={[styles.circle, styles.A].join(' ')}></div>
                    <div className={styles.par} >
                        <p>Предлагаем самые выгодные цены</p>
                    </div>
                    <div className={styles.par} >
                        <p>Наши покупатели всегда остаются довольны</p>
                        
                    </div>
                    <div className={[styles.circle, styles.B].join(' ')}></div>
                    <div className={styles.par} >
                        <p>Ширикий ассортимент товаров для всей семьи</p>
                    </div>
                </div>
                <div className={styles.whyBottom} >
                    <div className={styles.parUs} >
                        <p>Возможность доставки в любой город Беларуси</p>
                        
                    </div>
                    <div className={[styles.circle, styles.C].join(' ')}></div>
                    <div className={styles.parUs} >
                        <p>Пункты выдачи заказов рядом с домом</p>
                        
                    </div>
                    <div className={[styles.circle, styles.D].join(' ')}></div>
                </div>
            </div>
        </div>
    );

};

export default WhyUs;