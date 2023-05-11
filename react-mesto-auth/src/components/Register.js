import { Link } from "react-router-dom";

function Register () {
    return (
        <section className="form form-register">
            <h1 className="form__title form__title-register">Регистрация</h1>
            <form className="form__type__form">
                <input
                    type="text"
                    placeholder="Email"
                    className="form__input form__input-register"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="form__input form__input-register"
                />
                <button 
                    type="submit"
                    className="form__submit-button form__submit-button-register"
                    >Зарегистрироваться
                </button>
            </form>
            <Link to="/sign-in" className="form__link form__link-register">Уже зарегистрированы? Войти</Link>
        </section>
    )
}

export default Register;