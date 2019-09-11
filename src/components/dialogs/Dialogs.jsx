import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.app_dialogs}>
            <div className={style.app_dialog_items}>
                <div className={style.app_dialog + ' ' + style.active}>
                    Alex
                </div>
                <div className={style.app_dialog}>
                    John
                </div>
                <div className={style.app_dialog}>
                    Bob
                </div>
                <div className={style.app_dialog}>
                    Jim
                </div>
            </div>
            <div className={style.app_dialog_messages}>
                <div className={style.app_message}>
                    Hello
                </div>
                <div className={style.app_message}>
                    Hi
                </div>
                <div className={style.app_message}>
                    What's up
                </div>
                <div className={style.app_message}>
                    How are you doing
                </div>
            </div>
        </div>
    );
}

export default Dialogs;