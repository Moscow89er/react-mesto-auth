import { Link } from "react-router-dom";

function Register () {
    return (
        <section className="register">
            <h1 className="register__title">Регистрация</h1>
            <form className="register__form">
                <input
                    type="text"
                    placeholder="Email"
                    className="register__input register__input__type_email"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="register__input register__input__type_password"
                />
                <button 
                    type="submit"
                    className="register__submit-button"
                    >Зарегистрироваться
                </button>
            </form>
            <Link to="" className="register__link">Уже зарегистрированы? Войти</Link>
        </section>
    )
}

export default Register;