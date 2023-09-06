class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupElementCloseBtn =
      this._popupElement.querySelector(".modal__close");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal_is-opened") ||
        evt.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });

    this._popupElementCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }

  open() {
    this._popupElement.classList.add("modal_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
}

export default Popup;
