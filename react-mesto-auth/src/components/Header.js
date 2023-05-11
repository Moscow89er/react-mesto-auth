import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header_logo.svg';

function Header({ loggedIn }) {
    const location = useLocation();

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип место"/>
            {
                loggedIn ? 
                <p className="header__email">nickthegreat@ya.ru</p> :
                null
            }
            {
                loggedIn ?
                <Link to="/sign-in" className="header__link">Выйти</Link> :
                (<>
                {
                    location.pathname === "/sign-up" ?
                    <Link to="sign-in" className="header__link">Войти</Link> :
                    <Link to="/sign-up" className="header__link">Регистрация</Link>
                }
                </>)
            }
        </header>
    );
}

export default Header;