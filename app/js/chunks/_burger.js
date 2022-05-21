// burger js

const burger = document.querySelector('.burger');

if (burger) {
    burger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    const icon = document.querySelector('.icon-burger');
    const menu = document.querySelector('.menu-burger__list');
    const bodyLock = document.querySelector('body');
    icon.classList.toggle('active');
    menu.classList.toggle('active');
    bodyLock.classList.toggle('locked');
}
