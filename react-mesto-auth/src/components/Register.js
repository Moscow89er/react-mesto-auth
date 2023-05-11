import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

function Register ({ setIsInfoTooltipOpen }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
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
        const { password, email } = formValue;
        setIsInfoTooltipOpen(true);
        auth.register(password, email)
            .then(() => {
                navigate('/sign-in', {replace: true});
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsInfoTooltipOpen(false);
            });
    }

    return (
        <section className="form form-register">
            <h1 className="form__title form__title-register">Регистрация</h1>
            <form onSubmit={handleSubmit} className="form__type__form">
                <input
                    value={formValue.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input form__input-register"
                />
                <input
                    value={formValue.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
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