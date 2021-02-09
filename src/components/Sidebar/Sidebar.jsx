import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/dialogs">Message</a>
            </div>
            <div className={styles.item}>
                <a href="/news">News</a>
            </div>
            <div className={styles.item}>
                <a href="/music">Music</a>
            </div>
            <div className={styles.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Sidebar;