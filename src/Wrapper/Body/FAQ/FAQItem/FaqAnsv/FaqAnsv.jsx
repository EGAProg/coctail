import React from "react";
import styles from "./FaqAnsv.module.css";


const FaqAnsv = ({setOpen, ansver}) => {
    // console.log (setOpen);
    let isOpen = setOpen;

    function openClose() {
        if (isOpen !== true) { 
            console.log ("OPENED");
            isOpen = true;
            return styles.ans;
        } 
        else {
            console.log ("closed");
            isOpen = false;
            return [styles.noneAns]
        };
    }
    return (
        <div className={openClose}>
            {
                console.log(openClose())
            }
            <p>{ansver}</p>    
        </div> 
    )
};

export default FaqAnsv; 