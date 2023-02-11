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

const calcFraction = {
    numerator: 3,
    denominator: 9,
    sumFraction: function () {return this.numerator + this.denominator},
    subFraction: function () {return this.numerator - this.denominator},
    multFraction: function () {return this.numerator * this.denominator},
    divideFraction: function () {return this.numerator / this.denominator},
    cut: function () {
        const numDividers = dividers(this.numerator, this.numArray).sort(sortArr);
        const denomDividers = dividers(this.denominator, this.denomArray).sort(sortArr);
        const longestArr = Math.max(numDividers.length, denomDividers.length);
        for (i = 0; i < longestArr; i++) {
            if (denomDividers.includes(numDividers[i])) {
                this.numerator /= numDividers[i];
                this.denominator /= numDividers[i]; 
                if (Number.isInteger(this.numerator) || Number.isInteger(this.denominator)) {
        
                } else {
                    this.numerator *= numDividers[i];
                    this.denominator *= numDividers[i];
                    break 
                }
            }  
        }
        return `Cutted Fraction: ${this.numerator}/${this.denominator}`
    }
}