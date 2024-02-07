import React from "react";
import styles from "./RegLogModal.module.css";
import "./RegLogModal.module.css"
import usersArray from "../../../usersArray/usersArray";

const RegLogModal = ({active, setActive}) => {
    function logIn() {
        const email = document.querySelector('#email').value;
        const pass = document.querySelector('#pass').value;
        const errMsg = "NOPE";

        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].name === email && usersArray[i].passwd === pass) {
                // React.Component.render(null);
                console.log('TRUE')
                localStorage.removeItem('items');
                usersArray[i].loggined = true;
                localStorage.setItem('items', JSON.stringify(usersArray));
                setActive(false);
            }
            else console.log(errMsg);
        }
    }



    return(
        <div className={active ? [styles.active] : styles.Holder}>
            <div className={styles.reg}> 
                <h3 className={styles.LogInToYourAccount}>Вход в личный кабинет</h3>
                <div className={styles.EmailHolder}>
                    <input type="text" className={styles.EMail} id="email" placeholder="Электронная почта"></input>
                </div>
                <div className={styles.PasswordHolder}>
                <input type="password" className={styles.Passwd} id="pass" placeholder="Пароль"></input>
                </div>
                <div className={styles.ForegotHoler}>
                    <p className={styles.ForegotText}>Не помню пароль</p>
                </div>
                <div className={styles.btns}>
                    <div className={styles.LogIn} onClick={logIn}><p className={styles.LogInText}>Войти в кабинет</p></div>
                    <div className={styles.Reg}><p className={styles.RegText}>Регистрация</p></div>
                </div>
                {/* {errMsg} */}
            </div>
            <div className={styles.closeButton} onClick={() => setActive(false)}>
                <img src="/icons/close.svg" id={styles.cir} alt="Close" onClick={() => setActive(false)}></img>
                <img src="/icons/closeInner.svg" alt=" " className={styles.X} onClick={() => setActive(false)}></img>
            </div>
            {/* <div className={[styles.closeButton, styles.closeHovver]} display="none">
                <img src="/icons/closeHovered.svg" alt="Close"></img>
                <img src="/icons/closeInnerHover.svg" className={[styles.XHovered, styles.X]}></img>
            </div> */}
        </div>
    )

};

export default RegLogModal;