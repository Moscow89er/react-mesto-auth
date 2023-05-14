import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

function Login ({ onLoggedIn, openInfoTooltip, onError }) {
    const [formValue, setFormValue] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate();

    const handleChange = (evt) => {
        const {name, value} = evt.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!formValue.password || !formValue.email) {
            return;
        }
        auth.authorize(formValue.password, formValue.email)
            .then((data) => {
                if (data.token) {
                    setFormValue({password:'', email: ''});
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
                    value={formValue.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input form__input-login"
                />
                <input
                    value={formValue.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="form__input form__input-login"
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