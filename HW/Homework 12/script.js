console.log('Делать кривой UI слишком муторно :с')

function numComprasion(num1, num2) {
    if (num2 > num1) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else return 0;
}

function factorial(x) {
    if (x === 0) return 1;
    return x * factorial(x - 1);
}

function numMerge(a, b, c) {
    return Number(`${a}${b}${c}`);
}

function square(length, height) {
    if (height === undefined) {
        return length ** 2;
    } else {
        return length * height;
    }
}

function perfectNumber(x) {
    let arr = [];
    for (i = 1; i < x; i++) {
        if (x % i === 0) {
            arr.push(i);
        }
    }

    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    if (sum === x) {
        return true
    } else return false;
}

function perfectNumberInRange(from, to) {
    let arr = [];
    for(from; from <= to; from++) {
        let result = perfectNumber(from);
        if (result === true) {
            arr.push(from);
        }
    }
    return arr;
}