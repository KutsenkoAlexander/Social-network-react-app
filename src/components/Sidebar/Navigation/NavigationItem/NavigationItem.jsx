import React from "react";
import styles from "./NavigationItem.module.css";
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <div className={styles.item}>
            <NavLink to={props.path}
                     activeClassName={styles.activeLink}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default NavigationItem;