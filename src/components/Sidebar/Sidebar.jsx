import React from "react";
import styles from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <Navigation/>
            <Friends friends={props.friends}/>
        </div>
    );
}

export default Sidebar;