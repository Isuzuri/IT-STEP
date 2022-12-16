//Task 1
task1.onclick = function (){
    let name = prompt("Whats your name?", "");
    alert (`Hello, ${name}!`);
};

//Task 2
const currentYear = 2022;

task2.onclick = function () {
    let age = prompt('What year were you born??', '')
    age = 2022 - age;
    alert (`Wow, you are ${age} years old`)
}

//Task 3

task3.onclick = function() {
    let side = prompt('Enter the length of the side', '')
    alert(`Square area is ${side**2}`)
}

//Task 4
const pi = 3.14;

task4.onclick = function() {
    let rad = prompt ('Enter the radius of the circle')
    alert(`Circle area is ${pi * rad**2}`)
}
