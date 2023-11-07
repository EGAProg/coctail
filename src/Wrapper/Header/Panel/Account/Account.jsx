import React from "react";
import styles from "./Account.module.css";

const Account = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <div src="/images/wearPlaceHolder.jpg" alt="avatar" id={styles.AccountAva}></div>
                </div>
                <div className={styles.name}><p>Placeholder</p></div>
            </div>
            <div className={[styles.busket]}>
                <div className={styles.busketInner}>
                    <img src="/icons/busket.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>Корзина</p>
                </div>
            </div>
            <div className={[styles.tovs]}>
                <div className={styles.fav}>
                    <img src="/icons/favorites.svg" alt="Busket"></img>
                    <p className={[styles.busketText]}>Избранное</p>
                </div>
                <div className={styles.looked}>
                    <img src="/icons/look.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>Просмотренные</p>
                </div>
            </div>
            <div className={[styles.personal]}>
                <div className={styles.bonuses}>
                    <img src="/icons/Bonus.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>Бонусы</p>
                </div>
                <div className={styles.personalData}>
                    <img src="/icons/avatar.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>Личные данны</p>
                </div>
                <div className={styles.shoppingHistory}>
                    <img src="/icons/history.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>История покупок</p>
                </div>
            </div>
            <div className={styles.exitHolder}>
                <div className={styles.exit}>
                    <img src="/icons/exit.svg" alt="Busket"></img>
                    <p className={[styles.TextInner, styles.busketText]}>Выйти</p>
                </div>
            </div>
        </div>
    );
};

export default Account;