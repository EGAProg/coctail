import React from "react";
import styles from "./InviteEmployee.module.css";

const InviteEmployee = () => {
    return (
        <div className={styles.Holder}>
            <div className={styles.InnerHolder}>
                <div className={styles.InfoHolder}>
                    <h3 className={styles.h3}>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</h3>
                    <div>
                        <input type="text" placeholder="Ваше имя"></input>    
                    </div>
                    <div>    
                        <input type="text" placeholder="Номер телефона"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Электронная почта"></input>
                    </div>
                    <div className={styles.personalDataAgree}>
                        <div className={styles.smoolBTN}></div>
                        <p>Даю согласие на обработку перональных данных</p>
                    </div>
                    <div className={styles.agreeBTN}><p>Отправить →</p></div>
                </div>
            </div>
        </div>
    );
};

export default InviteEmployee;