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
    return factors.reduce((a, b) => a * b)
}

function Fraction (numer, denom) {
    this.numerator = numer,
    this.denominator = denom,
    this.primeNumer = primeFactors(this.numerator),
    this.primeDenom = primeFactors(this.denominator),
    this.GCD = findGCD(this.primeNumer, this.primeDenom);
}

let firstFraction = new Fraction(3, 9);
let secondFraction = new Fraction(5, 35);

function sumFraction (firstFraction, secondFraction) {
    let SCM = findSCM(firstFraction.primeDenom, secondFraction.primeDenom);


    let addFirst = SCM / firstFraction.denominator;
    let addSecond = SCM / secondFraction.denominator;
    firstFraction.numerator *= addFirst;
    firstFraction.denominator *= addFirst;
    secondFraction.numerator *= addSecond;
    secondFraction.denominator *= addSecond;
    let convertedNumerator = firstFraction.numerator + secondFraction.numerator;
    let convertedDenominator = SCM;


    let GCD = findGCD(primeFactors(convertedNumerator), primeFactors(convertedDenominator));


    convertedNumerator /= GCD;
    convertedDenominator /= GCD;
    return `${convertedNumerator}/${convertedDenominator}`
}

// function reduce(convertedNumerator, convertedDenominator) {
//     let GCD = findGCD(convertedNumerator, convertedDenominator);
//     convertedNumerator /= (convertedNumerator / GCD);
//     convertedDenominator /= (convertedDenominator / GCD);
//     return `${convertedNumerator}/${convertedDenominator}`
// }




// const calcFraction = {
//     sumFraction: function () {return this.numerator + this.denominator},
//     subFraction: function () {return this.numerator - this.denominator},
//     multFraction: function () {return this.numerator * this.denominator},
//     divideFraction: function () {return this.numerator / this.denominator},
//     cut: function () {
//         const numDividers = dividers(this.numerator, this.numArray).sort(sortArr);
//         const denomDividers = dividers(this.denominator, this.denomArray).sort(sortArr);
//         const longestArr = Math.max(numDividers.length, denomDividers.length);
//         for (i = 0; i < longestArr; i++) {
//             if (denomDividers.includes(numDividers[i])) {
//                 this.numerator /= numDividers[i];
//                 this.denominator /= numDividers[i]; 
//                 if (Number.isInteger(this.numerator) || Number.isInteger(this.denominator)) {
        
//                 } else {
//                     this.numerator *= numDividers[i];
//                     this.denominator *= numDividers[i];
//                     break 
//                 }
//             }  
//         }
//         return `Cutted Fraction: ${this.numerator}/${this.denominator}`
//     }
// }

