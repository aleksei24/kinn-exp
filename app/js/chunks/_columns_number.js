// columns number

const catalogGoodsGrid = document.querySelector('.catalogue-goods__grid');
const catCols = document.querySelector('.catalogue-cols__list');

if (catCols) {
    catCols.addEventListener('click', (e) => {
        if (
            e.target.classList.contains('catalogue-cols__btn') ||
            e.target.closest('catalogue-cols__item')
        ) {
            let columns = e.target.dataset.cols;
            catalogGoodsGrid.dataset.gridCol = columns;
            let colsBtn = document.querySelectorAll('.catalogue-cols__btn');
            colsBtn.forEach((elem) => {
                elem.classList.remove('catalogue-cols__btn_act');
            });

            e.target.classList.add('catalogue-cols__btn_act');
        }
    });
    // if (window.innerWidth <= 992) {
    //     let colsNum = 3;
    //     let goodsGrid = document.querySelector('.catalogue-goods__grid');
    //     goodsGrid.setAttribute('data-grid-col', colsNum);
    // }
}
