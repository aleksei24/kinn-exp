// accordion

const accordion = document.querySelector('.accordion');

if (accordion) {
    const list = document.querySelectorAll('.accordion__item');
    const title = document.querySelectorAll('.accordion__title');

    title.forEach((open) => {
        open.addEventListener('click', toggleAccordion);
    });
}

function toggleAccordion() {
    let thisItem = this.parentNode;
    list.forEach((item) => {
        if (thisItem === item) {
            thisItem.classList.toggle('active');
            return;
        }
        item.classList.remove('active');
    });
}
