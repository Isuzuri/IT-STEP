//Task 1
task1.onclick = function (){
    let name = prompt("Whats your name?", "");
    alert (`Hello, ${name}!`);
};

//Task 2
task2.onclick = function () {
    const currentYear = 2022;
    let age = prompt('What year were you born??', '');
    age = 2022 - age;
    alert (`Wow, you are ${age} years old`);
}

//Task 3
task3.onclick = function() {
    let side = prompt('Enter the length of the side', '');
    alert(`Square area is ${side**2}`);
}

//Task 4
task4.onclick = function() {
    const pi = 3.14;
    let rad = prompt ('Enter the radius of the circle');
    alert(`Circle area is ${pi * rad**2}`);
}

//Task 5
task5.onclick = function() {
    let distance = prompt('Enter distance between two citys (km)', '');
    let time = prompt('How many time you want spend? (h)', '');
    alert(`Okey, you have to move at ${distance / time} km/h.`);
}

//Task 6 
task6.onclick = function() {
    const euro = 0.94464;
    let dollar = prompt('Enter the dollar amount', '');
    alert(`${dollar} $ in euro is ${dollar * euro}`);
}

//Task 7
task7.onclick = function() {
    let space = prompt('Enter space on USB-Flash (Gb)');
    let quantity = Math.round((space * 1024) / 820);
    alert(`You may contain ${quantity} files a size of 820 Mb.`)
}

//Task 8 
task8.onclick = function() {
    let money = prompt('Enter your amount of money ($)', '');
    let price = prompt('Enter the price of one chocolate bar', '');
    alert(
        `You may buy ${parseInt(money / price)} chocolate bar and the change will be ${parseFloat(money % price)} $.`
    )
}

//Task 9 
task9.onclick = function() {
    let number = prompt('Enter a three-digit number', '');
    let reverse = String (number % 10) +
                  String ((parseInt(number / 10)) % 10) +
                  String (parseInt(number / 100));
    alert(`${reverse}`);
}