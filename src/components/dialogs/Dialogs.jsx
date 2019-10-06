import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message text={m.text} id={m.id}/>);

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