function dividers (num, arr) {
    arr = [];
    for (i = 2; i <= num; i++) {
        if (num % i === 0) arr.push(i);
    }
    return arr;
}

function sortArr(a, b) {
    return b - a;
}

// =================    TASK 1    =============

const auto = {
    manufacturer: 'Porshe',
    model: 'Taycan',
    year: 2021,
    speed: 100,
}

function showInfo () {
    let path = document.querySelector('div')
    path.innerText = auto.manufacturer + ' ' + auto.model + ' ' + auto.year + ' ' + auto.speed;
}

function path(distance) {
    let result = distance / auto.speed;
    result += Math.floor(result / 4)
    return  result.toFixed(2) + 'h';
}

// =================    TASK 2    =============
// Простые множители
function primeFactors (num) {
    const primeArray = [];
    let divider = 2;

    while (num >= 2) {
        if (num % divider === 0) {
            primeArray.push(divider);
            num /= divider;
        } else divider++
    }
    return primeArray;
}
// НОК
function findSCM (firstArray, secondArray) {
    let factors = [];
    factors.push(firstArray);
    for (i = 0; i < secondArray.length; i++) {
        if (!firstArray.includes(secondArray[i])) {
            factors.push(secondArray[i]);
        }
    }
    factors = factors.flat();
    return factors.reduce((a, b) => a * b);
}
// НОД
function findGCD (firstArray, secondArray) {
    let factors = [];
    for (i = 0; i < secondArray.length; i++) {
        if (firstArray.includes(secondArray[i])) {
            factors.push(secondArray[i]);
            firstArray.splice(firstArray.indexOf(secondArray[i]), 1)
        }
    }
    factors = factors.flat();
    if (factors.length < 1) return 1;
    return factors.reduce((a, b) => a * b)
}
// Приведение
function bringing() {
    let SCM = findSCM(primeFactors(firstFraction.denominator), primeFactors(secondFraction.denominator));
    let addFirst = SCM / firstFraction.denominator;
    let addSecond = SCM / secondFraction.denominator;
    newFirstNumer = firstFraction.numerator * addFirst;
    newFirstDenom = firstFraction.denominator * addFirst;
    newSecondNumer = secondFraction.numerator * addSecond;
    newSecondDenom = secondFraction.denominator * addSecond;
    return SCM;
}
// Сокращение
function reduce(num, denom) {
    let GCD = findGCD(primeFactors(num), primeFactors(denom));
    convertedNumerator = num / GCD;
    convertedDenominator = denom / GCD;
    return reducedArr =[convertedNumerator, convertedDenominator]
}
// Конструктор дроби + простых множителей
function Fraction (numer, denom) {
    this.numerator = numer,
    this.denominator = denom;
}
// Создание дробей
let firstFraction = new Fraction
let secondFraction = new Fraction

// =================    Сумма   ================
function sumFraction () {
    let SCM = bringing()
    // Операция 
    let convertedNumerator = newFirstNumer + newSecondNumer;
    let convertedDenominator = SCM;
    // Сокращение и вывод
    reduce(convertedNumerator, convertedDenominator)
    return reducedArr[0] + '/' + reducedArr[1];
}
// =================    Разность    ================
function subFraction () {
    let SCM = bringing()
    // Операция 
    let convertedNumerator = newFirstNumer - newSecondNumer;
    let convertedDenominator = SCM;
    // Сокращение и вывод
    reduce(convertedNumerator, convertedDenominator)
    return reducedArr[0] + '/' + reducedArr[1];
}
// =================    Умножение    ================
function multiplicationFraction () {
    let convertedNumerator = firstFraction.numerator * secondFraction.numerator;
    let convertedDenominator = firstFraction.denominator * secondFraction.denominator;   
    // Сокращение и вывод
    reduce(convertedNumerator, convertedDenominator)
    return reducedArr[0] + '/' + reducedArr[1];
}
// =================    Деление    ================
function divideFraction () {
    let convertedNumerator = firstFraction.numerator * secondFraction.denominator;
    let convertedDenominator = firstFraction.denominator * secondFraction.numerator;   
    // Сокращение и вывод
    reduce(convertedNumerator, convertedDenominator)
    return reducedArr[0] + '/' + reducedArr[1];
}

// =================    TASK 3    =============

let time = {
    hour: 21,
    minute: 40,
    second: 96,
}

function makeCorrect() {
    time.second < 0 ? time.minute -= Math.ceil(time.second / -60) : time.minute += parseInt(time.second / +60)
    time.minute < 0 ? time.hour -= Math.ceil(time.minute / -60) : time.hour += parseInt(time.minute / 60)
    time.second < 0 ? time.second = 60 - (-time.second % -60) : time.second %= 60;
    time.minute < 0 ? time.minute = 60 - (-time.minute % -60) : time.minute %= 60;
    time.hour < 0 ? time.hour = 24 - (-time.hour % -24) : time.hour %= 24;
}

function showTime() {
    const box = document.querySelector('.output');
    makeCorrect()
    let rightHour = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.hour)
    let rightMinute = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.minute)
    let rightSecond = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.second)
    box.innerText = `${rightHour}:${rightMinute}:${rightSecond}`;
}

function changeSec(amount) {
    time.second += amount;
    showTime()
}
function changeMin(amount) {
    time.minute += amount;
    showTime()
}
function changeHour(amount) {
    time.hour += amount;
    showTime()
}