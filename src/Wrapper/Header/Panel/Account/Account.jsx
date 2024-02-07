import React, {useEffect, useState} from "react";
// import styles from "./Account.module.css";
import usersArray from "../usersArray/usersArray";
import Loggined from "./Loggined/Loggined";
import RegLogModal from "./Loggined/RegLogModal/RegLogModal";
import "react-dom"

const Account = ({active, setActive}) => {
    const [items] = useState([]);
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(usersArray));
    }, [items]);
    
        if (true) {
            
            return <RegLogModal active={active} setActive={setActive}/>   
        }
        else {
            localStorage.removeItem('items');
            usersArray[1].loggined = true;
            localStorage.setItem('items', JSON.stringify(usersArray));
            return <Loggined active={active} setActive={setActive} uname={usersArray[1].name}/>
        }

};

export default Account;