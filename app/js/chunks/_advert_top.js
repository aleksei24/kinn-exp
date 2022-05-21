// catalogue top

const catalogueTopCloseBtn = document.querySelector('.top__close');

if (catalogueTopCloseBtn) {
    catalogueTopCloseBtn.addEventListener('click', (el) => {
        el.currentTarget.closest('.top').style.display = 'none';
    });
}
