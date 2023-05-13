import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header_logo.svg';

function Header({ loggedIn, email, onSignOut }) {
    const location = useLocation();

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип место"/>
            {
                loggedIn ? 
                <p className="header__email">{email}</p> :
                null
            }
            {
                loggedIn ?
                <button onClick={onSignOut} className="header__link">Выйти</button> :
                (<>
                {
                    location.pathname === "/sign-in" ?
                    <Link to="/sign-up" className="header__link">Регистрация</Link> :
                    <Link to="sign-in" className="header__link">Войти</Link>
                }
                </>)
            }
        </header>
    );
}

export default Header;