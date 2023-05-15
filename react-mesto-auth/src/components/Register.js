import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import useFormValidator from '../utils/useFormValidator.js';

function Register ({ openInfoTooltip, onError }) {
    const { formValues, handleInputChange } = useFormValidator();

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const {password, email} = formValues;
        auth.register(password, email)
            .then(() => {
                onError(false);
                openInfoTooltip(true);
                navigate('/sign-in', {replace: true});
            })
            .catch((err) => {
                onError(true);
                openInfoTooltip(true);
                console.log(err);
            });
    }

    return (
        <section className="form form-register">
            <h1 className="form__title form__title-register">Регистрация</h1>
            <form onSubmit={handleSubmit} className="form__type__form">
                <input
                    value={formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input form__input-register"
                    required
                />
                <input
                    value={formValues.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="form__input form__input-register"
                    required
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