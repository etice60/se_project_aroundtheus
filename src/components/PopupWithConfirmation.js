import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupElement.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
  }

  open(cardData) {
    super.open();
    this._cardData = cardData;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setButtonText(submit, buttonText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setAction(action) {
    this._handleFormSubmit = action;
  }

  handleSubmit(event) {
    event.preventDefault();
    this._handleFormSubmit(this._cardData);
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) =>
      this.handleSubmit(event)
    );
    super.setEventListeners();
  }
}

export default PopupWithConfirmation;
