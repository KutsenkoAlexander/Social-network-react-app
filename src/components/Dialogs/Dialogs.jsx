import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import NewMessageForm from "./NewMessageForm";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                key={dialog.id}
                                                name={dialog.name}
                                                avatar={dialog.avatar}/>);
    let messagesElement =
        props.messages.map(message => <Message id={message.id}
                                               key={message.id}
                                               text={message.text}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElement}</div>
                <NewMessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;