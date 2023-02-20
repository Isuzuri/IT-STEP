function Product(productName, amount, isBuyed = false) {
    this.productName = productName,
    this.amount = amount,
    this.isBuyed = isBuyed;
}

let shoppingList = [
    new Product('Apple', 12, false),
    new Product('Banana', 3, true),
    new Product('Ketchup', 1, true),
    new Product('Baguette ', 2, false),
    new Product('Sausage ', 7, false),
]

function showList() {
    for (let value of shoppingList) {
        console.log(value);
    }
}

function notBuyedFirst() {
    return shoppingList.sort((a, b) => a.isBuyed > b.isBuyed ? 1 : -1)
}

function addInList(productName, amount) {
    const product = shoppingList.find(product => product.productName === productName);
    if (product) {
        product.amount += amount
    } else shoppingList.push(new Product(productName, amount))
}

function checkAsBuyed(productName) {
    const product = shoppingList.find(product => product.productName === productName)
    if (product) {
        product.isBuyed = true;
    }
}

let chequeBox = document.querySelector('.cheque');

function Purchase(itemName, amount, price) {
    this.itemName = itemName,
    this.amount = amount,
    this.price = price,

    this.toString = function() {
        return `${this.itemName}  ${this.amount}  ${this.price}rub`;
    }
}

let cheque = [
    new Purchase('Apple', 12, 1.2),
    new Purchase('Banana', 3, 5.7),
    new Purchase('Ketchup', 1, 4.04),
    new Purchase('Baguette ', 2, 1.26),
    new Purchase('Sausage ', 7, 13.84),
]

function showCheque() {
    chequeBox.innerText = 'Item  Amount  Price \n'
    for (let value of cheque) {
        chequeBox.innerText += `${value} \n`
    }
}

function total() {
    let totalPrice = 0;
    for (let value of cheque) {
        totalPrice += (value.amount * value.price);
    }
    return totalPrice
}

function mostExpansivePurchase() {
    cheque.sort((a, b) => (a.amount * a.price) > (b.amount * b.price) ? -1 : 1);
    return cheque[0];
}

function averagePrice() {
    let sumOfPrice = 0;
    for (let value of cheque) {
        sumOfPrice += value.price;
    }
    return (sumOfPrice / cheque.length).toFixed(2);
}