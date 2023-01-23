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