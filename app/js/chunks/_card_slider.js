// card-slider

const cardSlider = document.querySelector('.card-slider');

if (cardSlider) {
    const cardSliderThumbs = document.querySelector('.card-slider__thumbs');
    const cardSliderMain = document.querySelector('.card-slider__main img');
    const cardSliderMainPicture = document.querySelector('.card-slider__main source');

    cardSliderThumbs.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-slider__thumb')) {
            let src = e.target.querySelector('img').getAttribute('src');
            cardSliderMainPicture.setAttribute('srcset', src);
            cardSliderMain.setAttribute('src', src);
        }
    });
}
