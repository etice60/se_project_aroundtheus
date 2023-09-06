//const cardImageModal = document.querySelector("#card-image");
//const cardPreviewImage = document.querySelector(".modal__card-image-preview");
//const cardPreviewTitle = document.querySelector(".modal__title");
//const cardImage = document.querySelector(".card__image");

class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        // this._handlePreviewPicture();
        this._handleCardClick(this._name, this._link);
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  // _handlePreviewPicture() {
  //   cardPreviewImage.src = this._link;
  //   cardPreviewImage.alt = this._name;
  //   cardPreviewTitle.textContent = this._name;
  //   openModal(cardImageModal);
  // }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._renderCard();
    this._setEventListeners();
    return this._cardElement;
  }
  _renderCard() {
    this._cardElement.querySelector(".card__title").innerText = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
  }
}

export default Card;
