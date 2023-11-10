import React from "react";
import styles from "./FAQItem.module.css";
import "./FAQItem.module.css";
// import FAQArr from "../FAQarr";
// import {useState} from "react";

const FAQItem = ({title, ansver, open}) => {
    let setOpen = open;
    let classDef = styles.noneAns;
    // let [arrayFAQ, setArrayFAQ] = useState(FAQArr);

    // const updateEl = (e) => {
    //     let newArr = arrayFAQ;
    //     newArr[e.target.id].check = !arrayFAQ[e.target.id].check;
    //     setArrayFAQ([...newArr]);
    // };

    const update = (e) => {
        setOpen === false ? setOpen = true : setOpen = false;
        setOpen === false ?  classDef = styles.ans : classDef = styles.noneAns;
        console.log(classDef);
        console.log(setOpen);
    }



    return (
        <>
        <div className={[ styles.faqEl ]}>
            <div className={[styles.header]} onClick={update}>
                <p className={styles.FAQText}>{title}</p>
                <img className={[styles.openImg]} src="/icons/faq.svg" alt=""></img>   
            </div>
        </div>
        {/* <FaqAnsv className={classDef} ansver={ansver} setOpen={setOpen}/> */}
        {/* {setOpen === false ?  classDef=styles.ans : classDef = styles.noneAns} */}
        <div className={classDef}>
            {/* {console.log(classDef) } */}
            <p className={styles.FAQAnsver}>{ansver}</p>    
        </div>
        </>
    );
};

export default FAQItem