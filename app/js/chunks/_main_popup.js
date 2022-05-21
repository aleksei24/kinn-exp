//main-popup
const mainPopupTrigger = document.querySelector('#main-popup-trigger');
const mainPopupClose = document.querySelector('#main-popup-close');
const mainPopup = document.querySelector('.main-popup');

if (mainPopupTrigger) {
    mainPopupTrigger.addEventListener('click', (e) => {
        mainPopup.classList.add('open');
    });
}

if (mainPopupClose) {
    mainPopupClose.addEventListener('click', () => {
        mainPopup.classList.remove('open');
    });
}
