import React from "react";
import Body from "./Body/Body";
import styles from "./Wrapper.module.css";
import Catalog from "./Catalog/Catalog";
import Watched from "./Catalog/Watched/Watched";
import { Route, Routes } from "react-router-dom";
// import Footer from "./Footer/Footer";
import Working from "./Working/Working";
const Wrapper = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <Routes>
                <Route exact path="/" element={<Body />}/>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/workings" component={<Working />} />
                <Route path="/catalog/watched" element={<Watched />} />
            </Routes>
            
        </div>
        
        </>
    )

};

export default Wrapper;