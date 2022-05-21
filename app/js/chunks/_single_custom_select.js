// single custom select

const singleCustomSelect = document.querySelector('.single-select');

if (singleCustomSelect) {
    const customSelectButton = document.querySelector('.single-select__top');
    const customSelectList = document.querySelector('.single-select__list');
    const customSelectItem = customSelectList.querySelectorAll('.single-select__item');
    const customSelectInput = document.querySelector('.single-select__input_hidden');

    customSelectButton.addEventListener('click', function () {
        customSelectList.classList.toggle('dropdown__list_visible');
        this.classList.add('active');
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
            customSelectButton.classList.remove('active');
            customSelectList.classList.remove('dropdown__list_visible');
        }
    });
}
