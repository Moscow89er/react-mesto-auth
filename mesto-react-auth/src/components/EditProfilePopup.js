import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';
import useFormValidator from '../utils/useFormValidator.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);
    const { formValues, formErrors, isValid, handleInputChange, resetForm } = useFormValidator(); 

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }

        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleNameChange(evt) {
        setName(evt.target.value);
    };

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
      
        onUpdateUser({
          name,
          about: description,
        });
    };

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isFormValid={isValid}
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            buttonLoadingText="Сохранение..."
        >
            <input
                onChange={(evt) => {
                    handleNameChange(evt);
                    handleInputChange(evt);
                }}
                value={name || ''}
                id="username"
                type="text"
                name="username"
                placeholder="Имя"
                className="popup__input popup__input_type_username"
                minLength="2"
                maxLength="40"
                required
            />
            {!isValid && formValues.username && <div className="popup__form-error-username">{formErrors.username}</div>}
            <input
                onChange={(evt) => {
                    handleDescriptionChange(evt);
                    handleInputChange(evt);
                }}
                value={description || ''}
                id="about"
                type="text"
                name="about"
                placeholder="Вид деятельности"
                className="popup__input popup__input_type_about"
                minLength="2"
                maxLength="200"
                required
            />
            {!isValid && formValues.about && <div className="popup__form-error-about">{formErrors.about}</div>}
        </PopupWithForm>
    );
}

export default EditProfilePopup;