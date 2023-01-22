let output = document.querySelector('#console');
let code = document.querySelector('#code');

function returnMin() {
    let num1 = +document.querySelector('#task-1 [placeholder="Number 1"]').value; 
    let num2 = +document.querySelector('#task-1 [placeholder="Number 2"]').value;
    let result = Math.min(num1, num2);
    console.log(result);
    output.innerText = result;
}

function numInExponent() {
    let num1 = +document.querySelector('#task-2 [placeholder="Number"]').value; 
    let num2 = +document.querySelector('#task-2 [placeholder="Exponent"]').value; 
    let result = num1 ** num2;
    console.log(result);
    output.innerText = result;
}

function calculateTwoNumbers() {
    const num1 = +document.querySelector('#task-3 [placeholder="Number 1"]').value; 
    const num2 = +document.querySelector('#task-3 [placeholder="Number 2"]').value; 
    const sign = document.querySelector('#task-3 [placeholder="Sign (+ - * /)"]').value; 
    console.log(typeof sign)
    console.log(sign)
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
}

function isItPrimeNumber() {
    const num = +document.querySelector('#task-4 [placeholder="Number"]').value;
    for (i = 2; i < num; ) {
        if (num % i === 0) {
            output.innerText = 'Not Simple';
            return;
        } else i++
    }
    output.innerText = 'Simple';
}