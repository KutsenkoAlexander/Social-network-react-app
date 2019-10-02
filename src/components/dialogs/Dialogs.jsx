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
};

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.text}
        </div>
    );
};

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Jim'}
    ];

    let messages = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Hi'},
        {id: 3, text: 'Yo!'},
        {id: 4, text: 'How are you doing?'}
    ];

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message text={m.text} id={m.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogElements}
            </div>
            <div className={style.dialog_messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;