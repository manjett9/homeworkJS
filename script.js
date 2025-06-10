const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Товар', price = 0) =>
    `<div class="goods-item">
    <div class="goods-item-photo">
    <h4>${title}</h4>
    </div>
    <h3>${title}</h3>
    <p>${price}₽</p>
    </div>`;

const renderGoodsList = (list = []) => {
    document.querySelector('.goods-list').innerHTML = list
        .map(item => renderGoodsItem(item.title, item.price))
        .join('');
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
    <div class="goods-item-photo">
    <h4>${this.title}</h4>
    </div>
    <h3>${this.title}</h3>
    <p>${this.price}₽</p>
    </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
renderGoodsList(goods);