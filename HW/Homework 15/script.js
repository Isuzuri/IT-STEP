function Product(productName, amount, isBuyed = false) {
    this.productName = productName;
    this.amount = amount;
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
    this.itemName = itemName;
    this.amount = amount;
    this.price = price;

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
    for (let value of cheque) {
        document.write(`${value} <br>`)
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

function CssStyle(property, value) {
    this.property = property;
    this.value = value;
}

let styleArray = [
    new CssStyle('font-size', '3rem'),
    new CssStyle('text-transform', 'uppercase'),
    new CssStyle('color', 'red'),
    new CssStyle('text-decoration', 'underline'),
    new CssStyle('text-align', 'center')
]

function styledText(text) {
    let style = '';
    for (let value of styleArray) {
        style += `${value.property}:${value.value}; `;
    }
    document.write(`<p style="${style}">${text}</p>`)
}

function LectureHall(name, numberOfSeats, faculty) {
    this.name = name;
    this.numberOfSeats = numberOfSeats;
    this.faculty = faculty;

    this.toString = function() {
        return (`${this.name}, ${this.numberOfSeats} seats. Faculty: ${this.faculty}`)
    }
}

function Group(name, numberOfStudents, faculty) {
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    this.faculty = faculty
}

let academy = [
    new LectureHall('Electronic security systems', 16, 'Computer Engineering'),
    new LectureHall('Cardiolgy', 12, 'Clinical medicine'),
    new LectureHall('Infocommunication technologies', 15, 'Information security'),
    new LectureHall('Programmable mobile systems', 17, 'Computer Engineering'),
    new LectureHall('Radio informatics', 12, 'Radio engineering and electronics'),
]

let studyGroup = [
    new Group('1st year', 12, 'Computer Engineering'),
    new Group('3rd year medicine', 3, 'Clinical medicine'),
]

function showAllLecture() {
    for (let value of Academy) {
        document.write(`${value} <br>`)
    }
}

function facultyLectureHalls(faculty) {
    document.write(`Lectures for ${faculty} faculty <br>`)
    for (let value of academy) {
        if (faculty === value.faculty) document.write(`${value} <br>`);
    }
}

function lectureHallForGroup(group) {
    let facultyOfGroup = '';
    for (let value of studyGroup) {
        if (value.name === group) facultyOfGroup = value.faculty;
    }
    document.write(`Lectures for ${group} group <br>`);
    facultyLectureHalls(facultyOfGroup)
}

function sortByNumberOfSeats() {
    return academy.sort((a, b) => a.numberOfSeats > b.numberOfSeats ? -1 : 1)
}

function sortLectureHallByABC() {
    return academy.sort((a, b) => a.name > b.name ? 1 : -1)
}