const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const contactButtons = document.querySelectorAll('.contact-button');
const closePopupButton = document.querySelector('.popup__close-btn');
const popupInputs = document.querySelectorAll('.popup__input');

// Открыть попап
function showPopup() {
	popupInputs.forEach(input => input.value = '');
	popup.classList.add('popup_opened');
}

// Закрыть попап
function closePopup() {
	popup.classList.remove('popup_opened');
}

// Обработчик формы, отключил submit для демонстрации
function popupHandler(event) {
	event.preventDefault();
	closePopup();
}

contactButtons.forEach(button => button.addEventListener('click', showPopup));

closePopupButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', popupHandler);