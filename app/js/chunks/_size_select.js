// size-select

const sizeSelect = document.querySelector('.size-select');

if (sizeSelect) {
    sizeSelect.addEventListener('click', (e) => {
        if (e.target.classList.contains('size-select__btn')) {
            document.querySelectorAll('.size-select__btn').forEach((elem) => {
                elem.classList.remove('size-select__btn_active');
            });
            let sizeText = e.target.dataset.size;
            e.currentTarget.querySelector('.size-select__done span').textContent = sizeText;
            e.target.classList.add('size-select__btn_active');
        }
    });
}
