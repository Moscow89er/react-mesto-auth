import React from 'react';
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import useFormValidator from '../utils/useFormValidator.js';

function Login ({ onLoggedIn, openInfoTooltip, onError }) {
    const { formValues, handleInputChange, setFormValues } = useFormValidator();
    
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!formValues.password || !formValues.email) {
            return;
        }
        auth.authorize(formValues.password, formValues.email)
            .then((data) => {
                if (data.token) {
                    setFormValues({password:'', email: ''});
                    onLoggedIn();
                    navigate('/', {replace: true});
                }
            })
            .catch((err) => {
                onError(true);
                openInfoTooltip(true);
                console.log(err);
            });
    }

    return (
        <section className="form form-login">
            <h1 className="form__title form__title-login">Вход</h1>
            <form onSubmit={handleSubmit} className="form__type__form">
                <input
                    value={formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input form__input-login"
                    required
                />
                <input
                    value={formValues.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="form__input form__input-login"
                    required
                />
                <button
                    type="submit"
                    className="form__submit-button form__submit-button-login"
                    >Войти
                </button>
            </form>
        </section>
    )
}

export default Login;