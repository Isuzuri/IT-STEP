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

function showTime(hour = '00', min = '00', sec = '00') {
    return `${hour}:${min}:${sec}`;
}

function returnSec(hour = 0, min = 0, sec = 0) {
    if (hour !== 0) sec += hour * 3600;
    if (min !== 0) sec += min * 60;
    return sec;
}

function returnTime(sec) {
    hour = 0;
    min = 0;

    while (sec >= 60) {
        if (sec >= 60)  min += 1;
        if (min === 60) {
            hour += 1;
            min = 0;
        }
        sec -= 60;
    }
    return `${hour}:${min}:${sec}`;
}

function timeCompare (hour1 = 0, min1 = 0, sec1 = 0, hour2 = 0, min2 = 0, sec2 = 0) {
    let inSec1 = returnSec(hour1, min1, sec1);
    let inSec2 = returnSec(hour2, min2, sec2);
    let difference = Math.max(inSec1, inSec2) - Math.min(inSec1, inSec2);
    return returnTime(difference)
}