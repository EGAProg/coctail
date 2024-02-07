import React from "react";
import styles from "./Body.module.css"
import WhyUs from "./WhyUs/WhyUs";
import BTNS from "./BTNS/BTNS";
import Sales from "./Sales/Sales";
import Reviews from "./Reviews/Reviews";
import HalfCircle from "./HalfCircle/HalfCircle";
import FAQ from "./FAQ/FAQ";
import Cooperation from "./Cooperation/Cooperation";
import InviteEmployee from "./InviteEmployee/InviteEmployee";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Body = (props) => {
    return (
        <>
        <Header />
                <div className={styles.body}>
                    <div className={styles.bodyInner}>
                        <div className={styles.holder}>
                            <div className={styles.holderShirt}>
                                <img src={"./images/shirt.png"} alt=" " className={styles.shirt}></img>
                            </div>
                            <div className={styles.Texted}>
                                <div className={styles.headersTexted}>
                                    <h2 className={styles.wellcome}>Добро пожаловать в <h2 className={styles.coctail}>Cocteil</h2></h2>
                                </div>
                                <div className={styles.par} >
                                    <p>Экономим Ваше время!</p>
                                    <p>Предлагаем лучшие цены!</p>
                                    <p>Доставляем в кратчайшие сроки!</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.holderJEans}>
                            <img src={"./images/jeans.png"} alt=" " className={styles.jeans}></img>
                        </div>
                    </div>
                        <NavLink to="/catalog">
                            <div className={styles.catalog}>
                                <p className={styles.catalogPar}>Каталог</p>
                                {/* <img src={"/icons/catalog.svg"} alt=" " className={styles.cat} fill="#FFF"></img>  */}
                            </div>
                        </NavLink>
                    <HalfCircle />
                    <WhyUs />
                    
                    <Sales />
                    <Reviews />
                    <HalfCircle />
                    <FAQ />
                    <Cooperation />
                    <InviteEmployee />
                </div>
            <BTNS />
            <Footer />
        </>
    );
};

export default Body;