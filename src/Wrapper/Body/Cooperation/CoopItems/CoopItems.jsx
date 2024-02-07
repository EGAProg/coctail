import React from "react";
import styles from "./CoopItems.module.css";

const CoopItems = (props) => {
    return (
        <div className={styles.itemHolder}>
            <div className={styles.HeaderText}><p>{props.textHead}</p></div>
            <div className={styles.BodyText}><p>{props.textBody}</p></div>
        </div>
    )
};

export default CoopItems;