// aside

const catalogueFilter = document.querySelectorAll('.catalogue-filter');
const foldAside = document.querySelector('.fold-aside');

catalogueFilter.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('catalogue-filter_open');
    });
});

if (foldAside) {
    foldAside.addEventListener('click', (e) => {
        catalogueFilter.forEach((elem) => {
            elem.classList.remove('catalogue-filter_open');
        });
    });
}
