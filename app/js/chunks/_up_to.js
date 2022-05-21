// upTo

const toTop = document.querySelector('.toTop');

if (toTop) {
    window.onscroll = function () {
        scrollFunction();
        fixedHeader();
    };

    toTop.addEventListener('click', onTheTop);
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
}

function onTheTop() {
    let position = document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0;
    if (position) {
        window.scrollBy(0, -40);
        requestAnimationFrame(onTheTop);
    }
}

// in window.scrollBy(0, -30), changing a second parameter(-30) affects the speed of scrolling
// less than -30 means faster speed
// greater than -30 means slower speed
// a second parameter must be negative, otherwise it won`t work
