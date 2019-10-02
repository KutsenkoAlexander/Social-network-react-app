import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://images.vexels.com/media/users/3/142743/isolated/preview/9899362db1352da66f38b5d35d60eb8f-icono-de-anillos-de-pintura-colorida-by-vexels.png" alt="Logo"/>
            <h3>company name</h3>
        </header>
    );
};

export default Header;