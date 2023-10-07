class Card {
  constructor(
    { name, link, _id },
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    isLiked
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._id = _id;
    this._isLiked = isLiked;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  getId() {
    return this._id;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("mousedown", () => {
        this._handleLikeClick(this);
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

  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  setLikes(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
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

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    //this._isLiked = this._cardElement.querySelector(".card__like-button");
    this._renderLikes();
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
