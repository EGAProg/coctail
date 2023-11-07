import React from "react";
import styles from "./Header.module.css";
import Panel from "./Panel/Panel";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.dropdown}>
                <img src={"/icons/clarity_menu-line.svg"}></img>
            </div>
            <Panel />
        </div>
    )

};

export default Header;