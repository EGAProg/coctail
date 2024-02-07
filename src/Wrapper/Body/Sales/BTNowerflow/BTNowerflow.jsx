import React from "react";
import styles from "./BTNowerflow.module.css";
const BTNowerflow = () => {
    // buttonRight.onclick = function () {
    //     document.getElementById('container').scrollLeft += 20;
    //   };
    //   buttonLeft.onclick = function () {
    //     document.getElementById('container').scrollLeft -= 20;
    //   };
    return (
        <div className={styles.BTNOwerflow} >
            <img src="/icons/owerflowBTN.svg" alt=" "></img>
            {/* <img src="/icons/owerflowBTN.svg" classname={styles.left}></img> */}
        </div>
    )
};

export default BTNowerflow;