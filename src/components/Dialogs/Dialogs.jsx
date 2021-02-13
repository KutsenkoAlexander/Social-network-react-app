import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {
                    props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    props.messages.map(message => <Message id={message.id} text={message.text}/>)
                }
            </div>
        </div>
    );
}

export default Dialogs;