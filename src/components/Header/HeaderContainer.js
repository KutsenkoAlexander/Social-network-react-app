import React from 'react';
import Header from './Header';
import {logoutUser} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {fetchIsAuthSlc} from "../../redux/authSelector";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state) => ({
    isAuth: fetchIsAuthSlc(state),
    login: state.auth.login,
    profile: state.auth.profile
})

export default compose(
    connect(mapStateToProps, {logoutUser})
)(HeaderContainer);