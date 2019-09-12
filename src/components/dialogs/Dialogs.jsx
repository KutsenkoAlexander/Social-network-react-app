import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/'+props.id;
    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.text}
        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='John' id='2'/>
                <DialogItem name='Bob' id='3'/>
                <DialogItem name='Jim' id='4'/>
            </div>
            <div className={style.dialog_messages}>
                <Message text='Hello'/>
                <Message text='Hi'/>
                <Message text='Yo!'/>
                <Message text='How are you doing?'/>
            </div>
        </div>
    );
}

export default Dialogs;