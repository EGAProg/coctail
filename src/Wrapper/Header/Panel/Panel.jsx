import React, {useState} from "react";
import styles from "./Panel.module.css";
// import RegLogModal from "./Account/Loggined/RegLogModal/RegLogModal";
import Account from "./Account/Account";

const Panel = () => {
    const [modalActive, setModalActive, reg] = useState(false);
    
    return (
        <div className={styles.panel}>
            <div className={styles.searchIco}>
                <img src={"/icons/search.svg"} alt=" "></img>
            </div>
            <div className={styles.searchFieldHolder}>
                <input type="text" className={styles.searchField} placeholder="Поиск"></input>
            </div>
            <div className={styles.avatar} onClick={() => setModalActive(true)}>
                <img src={"/icons/avatar.svg"} alt=" "></img>
            </div>
            <div className={styles.fav}>
                <img src={"/icons/favorites.svg"} alt=" "></img>
            </div>
            <div className={styles.basket}>
                <img src={"/icons/shoppingBag.svg"} alt=" "></img>
            </div>
            <Account active={modalActive} setActive={setModalActive} reg={reg}/>
        </div>

    )
};

export default Panel;