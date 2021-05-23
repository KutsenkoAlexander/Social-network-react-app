import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {loginUser} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import {FORM_ERROR} from 'final-form';
import {getIsAuthSelector} from "../../redux/authSelector";

const LoginContainer = React.memo(({loginUser, isAuth, captchaUrl}) => {
    const onSubmit = async (values) => {
        return {
            [FORM_ERROR]: await loginUser(
                values.username,
                values.password,
                values.rememberMe,
                values.captcha
            )
        }
    }

    return <div>
        {(isAuth) ? <Redirect to={'/profile'}/> : <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>}
    </div>
})

const mapStateToProps = (state) => ({captchaUrl: state.auth.captchaUrl, isAuth: getIsAuthSelector(state)})

export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);
