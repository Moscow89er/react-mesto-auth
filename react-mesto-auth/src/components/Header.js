import headerLogo from '../images/header_logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип место"/>
        </header>
    );
}

export default Header;