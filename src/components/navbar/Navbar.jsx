import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.app_navbar}>
            <div className={`${styles.app_item} ${styles.app_active}`}>
                <a>Profile</a>
            </div>
            <div className={styles.app_item}>
                <a>Messages</a>
            </div>
            <div className={styles.app_item}>
                <a>News</a>
            </div>
            <div className={styles.app_item}>
                <a>Music</a>
            </div>
            <div className={styles.app_item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;