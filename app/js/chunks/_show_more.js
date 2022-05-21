// show more

const goodsGrid = document.querySelector('.tab');
const loadMore = document.querySelector('.tab__show-more');

if (goodsGrid && loadMore) {
    const fetchGoods = (line = 3) => {
        fetch('json/goods.json')
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (i < line) {
                        goodsGrid.innerHTML += `
                            <div class="trainers__card">
                                <a href="#!" class="trainers__img">
                                    <img src="${data[i].source}" alt="${data[i].title}" />
                                </a>
                                <div class="trainers__descript">
                                    <h3 class="trainers__headline">${data[i].title}</h3>
                                    <p class="trainers__text">
                                        Our staff includes amazing professionals that have
                                        an eye for crossfit.
                                    </p>
                                    <span>${data[i].price}</span>
                                </div>
                            </div>
                        `;
                    }
                }
            });
    };
    let amountOfGoods = 3;
    // fetchGoods(amountOfGoods);
    loadMore.addEventListener('click', (e) => {
        amountOfGoods += 3;
        fetchGoods(amountOfGoods);
    });
}
