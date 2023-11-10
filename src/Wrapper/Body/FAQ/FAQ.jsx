import React from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem/FAQItem";
import "./FAQItem/FAQItem.module.css"
import FAQArr from "./FAQarr";

const FAQ = () => {
    const open = false;
    return (
    <div className={styles.FAQ}>
        <div className={styles.quests}><p>Часто задаваемые вопросы</p></div>
        <div className={styles.faq}>FAQ</div>
        <div className={styles.FAQHolder}>
            <FAQItem title={FAQArr[0].question} ansver={FAQArr[0].ansver} open={open}/>
            <FAQItem title={FAQArr[1].question} ansver={FAQArr[1].ansver} open={open}/>
            <FAQItem title={FAQArr[2].question} ansver={FAQArr[2].ansver} open={open}/>
            <FAQItem title={FAQArr[3].question} ansver={FAQArr[3].ansver} open={open}/>
            <FAQItem title={FAQArr[4].question} ansver={FAQArr[4].ansver} open={open}/>
            <FAQItem title={FAQArr[5].question} ansver={FAQArr[5].ansver} open={open}/>
            <FAQItem title={FAQArr[6].question} ansver={FAQArr[6].ansver} open={open}/>
        </div>
    </div>
    )
};

export default FAQ;