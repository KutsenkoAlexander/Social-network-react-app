import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'
                 className={`${style.logo} ${style.logoSize}`}
                 alt='logo'
                 title='Logo'
            />
            <h1>Company name</h1>
        </header>
    );
}

export default Header;