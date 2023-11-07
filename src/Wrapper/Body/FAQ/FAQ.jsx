import React from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem/FAQItem";

const FAQ = () => {
    return (
    <div className={styles.FAQ}>
        <div className={styles.quests}><p>Часто задаваемые вопросы</p></div>
        <div className={styles.faq}>FAQ</div>
        <div className={styles.FAQHolder}>
            <FAQItem text="Как сделать заказ?"/>
            <FAQItem text="Способы оплаты"/>
            <FAQItem text="Доставка"/>
            <FAQItem text="Сроки доставки"/>
            <FAQItem text="Как сделать обмен?"/>
            <FAQItem text="Как сделать возврат?"/>
            <FAQItem text="Куда и когда вернутся деньги за возвращённый товар?"/>
        </div>
    </div>
    )
};

export default FAQ;