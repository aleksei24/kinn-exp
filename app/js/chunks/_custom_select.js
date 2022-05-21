// custom-select
// for only one custom-select element unwrap the code out of block.forEach
const customSelectBlock = document.querySelectorAll('.custom-select');
customSelectBlock.forEach(function (everyCustomSelect) {
    const customSelectButton = everyCustomSelect.querySelector('.custom-select__btn');
    const customSelectButtonSpan = everyCustomSelect.querySelector('.custom-select__btn span');
    const customSelectList = everyCustomSelect.querySelector('.custom-select__list');
    const customSelectItem = customSelectList.querySelectorAll('.custom-select__item');
    const customSelectInput = everyCustomSelect.querySelector('.custom-select__input_hidden');

    customSelectButton.addEventListener('click', function () {
        customSelectList.classList.toggle('dropdown__list_visible');
        this.classList.add('custom-select-active');
    });
    customSelectItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectButton.innerText = this.innerText;
            customSelectInput.value = this.dataset.value;
            customSelectList.classList.remove('dropdown__list_visible');
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target !== customSelectButton) {
            customSelectButton.classList.remove('custom-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
    /*document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            customSelectButton.classList.remove('custom-select-active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });*/
});
// if the code is going to be used in old browsers
// you should add a polyfill below
// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

// custom-select 2
const customSelect = document.querySelectorAll('.cust-sel');

if (customSelect) {
    customSelect.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('cust-sel_active');
            if (e.target.classList.contains('cust-sel__item')) {
                let text = e.target.textContent;
                e.currentTarget.querySelector('.cust-sel__top').textContent = text;
            }
        });
    });
}
