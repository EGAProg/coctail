import React from "react";
import styles from "../Catalog.module.css";
import WearBox from "../../Body/Sales/WearBox/WearBox";
import Catalog from "../Catalog";

import obj from "../../../objDB";
const Watched = () => {
    return (
        <>
        <Catalog />
        <div className={styles.catalogRight}>
            <WearBox photo={obj[0].Photo} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
            <WearBox photo={obj[1].Photo} name={obj[0].Name} price={obj[1].Price} StarImgUrl={obj[1].StarImgUrl.toString()} starCount={obj[1].StarsCount}/>
            <WearBox photo={obj[1].Photo} name={obj[0].Name} price={obj[1].Price} StarImgUrl={obj[1].StarImgUrl.toString()} starCount={obj[1].StarsCount}/>
            <WearBox photo={obj[1].Photo} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
            <WearBox photo={obj[0].Photo} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
            <WearBox photo={obj[0].Photo} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
        </div>
        <div className={styles.More}><p>ЕЩЕ!</p></div>
        
        </>
    )
};

export default Watched;