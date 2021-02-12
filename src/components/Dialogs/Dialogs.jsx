import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to="/dialogs/1">Bob</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2">Marty</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3">Tom</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4">Ben</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/5">Barbara</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>Morning!</div>
                <div className={styles.message}>Yo!</div>
            </div>
        </div>
    );
}

export default Dialogs;