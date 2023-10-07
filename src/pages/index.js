import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Popup from "../components/Popup.js";

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

export const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

export const cardListSelector = ".card__list";

// Wrappers
const cardsWrap = document.querySelector(".card__list");
const editProfileModal = document.querySelector("#edit-modal");
const editProfileSubmitButton =
  editProfileModal.querySelector(".modal__button");
const addCardModal = document.querySelector("#add-card-modal");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardImageModal = document.querySelector("#card-image");
const cardPreviewImage = document.querySelector(".modal__card-image-preview");
const cardPreviewTitle = document.querySelector(".modal__title");
const addCardSubmitButton = addCardModal.querySelector(".modal__button");

// Buttons and other DOM Nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = editProfileModal.querySelector(
  "#modal-close-button"
);
const addCardModalCloseButton =
  addCardModal.querySelector("#card-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const cardPreviewCloseButton = cardImageModal.querySelector(
  ".modal__image-close-button"
);

// Form Data
// 1. make sure both args are profile not input fields
const userInfo = new UserInfo(profileTitle, profileDescription);

const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(
  ".modal__input_type_description"
);

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);

const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

const cardSelector = "#card-template";
/*----------------------------*/
/*         Validation         */
/*----------------------------*/

const settings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormElement = editProfileModal.querySelector(".modal__form");
const addFormElement = addCardModal.querySelector(".modal__form");

/*----------------------*/
/*      popup items     */
/*----------------------*/

const editFormValidator = new FormValidator(settings, editFormElement);
const addFormValidator = new FormValidator(settings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  "#edit-modal",
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

//function renderCard(cardData, wrapper) {
//const newCard = new Card(cardData, cardSelector, handleCardClick);
//cardSection.addItem(newCard.getView());
//}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  cardListSelector
);

cardSection.renderItems();

const imagePreviewPopup = new PopupWithImage("#card-image");
imagePreviewPopup.setEventListeners();

function handleCardClick(name, link) {
  imagePreviewPopup.open(name, link);
}

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data.title, data.description);
  editProfilePopup.close();
}

function createCard(cardData) {
  const newCard = new Card(cardData, cardSelector, handleCardClick);
  cardSection.addItem(newCard.getView());
}

function handleAddCardFormSubmit(data) {
  const newCard = createCard({ name: data.title, link: data.url });
  // cardSection.addItem(newCard);
  addCardPopup.close();
}

function fillProfileForm() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.description;
}

function openProfileForm() {
  fillProfileForm();
  editProfilePopup.open();
}

// Event Listeners
profileEditButton.addEventListener("click", openProfileForm);
profileModalCloseButton.addEventListener("click", () =>
  editProfilePopup.close()
);
addNewCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addCardPopup.open();
});

// Form Listerners
//profileFormElement.addEventListener("submit", handleProfileFormSubmit);
//addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

//profileEditButton.addEventListener("click", () => {
//nameInput.value = profileTitle.textContent;
//jobInput.value = profileDescription.textContent;
//toggleButtonState([nameInput, jobInput], editProfileSubmitButton, config);
//openModal(editProfileModal);
//});

//addCardModalCloseButton.addEventListener("click", () => addCardPopup.close());

//initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

/*[editProfileModal, addCardModal, cardImageModal].forEach((modal) => {
*modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
});*/

//cardSection.addItem(createCard(data));
//evt.preventDefault();
// const name = cardTitleInput.value;
// const link = cardUrlInput.value;
// renderCard({ name, link }, cardsWrap);
//closeModal(addCardModal);
//addCardFormElement.reset();
//toggleButtonState(
// [cardTitleInput, cardUrlInput],
//addCardSubmitButton,
//config
//);
//}
