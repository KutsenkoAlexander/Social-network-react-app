import {Field, Form} from "react-final-form";
import FormStateToRedux from "../Common/FormState/FormStateToRedux";
import React from "react";

const LoginForm = (props) => (
    <Form onSubmit={props.onSubmit}
          initialValues={{username: '', password: '', rememberMe: false}}
          subscription={{submitting: true, pristine: true}}>
        {({handleSubmit, form, submitting, pristine}) => (
            <form onSubmit={handleSubmit}>
                <FormStateToRedux form="login"/>
                <div>
                    <Field name={'username'} component={'input'} placeholder={'Username or email'}/>
                </div>
                <div>
                    <Field name={'password'} component={'input'} placeholder={'Password'} type={'Password'}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )}
    </Form>
);

export default LoginForm;