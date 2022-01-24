import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

console.log(style);

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink className={NavData => NavData.isActive ? style.active : style.link} to='Profile'>Profile</NavLink></div>
            <div className={style.item}><NavLink className={NavData => NavData.isActive ? style.active : style.link} to='Massages'>Massages</NavLink></div>
            <div className={style.item}><NavLink className={NavData => NavData.isActive ? style.active : style.link} to='News'>News</NavLink></div>
            <div className={style.item}><NavLink className={NavData => NavData.isActive ? style.active : style.link} to='Music'>Music</NavLink></div>
            <div className={style.item}><NavLink className={NavData => NavData.isActive ? style.active : style.link} to='Settings'>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;