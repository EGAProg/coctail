import React, {useEffect, useState} from "react";
// import styles from "./Account.module.css";
import usersArray from "../usersArray/usersArray";
import Loggined from "./Loggined/Loggined";
import RegLogModal from "./Loggined/RegLogModal/RegLogModal";
import "react-dom"

const Account = ({active, setActive}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(usersArray));
    }, [items]);
    usersArray.forEach((user) => {
        if (user.loggined === true) {
            localStorage.removeItem('items');
            user.loggined = true;
            localStorage.setItem('items', JSON.stringify(usersArray));
            return <Loggined active={active} setActive={setActive} uname={user.name}/>
        }
    
        else {
            return <RegLogModal active={active} setActive={setActive}/>
        }
    });

};

export default Account;