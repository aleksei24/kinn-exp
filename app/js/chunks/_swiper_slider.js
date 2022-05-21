// Swiper
const indexSwiper = new Swiper('.index-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // autoplay
    autoplay: {
        delay: 5000,
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const catalogueSwiper = new Swiper('.catalog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    /*autoplay: {
        delay: 45000,
    },*/

    // pagination
    /*pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },*/
});
