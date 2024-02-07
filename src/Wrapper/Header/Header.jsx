import React, {useState} from "react";
import styles from "./Header.module.css";
import Panel from "./Panel/Panel";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

const Header = () => {
    // function useOutsideAlerter(ref) {
    //     useEffect(() => {
    //       function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //           alert("You clicked outside of me!");
    //         }
    //       }
    //       // Bind the event listener
    //       document.addEventListener("mousedown", handleClickOutside);
    //       return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //       };
    //     }, [ref]);
    // }
    const [activeModal, setActiveModal] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.dropdown} onClick={() => {setActiveModal(true)}}>
                <img src={"/icons/clarity_menu-line.svg"} alt=" "></img>
            </div>
            <DropDownMenu active={activeModal} setActive={setActiveModal}/>
            <Panel />
        </header>
    )

};

export default Header;