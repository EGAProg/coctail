import React, { useEffect, useRef } from "react";
import styles from "./DropDownMenu.module.css";

const DropDownMenu = ({active, setActive}) => {
    const ref = useRef(null);
    const { onClickOutside } = active;

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ onClickOutside ]);
    
      if(!active) return null;

    return (
        <div id="menuDropdown" className={active ? styles.active : styles.Hidden}>
            {
                // this.addEventListener("click", (e) => {
                //     if (!document.querrySelector("#menuDropdown").contains(e.target)) {
                //         setActive(false);
                //     }
                // })
            }
            <img className={styles.logo} src="/logo.png" alt=" "></img>
            <p>Женщинам</p>
            <p>Мужчинам</p>
            <p>Детям</p>
            <p>Обувь</p>
            <p>Игрушки</p>
            <p>Аксессуары</p>
            <p>Юольшие размеры</p>
            <p>Дополнительно</p>
            <p>Акции</p>
            <p onClick={() => setActive(false)}>Закрыть</p>
        </div>
    )
    
};

export default DropDownMenu;