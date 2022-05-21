// popup

const popup = document.querySelector('.side-popup');
const closePopup = document.querySelector('.side-popup__close');
const popupTitle = document.querySelector('.side-popup__title');
const popupWhen = document.querySelector('.side-popup__from');
const popupData = [
  {
    title: 'A coat',
    when: 'A minute ago',
  },
  {
    title: 'A dress',
    when: '30 seconds ago',
  },
  {
    title: 'A suit',
    when: 'Now',
  },
];
let popupCount = 0;
let popupDelay = 90000;
let exposeFor = 4000;
if (popup) {
  closePopup.addEventListener('click', function () {
    popup.classList.add('remove');
  });

  setInterval(changPopupData, popupDelay);
}

function changPopupData() {
  popup.classList.remove('active');
  popup.classList.remove('remove');
  setTimeout(() => {
    popup.classList.add('active');
  }, popupDelay - exposeFor);
  const titlePopup = `${popupData[popupCount].title}`;
  const timePopup = `${popupData[popupCount].when}`;
  popupTitle.textContent = titlePopup;
  popupWhen.textContent = timePopup;
  popupCount++;
  if (popupCount === popupData.length) {
    popupCount = 0;
  }
}
