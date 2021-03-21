import {sendMessage, updateNewMessageText} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialogs);