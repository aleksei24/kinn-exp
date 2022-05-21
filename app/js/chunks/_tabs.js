// tabs

const pureTabs = document.querySelector('.pure-tabs');

if (pureTabs) {
    tabs();
}
function tabs() {
    const top = document.querySelector('.pure-tabs__top');
    const body = document.querySelector('.pure-tabs__body');

    const getActiveTabName = () => {
        return top.querySelector('.pure-tabs__caption_active').dataset.tab;
    };

    const setActiveContent = () => {
        if (body.querySelector('.pure-tabs__content_active')) {
            body.querySelector('.pure-tabs__content_active').classList.remove(
                'pure-tabs__content_active'
            );
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(
            'pure-tabs__content_active'
        );
    };

    if (!top.querySelector('.pure-tabs__caption_active')) {
        top.querySelector('.pure-tabs__caption').classList.add('pure-tabs__caption_active');
    }

    setActiveContent(getActiveTabName());

    top.addEventListener('click', (e) => {
        const caption = e.target.closest('.pure-tabs__caption');
        if (!caption) return;
        if (caption.classList.contains('pure-tabs__caption_active')) return;

        if (top.querySelector('.pure-tabs__caption_active')) {
            top.querySelector('.pure-tabs__caption_active').classList.remove(
                'pure-tabs__caption_active'
            );
        }

        caption.classList.add('pure-tabs__caption_active');

        setActiveContent(getActiveTabName());
    });
}
