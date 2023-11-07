import React from "react";
import styles from "./Sales.module.css";
import WearBox from "./WearBox/WearBox";
import obj from "../../../objDB.js";
import BTNowerflow from "./BTNowerflow/BTNowerflow.jsx" 

const Sales = () => {
    return (
        <div>
            <div className={styles.buyFast}><p>Успей купить! </p></div>
            <div className={styles.sales}>Акции</div>
            <div className={styles.salesHolder}>
                <div className={styles.boxWearHolder}>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                </div>
                
            </div>
            <BTNowerflow />
        </div>
    );
};

export default Sales;