import React from "react";
import styles from "./Catalog.module.css";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Watched from "./Watched/Watched";
import Header from "../Header/Header";

const Catalog = (  ) => {
    
    return (
        <>
        <Header />
        <menu>
        <div className={styles.Catalog}>
            <div className={styles.catTitle}><p>Просмотренные товары</p></div>
            <div className={styles.catHolder}>
                <div className={styles.leftSideBar}>
                        <div className={[styles.busket]}>
                            <div className={styles.busketInner}>
                                <img src="/icons/busket.svg" alt="Busket"></img>
                                <p className={[styles.busketText]}>Корзина</p>
                            </div>
                        </div>
                        <div className={[styles.tovs]}>
                            <div className={styles.fav}>
                                <img src="/icons/favorites.svg" alt="Busket"></img>
                                <p className={[styles.busketText]}>Избранное</p>
                            </div>
                            <NavLink to="/catalog/watched">
                                <div className={styles.looked} >
                                    <img src="/icons/look.svg" alt="Busket"></img>
                                    <p className={[styles.busketText]}>Просмотренные</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className={[styles.personal]}>
                            <div className={styles.bonuses}>
                                <img src="/icons/Bonus.svg" alt="Busket"></img>
                                <p className={[styles.busketText]}>Бонусы</p>
                            </div>
                            <div className={styles.personalData}>
                                <img src="/icons/avatar.svg" alt="Busket"></img>
                                <p className={[styles.busketText]}>Личные данны</p>
                            </div>
                            <div className={styles.shoppingHistory}>
                                <img src="/icons/history.svg" alt="Busket"></img>
                                <p className={[styles.busketText]}>История покупок</p>
                            </div>
                        </div>
                        <div className={styles.exitHolder}>
                            <Link to="/">
                                <div className={styles.exit}>
                                    <img src="/icons/exit.svg" alt="Busket"></img>
                                    <p className={[styles.busketText]}>Выйти</p>
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
            
                <Routes>
                    <Route path="/catalog/watched" element={<Watched />} />
                    {/* <Route path="/" element={<Navigate to="/" />} /> */}
                </Routes>
            {/*  */}
        </div>
        </menu>
        </>
    );
};

export default Catalog;