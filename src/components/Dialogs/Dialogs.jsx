import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name;
    return(
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={styles.message}>{props.text}</div>
    );
}

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem id="1" name="Bob"/>
                <DialogItem id="2" name="Marty"/>
                <DialogItem id="3" name="Tom"/>
                <DialogItem id="4" name="Ben"/>
                <DialogItem id="5" name="Barbara"/>
            </div>
            <div className={styles.messages}>
                <Message text="Hi!"/>
                <Message text="Morning!"/>
                <Message text="Yo!"/>
            </div>
        </div>
    );
}

export default Dialogs;