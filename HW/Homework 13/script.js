function square(num, pow) {
    if (pow === 1) return num;
    return  num * square(num, pow - 1)
}

function biggestDivider(num, divider = num) {
    if (num % divider === 0 && divider !== num) return divider;
    return  biggestDivider(num, divider - 1);
}

function greatestDigit(num, greatest = 0) {
    if (num) {
        const max = Math.max(num % 10, greatest);
        return greatestDigit(Math.floor(num / 10), max);
    };
    return greatest;
}

function isSimpleNumber(num, divider = num - 1) {
    if (num % divider === 0) {
        return divider === 1;
    } 
    return  isSimpleNumber(num, divider - 1)
}


function simpleMulti(n, i = 2) {
    if (i > n / 2) {
        console.log(n);
        return;
    }
    if (n % i === 0) {
        console.log(i);
        return task4 (n / i, i);
    } else return task4(n, ++i)
}

function fibonacchi(num) {
    if (num === 0 || num === 1) return num;
    return fibonacchi(num - 1) + fibonacchi(num - 2);
}