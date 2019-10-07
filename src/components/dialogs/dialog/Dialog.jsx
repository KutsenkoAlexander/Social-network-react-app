import React from 'react';
import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/'+props.id;
    return(
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/blond_boy_face_avatar-512.png" alt='avatar'/>
                    <span>{props.name}</span>
                </div>
            </NavLink>
        </div>
    );
};

export default DialogItem;