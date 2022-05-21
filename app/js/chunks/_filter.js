// filter

const catalogFilterItems = document.querySelectorAll('.catalogue-filter__item');
const catalogChoice = document.querySelector('.catalogue-choice');

const createChoiceItem = (txt) => {
    return `
        <a href="#!" class="catalogue-choice__btn" data-choice-txt="${txt}">
        ${txt}
        <span></span>
    </a>
        `;
};

if (catalogFilterItems) {
    catalogFilterItems.forEach((elem) => {
        elem.querySelector('input').addEventListener('change', (e) => {
            let checked = elem.querySelector('input').checked;
            if (checked) {
                elem.querySelector('.checkbox__box').classList.add('checkbox__box_mark');
                let text = elem.querySelector('.checkbox__text').textContent;
                catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));
            } else {
                elem.querySelector('.checkbox__box').classList.remove('checkbox__box_mark');
                let text = elem.querySelector('.checkbox__text').textContent;
                document.querySelector(`[data-choice-txt="${text}"]`).remove();
            }

            let activeCheckbox = document.querySelectorAll('.checkbox__box_mark');
            if (activeCheckbox.length > 0) {
                catalogChoice.style.display = 'flex';
            } else {
                catalogChoice.style.display = 'none';
            }
        });
    });
}

if (catalogChoice) {
    catalogChoice.addEventListener('click', (e) => {
        if (e.target.classList.contains('catalogue-choice__btn')) {
            e.target.remove();

            let choiceText = e.target.textContent.trim();

            document
                .querySelector(`[data-txt="${choiceText}"]`)
                .querySelector('input').checked = false;
            document
                .querySelector(`[data-txt="${choiceText}"]`)
                .classList.remove('checkbox__box_mark');
        }

        if (e.target.classList.contains('catalogue-choice__clear')) {
            Array.from(e.currentTarget.children).forEach(function (elem) {
                if (!elem.classList.contains('catalogue-choice__clear')) {
                    elem.remove();
                }
                catalogFilterItems.forEach((elem) => {
                    elem.querySelector('input').checked = false;
                    elem.querySelector('.checkbox__box').classList.remove('checkbox__box_mark');
                });
            });
            e.currentTarget.style.display = 'none';
        }

        if (e.currentTarget.children.length === 1) {
            e.currentTarget.style.display = 'none';
        }
    });
}
