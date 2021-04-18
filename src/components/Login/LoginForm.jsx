import {Field, Form} from 'react-final-form';
import FormStateToRedux from '../Common/FormControls/FormStateToRedux';
import React from 'react';
import {composeValidators, minValue, required} from '../../utils/validators';
import {Input} from '../Common/FormControls/FormControls';

const LoginForm = ({onSubmit}) => (
    <Form onSubmit={onSubmit}
          initialValues={{username: '', password: '', rememberMe: false}}
          render={({submitError, handleSubmit, form, submitting, pristine}) => (
              <form onSubmit={handleSubmit}>
                  <FormStateToRedux form="login"/>
                  <div>
                      <Field name={'username'}
                             component={Input}
                             placeholder={'Username or email'}
                             validate={composeValidators(required)}/>
                  </div>
                  <div>
                      <Field name={'password'}
                             component={Input}
                             placeholder={'Password'}
                             type={'Password'}
                             validate={composeValidators(required, minValue(6))}/>
                  </div>
                  <div>
                      <Field name={'rememberMe'}
                             component={'input'}
                             type={'checkbox'}/>Remember me
                  </div>
                  {submitError && <div className="error">{submitError}</div>}
                  <div>
                      <button>Login</button>
                  </div>
              </form>
          )}/>
);

export default LoginForm;