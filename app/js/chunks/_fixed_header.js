// fixed menu
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header_top');

if (header) {
    window.onscroll = function () {
        fixedHeader();
    };
}

if (headerTop) {
    header.style.top = -40;
} else {
    header.style.top = 0;
}

function fixedHeader() {
    if (window.pageYOffset >= 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
