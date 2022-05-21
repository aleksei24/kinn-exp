// counter (from 0 to 10)

const counter = document.querySelector('.own-counter');

if (counter) {
    const countField = document.querySelector('.own-counter__field');
    const countMinus = document.querySelector('.own-counter__minus');
    const countPlus = document.querySelector('.own-counter__plus');

    let count = 1;

    countMinus.addEventListener('click', function () {
        count--;
        if (count <= 1) {
            count = 1;
        }
        countField.textContent = count;
    });

    countPlus.addEventListener('click', function () {
        count++;
        if (count > 10) {
            count = 10;
        }
        countField.textContent = count;
    });
}
