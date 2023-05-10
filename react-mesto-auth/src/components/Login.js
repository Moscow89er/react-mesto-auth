import { Link } from "react-router-dom";

function Login () {
    return (
        <section className="form form-login">
            <h1 className="form__title form__title-login">Вход</h1>
            <form className="form__type__form">
                <input
                    type="text"
                    placeholder="Email"
                    className="form__input form__input-login"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="form__input form__input-login"
                />
                <Link
                    to="/"
                    className="form__submit-button form__submit-button-login"
                    >Войти
                </Link>
            </form>
        </section>
    )
}

export default Login;