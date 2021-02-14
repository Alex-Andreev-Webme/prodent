const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const contactButtons = document.querySelectorAll('.contact-button');
const closePopupButton = document.querySelector('.popup__close-btn');

function showPopup() {
	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

// Отключил submit для демонстраци
function popupHandler(event) {
	event.preventDefault();
	closePopup();
}

contactButtons.forEach(button => button.addEventListener('click', showPopup));

closePopupButton.addEventListener('click', closePopup)

popupForm.addEventListener('submit', popupHandler);