import {sendMessage} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';
import React from "react";

class DialogsContainer extends React.Component {
    sendMessage = async values => {
        this.props.sendMessage(values.newMessageText);
    }

    render() {
        return <Dialogs sendMessage={this.sendMessage}
                        dialogs={this.props.dialogs}
                        messages={this.props.messages}/>
    };
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer);