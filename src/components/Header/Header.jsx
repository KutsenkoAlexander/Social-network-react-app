import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
import userAvatar from '../../assets/img/avatar.jfif';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'
                 className={`${style.logo} ${style.logoSize}`}
                 alt='logo'
                 title='Logo'
            />
            <h1>Company name</h1>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <img alt={'avatar'} src={props.profile.photos.small ? props.profile.photos.small : userAvatar}/>
                            <p>{props.profile.fullName}</p>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;