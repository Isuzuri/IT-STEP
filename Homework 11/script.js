const output = document.querySelector('#console');
const code = document.querySelector('#code');

function sumAll() {
    let from = +document.querySelector('#task-1 input[placeholder="From"]').value;
    let to = +document.querySelector('#task-1 input[placeholder="To"]').value;

    let sum = 0;
    while (from <= to) {
        sum += from;
        from++;
    }
    output.innerText = sum;
}

function biggestDivider() {
    let num1 = +document.querySelector('#task-2 input[placeholder="Number 1"]').value;
    let num2 = +document.querySelector('#task-2 input[placeholder="Number 2"]').value;

    for (i = Math.min(num1, num2) - 1; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            output.innerText = i;
            break
        } 
    }
}

function allDividers() {
    let num = +document.querySelector('#task-3 input[placeholder="Number"]').value;
    output.innerText = '';

    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            output.innerText += ` ${i}`;
        }
    }
}

function howManyNumbers() {
    let num = document.querySelector('#task-4 input[placeholder="Number"]').value;

    for (i = 0; num[i] !== undefined; i++) {
    }
    output.innerText = i;
}

function inputStat() {
    let moreThanNull = 0;
    let lessThanNull = 0;
    let howManyNull = 0;

    for(i = 1; i <= 10; i++) {
        let num = +document.querySelector(`#task-5 [placeholder="Num ${i}"]`).value;
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

    output.innerHTML = `Больше нуля: ${moreThanNull} </br>`;
    output.innerHTML += `Меньше нуля: ${lessThanNull} </br>`;
    output.innerHTML += `Равно нулю: ${howManyNull}`;
}

function calc() {
    let num1 = +document.querySelector('#task-6 input[placeholder="Number 1"]').value;
    let num2= +document.querySelector('#task-6 input[placeholder="Number 2"]').value;
    let sign = document.querySelector('#task-6 input[placeholder="Sign"]').value;
    let calcDiv = document.getElementById('calcDiv').childNodes;
    switch (sign) {
        case '+':
            output.innerText = num1 + num2;
            break;
        case '-':
            output.innerText = num1 - num2;
            break;
        case '*':
            output.innerText = num1 * num2;
            break;
        case '/':
            output.innerText = num1 / num2;
            break;
    }
    let repeat = confirm('Ещё что-то посчитать?');
    if (repeat == false) {
        for (i = 3; i <= 9; i += 2){
            calcDiv[i].disabled = true;
            
        }
    }
    
}

function offsetNumber() {
    let num = document.querySelector('#task-7 input[placeholder="Number"]').value;
    let offset= document.querySelector('#task-7 input[placeholder="Offset"]').value;
    
    output.innerText = num.substring(offset) + num.substring(0, offset);
}

function showWeekDay() {
    let day = '';
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

function showMultTable() {
    output.innerHTML = '';
    let createTable = document.createElement('table');
    output.appendChild(createTable);

    let thead = document.createElement('thead');
    createTable.appendChild(thead);
    
    for (k = 1; k <= 10; k++) {
        let td = document.createElement('td');
        td.textContent = k;
        thead.appendChild(td);
    }

    for (i = 2; i <= 9; i++) {
        let tr = document.createElement('tr');

        for(j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }

        createTable.appendChild(tr);
    }
}