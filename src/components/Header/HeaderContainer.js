import React from 'react';
import Header from './Header';
import {getAuthUserData, logoutUser} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
})

export default compose(
    connect(mapStateToProps, {getAuthUserData, logoutUser})
)(HeaderContainer);