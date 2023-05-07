import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import useFormValidator from '../utils/useFormValidator.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const avatarRef = useRef('');
    const { formValues, formErrors, isValid, handleInputChange, resetForm } = useFormValidator(); 

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    };

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }

        avatarRef.current.value = null;
    }, [isOpen, resetForm]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isFormValid={isValid}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            buttonLoadingText="Сохранение..."
        >
            <input
                ref={avatarRef}
                id="avatarlink"
                type="url"
                name="avatarlink"
                onChange={handleInputChange}
                placeholder="Ссылка на аватар"
                className="popup__input popup__input_type_avatarlink"
                required
            />
            {!isValid && formValues.avatarlink && <div className="popup__form-error-avatar">{formErrors.avatarlink}</div>}
        </PopupWithForm>
    );
}

export default EditAvatarPopup;