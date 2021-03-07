import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator} from '../../redux/dialogReducer';

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

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage(sendMessageActionCreator());
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElement}</div>
                <div className={styles.newMessage}>
                    <textarea ref={newMessageElement}
                              onChange={updateNewMessageText}
                              value={props.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;