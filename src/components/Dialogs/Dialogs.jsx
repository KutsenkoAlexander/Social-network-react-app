import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                      name={dialog.name}
                                                      avatar={dialog.avatar}/>);
    let messagesElement =
        props.state.messages.map(message => <Message id={message.id}
                                                     text={message.text}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElement}</div>
                <div className={styles.newMessage}>
                    <textarea ref={newMessageElement}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;