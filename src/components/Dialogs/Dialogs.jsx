import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                           name={dialog.name}
                                                           avatar={dialog.avatar}/>);
    let messagesElement =
        props.dialogPage.messages.map(message => <Message id={message.id}
                                                          text={message.text}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                              value={props.dialogPage.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;