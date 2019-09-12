import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active_link}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active_link}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active_link}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active_link}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to ='/settings' activeClassName={style.active_link}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;