import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.app_navbar}>
            <div className={style.app_item}>
                <NavLink to='/profile' activeClassName={style.app_active_link}>Profile</NavLink>
            </div>
            <div className={style.app_item}>
                <NavLink to='/dialogs' activeClassName={style.app_active_link}>Messages</NavLink>
            </div>
            <div className={style.app_item}>
                <NavLink to='/news' activeClassName={style.app_active_link}>News</NavLink>
            </div>
            <div className={style.app_item}>
                <NavLink to='/music' activeClassName={style.app_active_link}>Music</NavLink>
            </div>
            <div className={style.app_item}>
                <NavLink to ='/settings' activeClassName={style.app_active_link}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;