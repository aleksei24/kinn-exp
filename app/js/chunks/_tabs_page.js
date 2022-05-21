// tabs page

const tabsContainer = document.querySelector('.tabs-page');
const tabsControls = [].slice.call(document.querySelectorAll('.control'));

if (tabsContainer) {
    let setTab = function () {
        let num = tabsControls.indexOf(this);
        tabsContainer.style.left = `${-num * 100}%`;

        for (let control of tabsControls) {
            control.classList.remove('active');
        }
        this.classList.add('active');
    };

    for (let control of tabsControls) {
        control.addEventListener('click', setTab);
    }
}
