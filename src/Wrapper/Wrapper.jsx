import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import styles from "./Wrapper.module.css";

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Body />
        </div>
    )

};

export default Wrapper;