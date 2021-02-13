import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Marty'},
        {id: 3, name: 'Tom'},
        {id: 4, name: 'Jerry'},
        {id: 5, name: 'Barbara'}
    ];

    let messages = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Morning!'},
        {id: 3, text: 'Yo'}
    ];

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {
                    dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    messages.map(message => <Message id={message.id} text={message.text}/>)
                }
            </div>
        </div>
    );
}

export default Dialogs;