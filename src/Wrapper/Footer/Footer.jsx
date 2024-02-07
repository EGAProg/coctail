import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={[styles.block]}>
                <h4 className={styles.innerTitle}>Информация</h4>
                <p className={styles.innerText}>Главная</p>
                <p className={styles.innerText}>Акции</p>
                <p className={styles.innerText}>Каталог</p>
                <p className={styles.innerText}>Возврат</p>
                <p className={styles.innerText}>Доставка</p>
                <p className={styles.innerText}>Партнерам</p>
                <p className={styles.innerText}>Способ оплаты</p>
                <p className={styles.innerText}>Как сделать заказ</p>
            </div>
            <div className={[styles.block]}>
                <h4 className={styles.innerTitle}>Мой кабинет</h4>
                <p className={styles.innerText}>Мои заказы</p>
                <p className={styles.innerText}>Мои адреса</p>
                <p className={styles.innerText}>Мои скидки</p>
                <p className={styles.innerText}>Моя информация</p>
            </div>
            <div className={[styles.block]}>
                <h4 className={styles.innerTitle} id={styles.infoID}>Контактная информация</h4>
                <p className={[styles.infoPole]}>
                    ИП Вишневский Иван Сергеевич
                    государственная регистрация №690867884 от 31.07.2020. 
                    Логойским горисполкомом
                    Защита прав потребителей +375259990755
                </p>
            </div>
            <div className={[styles.block]}>
                <h4 className={styles.innerTitle}>Соц. сети</h4>
                <div className={[styles.iconHollder]}>
                    <img src="/icons/tg.svg" alt=" "></img>
                </div>
                <div className={styles.SHIT}>
                    <img src="/icons/phone.svg" alt=" "></img>
                    <p className={styles.innerTextInfo}>+375255990755</p>
                </div>
                <div className={styles.SHIT}>
                    <img src="/icons/clock.svg" alt=" "></img>
                    <p className={styles.innerTextInfo}>круглосуточно, без выходных</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;