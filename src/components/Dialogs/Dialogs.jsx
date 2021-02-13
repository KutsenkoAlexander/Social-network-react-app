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
    let dialogData = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Marty'},
        {id: 3, name: 'Tom'},
        {id: 4, name: 'Jerry'},
        {id: 5, name: 'Barbara'}
    ];

    let messageData = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Morning!'},
        {id: 3, text: 'Yo'}
    ];

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                <DialogItem id={dialogData[3].id} name={dialogData[3].name}/>
                <DialogItem id={dialogData[4].id} name={dialogData[4].name}/>
            </div>
            <div className={styles.messages}>
                <Message id={messageData[0].id} text={messageData[0].text}/>
                <Message id={messageData[1].id} text={messageData[1].text}/>
                <Message id={messageData[2].id} text={messageData[2].text}/>
            </div>
        </div>
    );
}

export default Dialogs;