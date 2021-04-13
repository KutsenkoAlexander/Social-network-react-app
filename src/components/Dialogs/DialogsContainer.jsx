import {sendMessage} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';
import React from "react";
import {getDialogsSelector, getMessagesSelector} from "../../redux/dialogSelector";

const DialogsContainer = React.memo(props => {
    const sendMessage = async values => {
        props.sendMessage(values.newMessageText);
    }

    return <Dialogs sendMessage={sendMessage}
                        dialogs={props.dialogs}
                        messages={props.messages}/>
});

const mapStateToProps = (state) => {
    return {
        dialogs: getDialogsSelector(state),
        messages: getMessagesSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer);