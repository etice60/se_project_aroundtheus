//const cardImageModal = document.querySelector("#card-image");
//const cardPreviewImage = document.querySelector(".modal__card-image-preview");
//const cardPreviewTitle = document.querySelector(".modal__title");
//const cardImage = document.querySelector(".card__image");

class Card {
  constructor(
    { name, link, _id },
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._id = _id;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  getId() {
    return this._id;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.handleLikeClick(this);
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this);
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        //this._handlePreviewPicture();
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

  deleteCard() {
    this._handleDeleteCard();
  }

  // handleModalDeleteButton() {
  //   this._modalDeleteButton.addEventListener("click", () => {
  //     this._cardElement.remove();
  //   });
  // }

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
