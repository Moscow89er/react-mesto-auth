import successfullyRegistered from '../images/successfully_registered.png';

function InfoTooltip () {
    return (
        <section className="popup popup__tooltip">
            <div className="popup__container popup__container-tooltip">
                <img src={successfullyRegistered} className="popup__icon"></img>
                <h2 className="popup__title popup__title-tooltip">Вы успешно зарегистрировались!</h2>
                <button type="button" className="popup__close-button"></button>
            </div>
        </section>
    );
}

export default InfoTooltip;