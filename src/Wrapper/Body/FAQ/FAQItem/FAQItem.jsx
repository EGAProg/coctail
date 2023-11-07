import React from "react";
import styles from "./FAQItem.module.css";

const FAQItem = (props) => {
    return (
        <div className={styles.faqEl}>
            <p className={styles.FAQText}>{props.text}</p>
            <img className={styles.open} src="/icons/faq.svg" alt=""></img>    
        </div>
    )
};

export default FAQItem