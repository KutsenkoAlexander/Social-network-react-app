import React from "react";
import styles from "./Sidebar.module.css";
import NavigationContainer from "./Navigation/NavigationContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <NavigationContainer/>
            <FriendsContainer/>
        </div>
    );
}

export default Sidebar;