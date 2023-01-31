function task1 () {
    let sum = 0;
    while (from <= to) {
        sum += from;
        from++;
    }
}

function task2() {
    for (i = Math.min(num1, num2) - 1; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log = i;
            break
        } 
    }
}

function task3() {
    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

function task4() {
    for (i = 0; num[i] !== undefined; i++) {
    }
    console.log = i;
}

function task5() {
    let moreThanNull = 0;
    let lessThanNull = 0;
    let howManyNull = 0;

    for(i = 1; i <= 10; i++) {
        let num = prompt(`Введи число ${i}`);
        switch (true) {
            case (num > 0):
                moreThanNull += 1;
                continue;
            case (num < 0):
                lessThanNull += 1;
                continue;
            case (num === 0):
            howManyNull += 1;
                continue;
        }
    }
    console.log(moreThanNull)
    console.log(lessThanNull)
    console.log(howManyNull)
}

function task6() {
    while (true) {
        let num1 = +prompt('Введи число 1');
        let num2 = +prompt('Введи число 2');
        let sign = prompt('Введи знак ( + - * / )');
        switch (sign) {
            case '+':
                alert(num1 + num2);
                break;
            case '-':
                alert(num1 - num2);
                break;
            case '*':
                alert(num1 * num2);
                break;
            case '/':
                alert(num1 / num2);
                break;
        }
        let repeat = (confirm('Ещё что-то посчитать?'));
        if (repeat == false) {
            return false;
        }
    }
}

function task7() {
    let num = prompt('Введи число')
    let offset= prompt('На сколько знаков сдвинуть?')
    
    console.log = num.substring(offset) + num.substring(0, offset);
}

function task8() {
    let day = 'Понедельник. ';
    for (i = 0; confirm(day + 'Хотите увидеть следующий день?'); i++) {
        switch (i) {
            case 0: 
                day = 'Понедельник. ';
                break;
            case 1: 
                day = 'Вторник. ';
                break;
            case 2: 
                day = 'Среда. ';
                break;
            case 3: 
                day = 'Четверг. ';
                break;
            case 4: 
                day = 'Пятница. ';
                break;
            case 5: 
                day = 'Суббота. ';
                break;
            case 6: 
                day = 'Воскресенье. ';
                i = -1;
                break;
        }
    }
}

function task9() {
    for (i = 2; i <= 9; i++) {
        
        for(j = 1; j <= 10; j++) {
            console.log(i * j);
        }
    }
}

function task10() {
    let num = +prompt('Загадай число от 1 от 100');
    let left = 1;
    let right = 100;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid == num) {
            alert(`Ты загадал число ${num}`);
            break;
        } else if (confirm(`Твоё число больше ${mid} ?`)) {
            left = mid;
        } else {
            right = mid;
        }
    }
}
