import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to='News'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt="logo" />
            </NavLink>
        </header>
    );
}

export default Header;