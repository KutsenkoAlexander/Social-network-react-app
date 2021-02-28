import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let dialogPage = store.getState().dialogPage;

                let sendMessageContainer = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let updateNewMessageTextContainer = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return (<Dialogs dialogs={dialogPage.dialogs}
                                 messages={dialogPage.messages}
                                 newMessageText={dialogPage.newMessageText}
                                 sendMessage={sendMessageContainer}
                                 updateNewMessageText={updateNewMessageTextContainer}
                />);
            }
        }
    </StoreContext.Consumer>;
}

export default DialogsContainer;