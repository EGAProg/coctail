import React from "react";
import styles from "./BTNS.module.css";

const BTNS = () => {
    function ToTheMoon() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -50);
            setTimeout(ToTheMoon, 0);
        }
    }

    return (
        <div className={styles.BTNS}>
            <div className={[styles.btn, styles.btnUp].join(' ')} onClick={ToTheMoon}>
                <div className={styles.arrow} onClick={ToTheMoon}></div>
            </div>
            
            <div className={[styles.btn, styles.btnSendMsg].join(' ')}>
                
                <img src={"./icons/chat.svg"} alt=""className={styles.chatSvg}></img>
            </div>
        </div>
    )
}

export default BTNS;