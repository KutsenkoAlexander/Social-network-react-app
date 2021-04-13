import React from 'react';
import Header from './Header';
import {logoutUser} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCurrentProfileSelector, getIsAuthSelector, getLoginSelector} from "../../redux/authSelector";

const HeaderContainer = React.memo((props) => {
    return <Header {...props}/>
});

const mapStateToProps = (state) => ({
    isAuth: getIsAuthSelector(state),
    login: getLoginSelector(state),
    profile: getCurrentProfileSelector(state)
})

export default compose(
    connect(mapStateToProps, {logoutUser})
)(HeaderContainer);