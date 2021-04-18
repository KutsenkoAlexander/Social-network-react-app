import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {loginUser} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import {FORM_ERROR} from 'final-form';
import {getIsAuthSelector} from "../../redux/authSelector";

const LoginContainer = React.memo(({loginUser, isAuth}) => {
    const onSubmit = async (values) => {
        return {
            [FORM_ERROR]: await loginUser(
                values.username,
                values.password,
                values.rememberMe,
                'NLBSQf'
            )
        }
    }

    return <div>
        {(isAuth) ? <Redirect to={'/profile'}/> : <LoginForm onSubmit={onSubmit}/>}
    </div>
})

const mapStateToProps = (state) => ({isAuth: getIsAuthSelector(state)})

export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);
