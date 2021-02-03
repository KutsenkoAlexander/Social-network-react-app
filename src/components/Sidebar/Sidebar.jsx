import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return <nav className={styles.sidebar}>
        <div className={styles.item}>
            <a>Profile</a>
        </div>
        <div className={styles.item}>
            <a>Message</a>
        </div>
        <div className={styles.item}>
            <a>News</a>
        </div>
        <div className={styles.item}>
            <a>Music</a>
        </div>
        <div className={styles.item}>
            <a>Settings</a>
        </div>
    </nav>;
}

export default Sidebar;