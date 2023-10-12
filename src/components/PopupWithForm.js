import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupElement.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputList = this._popupForm.querySelectorAll(".modal__input");
    const formValues = {};

    inputList.forEach((input) => (formValues[input.name] = input.value));
    console.log(formValues);

    return formValues;
  }

  setButtonText(submit, buttonText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", () => {
      this._data = this._getInputValues();
      this._handleFormSubmit(this._data);
    });

    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
