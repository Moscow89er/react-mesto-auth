function ImagePopup({ card, onClose }) {
    return (
        <section className={`popup popup_picture ${card ? "popup_opened" : ""}`}>
            <div className="popup__container-picture">
                <img
                    src={card ? card.link : ""}
                    className="popup__image"
                    alt={card ? card.name : ""}
                />
                <h2 className="popup__title popup__title-picture">{card ? card.name : ""}</h2>
                <button
                    onClick={onClose}
                    type="button"
                    className="popup__close-button">
                </button>
            </div>
        </section>
    );
}

export default ImagePopup;