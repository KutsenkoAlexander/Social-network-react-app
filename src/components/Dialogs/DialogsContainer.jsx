import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessageContainer = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageTextContainer = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return <Dialogs dialogs={state.dialogPage.dialogs}
                    messages={state.dialogPage.messages}
                    newMessageText={state.dialogPage.newMessageText}
                    sendMessage={sendMessageContainer}
                    updateNewMessageText={updateNewMessageTextContainer}
    />;
}

export default DialogsContainer;