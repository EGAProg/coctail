import React from "react";
import styles from "./FAQItem.module.css";
import "./FAQItem.module.css";
import FaqAnsv from "./FaqAnsv/FaqAnsv";

const FAQItem = ({title, ansver, open}) => {
    let setOpen = open;
    let classDef = styles.noneAns;
    function changeClassName() { 
        if (setOpen === false) { 
            
            setOpen = true 
            classDef = [styles.ans];
            console.log(classDef);
        } 
        else { 
            
            setOpen = false;
            classDef = [styles.noneAns];
            console.log(classDef);
        } 
    }
    return (
        <>
        <div className={[ styles.faqEl ]} >
            <div className={[styles.header]} onClick={changeClassName}>
                <p className={styles.FAQText}>{title}</p>
                <img className={styles.openImg} src="/icons/faq.svg" alt=""></img>   
            </div>
            
        </div>
        {/* <FaqAnsv className={classDef} ansver={ansver} setOpen={setOpen}/> */}
        <div className={ classDef }>
            {console.log(classDef) }
            <p className={styles.FAQAnsver}>{ansver}</p>    
        </div>
        </>
    );
};

export default FAQItem