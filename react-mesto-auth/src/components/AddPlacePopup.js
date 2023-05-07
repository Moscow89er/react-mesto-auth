import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import useFormValidator from '../utils/useFormValidator.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const cardnameRef = useRef('');
    const cardlinkRef = useRef('');
    const { formValues, formErrors, isValid, handleInputChange, resetForm } = useFormValidator(); 

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddPlace({
            name: cardnameRef.current.value,
            link: cardlinkRef.current.value
        });
    };

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }

        cardnameRef.current.value = '';
        cardlinkRef.current.value = '';
    }, [isOpen, resetForm]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            buttonLoadingText="Сохранение..."
            name="add"
            title="Новое место"
            buttonText="Создать"
            isFormValid={isValid}
        >
            <input
                ref={cardnameRef}
                id="cardname"
                type="text"
                name="cardname"
                onChange={handleInputChange}
                placeholder="Название"
                className="popup__input popup__input_type_cardname"
                minLength={2}
                maxLength={30}
                required
            />
            {!isValid && formValues.cardname && <div className="popup__form-error-cardname">{formErrors.cardname}</div>}
            <input
                ref={cardlinkRef}
                id="cardlink"
                type="url"
                name="cardlink"
                onChange={handleInputChange}
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_cardlink"
                required
            />
            {!isValid && formValues.cardlink && <div className="popup__form-error-cardlink">{formErrors.cardlink}</div>}
        </PopupWithForm>
    );
}

export default AddPlacePopup;