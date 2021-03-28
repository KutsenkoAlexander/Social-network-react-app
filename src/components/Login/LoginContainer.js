import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {loginUser} from "../../redux/authReducer";

class LoginContainer extends React.Component {
    _captcha = 'DFECi';

    onSubmit = async values => {
        this.props.loginUser(values.username, values.password, values.rememberMe, this._captcha);
    }

    render() {
        return <LoginForm onSubmit={this.onSubmit}/>
    };
}

const mapStateToProps = (state) => ({})

export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);
