// colour-select

const colourSelect = document.querySelector('.colour-select');

if (colourSelect) {
    colourSelect.addEventListener('click', (e) => {
        if (e.target.classList.contains('colour-select__btn')) {
            document.querySelectorAll('.colour-select__btn').forEach((elem) => {
                elem.classList.remove('colour-select__btn_active');
            });
            let colourText = e.target.dataset.colour;
            e.currentTarget.querySelector('.colour-select__done span').textContent = colourText;
            e.target.classList.add('colour-select__btn_active');
        }
    });
}
