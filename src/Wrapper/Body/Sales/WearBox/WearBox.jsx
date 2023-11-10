import React from "react";
import styles from "./WearBox.module.css";
import Stars from "./Stars/Stars";
import obj from "../../../../objDB.js";

class WearBoxClass extends React.Component {
    render() {
      const children = <Stars stars={obj[0].StarImgUrl}/>
      for (let i = 0; i < obj[0].StarsCount; i++) {

        // React.Component.Children.appendChild(children);

        return (
            <div className={styles.starHolder}>
                {children}
            </div>
        );
      }
    }
  }

const WearBox = () => {
    return (
        <div className={styles.WearBox}>
            <div className={styles.boxPhoto}>
                <img src={obj[0].Photo} className={styles.WearBoxPhoto} alt=" "></img>
            </div>
            <div className={styles.divHolder}>
                <div className={styles.boxBuy}>
                    <p className={styles.price}>{obj[0].Price}.0 Р</p>
                    <p className={styles.more}>{obj[0].Name}</p>
                </div>
                <div className={styles.imgs}>
                    <img className={styles.fav} src="/icons/favorites.svg" alt="+"></img>
                    <img className={styles.bag} src="/icons/shoppingBag.svg" alt="B"></img>
                </div>
            </div>
            <div className={styles.MoreAndStars}>
                <div className={styles.btnBuy}><p>Подробнее</p></div>
                <div className={styles.ShitHolder}>
                    <WearBoxClass />
                    <WearBoxClass />
                    <WearBoxClass />
                    <WearBoxClass />
                </div>
            </div>
        </div>
    );
};

export default WearBox;