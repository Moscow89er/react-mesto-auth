import { Link } from 'react-router-dom';
import headerLogo from '../images/header_logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип место"/>
            <p className="header__email">nickthegreat@ya.ru</p>
            <Link to="" className="header__link">Выйти</Link>
        </header>
    );
}

export default Header;