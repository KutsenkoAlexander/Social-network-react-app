import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
    _captcha = 'NLBSQf';

    onSubmit = async values => {
        this.props.loginUser(
            values.username,
            values.password,
            values.rememberMe,
            this._captcha
        )
    }

    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'} />
        return <LoginForm onSubmit={this.onSubmit}/>
    };
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);
