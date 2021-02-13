import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name;
    return(
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.active}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;