import React, {useState} from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem/FAQItem";
import "./FAQItem/FAQItem.module.css"
import FAQArr from "./FAQarr";

const FAQ = () => {
    const open = useState(false);
    // let [arrayFAQ, setArrayFAQ] = useState(FAQArr);

    // const updateEl = (e) => {
    //     let newArr = arrayFAQ;
    //     newArr[e.target.id].check = !arrayFAQ[e.target.id].check;
    //     setArrayFAQ([...newArr]);
    // };

    return (
    <div className={styles.FAQ}>
        <div className={styles.quests}><p>Часто задаваемые вопросы</p></div>
        <div className={styles.faq}>FAQ</div>
        <div className={styles.FAQHolder}>
            {
                FAQArr.map((content, index)=>(
                    <FAQItem title={FAQArr[index].question} ansver={FAQArr[index].ansver} open={open}/>
                ))
            }
        </div>
    </div>
    )
};

export default FAQ;