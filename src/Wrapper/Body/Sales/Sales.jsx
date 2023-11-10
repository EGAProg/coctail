import React from "react";
import styles from "./Sales.module.css";
import WearBox from "./WearBox/WearBox";
import obj from "../../../objDB.js";
// import BTNowerflow from "./BTNowerflow/BTNowerflow.jsx" 
import styleBTN from "./BTNowerflow/BTNowerflow.module.css";
// import { useRef, useState } from "react";

const Sales = () => {
    
    // const elementRef = useRef(null);
    // const [arrowDisable, setArrowDisable] = useState(true);
    // const unsplashed = "https://source.unsplash.com/200x200/";
  
    // const handleHorizantalScrollLeft = (element, speed, distance, step) => {
    //     let scrollAmount = 0;
    //     const slideTimer = setInterval(() => {
    //       element.scrollLeft += step;
    //       scrollAmount += Math.abs(step);
    //       if (scrollAmount >= distance) {
    //         clearInterval(slideTimer);
    //       }
    //       if (element.scrollLeft === 0) {
    //         setArrowDisable(true);
    //       } else {
    //         setArrowDisable(false);
    //       }
    //     }, speed);
    //   };
    //   const handleHorizantalScrollRight = (element, speed, distance, step) => {
    //     let scrollAmount = 0;
    //     const slideTimer = setInterval(() => {
    //       element.scrollLeft += step;
    //       scrollAmount += Math.abs(step);
    //       if (scrollAmount >= distance) {
    //         clearInterval(slideTimer);
    //       }
    //       if (element.scrollLeft === 0) {
    //         setArrowDisable(true);
    //       } else {
    //         setArrowDisable(false);
    //       }
    //     }, speed);
    //   };


    return (
        <div>
            <div className={styles.buyFast}><p>Успей купить! </p></div>
            <div className={styles.sales}>Акции</div>
            <div className={styles.salesHolder}>
                <div className={styles.boxWearHolder}>
                    {
                        obj.map((index, item) => (
                            <WearBox 
                            photo={obj[item].Photo.toString()} 
                            name={obj[item].Name} price={obj[0].Price} 
                            StarImgUrl={obj[item].StarImgUrl.toString()} 
                            starCount={obj[item].StarsCount}
                            item={item}/>
                        ))
                    }
                    {/* <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[1].Photo.toString()} name={obj[1].Name} price={obj[1].Price} StarImgUrl={obj[1].StarImgUrl.toString()} starCount={obj[1].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[1].Photo.toString()} name={obj[1].Name} price={obj[1].Price} StarImgUrl={obj[1].StarImgUrl.toString()} starCount={obj[1].StarsCount}/>
                    <WearBox photo={obj[0].Photo.toString()} name={obj[0].Name} price={obj[0].Price} StarImgUrl={obj[0].StarImgUrl.toString()} starCount={obj[0].StarsCount}/>
                    <WearBox photo={obj[1].Photo.toString()} name={obj[1].Name} price={obj[1].Price} StarImgUrl={obj[1].StarImgUrl.toString()} starCount={obj[1].StarsCount}/> */}
                </div> 
                
            </div>
            <div className={styleBTN.BTNOwerflow} >
                <img src="/icons/owerflowBTN.svg" id="right" alt=" " ></img>
                <img src="/icons/owerflowBTN.svg" classname={styles.left}  alt=" "></img>
                {/* <img src="/icons/owerflowBTN.svg" id="right" alt=" " onClick={() => { handleHorizantalScrollLeft(elementRef.current, 25, 100, -10) }}></img>
                <img src="/icons/owerflowBTN.svg" classname={styles.left} alt=" " onClick={() => { handleHorizantalScrollRight(elementRef.current, 25, 100, -10) }}></img> */}
            </div>
        </div>
    );
};

export default Sales;