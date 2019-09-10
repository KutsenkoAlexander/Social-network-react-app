import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.app_navbar}>
            <div className={styles.app_item}>
                <NavLink to='/profile' activeClassName={styles.app_active_link}>Profile</NavLink>
            </div>
            <div className={styles.app_item}>
                <NavLink to='/dialogs' activeClassName={styles.app_active_link}>Messages</NavLink>
            </div>
            <div className={styles.app_item}>
                <NavLink to='/news' activeClassName={styles.app_active_link}>News</NavLink>
            </div>
            <div className={styles.app_item}>
                <NavLink to='/music' activeClassName={styles.app_active_link}>Music</NavLink>
            </div>
            <div className={styles.app_item}>
                <NavLink to ='/settings' activeClassName={styles.app_active_link}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;