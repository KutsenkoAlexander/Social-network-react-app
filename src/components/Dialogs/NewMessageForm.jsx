import styles from "./Dialogs.module.css";
import React from "react";
import {Form, Field} from "react-final-form";
import FormStateToRedux from "../Common/FormControls/FormStateToRedux";

const NewMessageForm = (props) => (
    <Form onSubmit={props.sendMessage}
          initialValues={{newMessageText: ''}}
          subscription={{submitting: true, pristine: true}}>
        {({handleSubmit, form, submitting, pristine}) => (
            <form className={styles.newMessage} onSubmit={handleSubmit}>
                <FormStateToRedux form="newMessage"/>
                <Field name={'newMessageText'} component={'textarea'}/>
                <button>Send</button>
            </form>
        )}
    </Form>
);

export default NewMessageForm;