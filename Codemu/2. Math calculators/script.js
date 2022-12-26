//Вычисление корней квадратного уравнения
roots.onclick = function () {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let d = (b**2) - (4 * a * c);

    if (d < 0 ) {
        console.log('No roots');
    } else if (d === 0) {
        console.log(`Root: ${-((b) / (2 * a))}`)
    } else {
        console.log('Two root:')
        console.log(`${(-b + Math.sqrt(d)) / (2 * a)}`);
        console.log(`${(-b - Math.sqrt(d)) / (2 * a)}`);
    }
}
//Проверка, являются ли числа тройкой Пифагора
something.onclick = function () {
    let maxA = +document.getElementById('maxA').value;
    let maxB = +document.getElementById('maxB').value;
    let maxC = +document.getElementById('maxC').value;
    let arr = [maxA, maxB, maxC]; //Формирование массива из введённых значений
    const MAX = Math.max.apply(null, arr); //Нахождение максимального значения
    arr.splice(arr.indexOf(MAX), 1); //Удаление максимального значения из массива
    console.log (MAX ** 2 == arr[0] ** 2 + arr[1] ** 2)
}
//Выведение списка делителей введённого числа
findDiv.onclick = function() {
    let numDiv = +document.getElementById('numDiv').value;
    for (let i = 0; i <= numDiv; i++) {
        if (numDiv % i == 0) {
            console.log(i);
        } continue;
    }
}
//Выведение списка общих делителей двух чисел
sharedDiv.onclick = function() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    for (let i = 0; i < Math.max(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
        } 
    }
}
//Выведение наибольшего общего делителя двух чисел
maxDiv.onclick = function() {
    const num_1 = +document.getElementById('num-1').value;
    const num_2 = +document.getElementById('num-2').value;
    let arr = [];
    for (let i = 0; i < Math.max(num_1, num_2); i++) {
        if (num_1 % i == 0 && num_2 % i == 0) {
            arr.push(i); //Добавление элемента в массив
        } 
    }
    console.log(Math.max.apply(null, arr));
}
//Выведение наименьшего общего кратного двух чисел
minDiv.onclick = function() {
    const num_1 = +document.getElementById('nummm-1').value;
    const num_2 = +document.getElementById('nummm-2').value;
    let arr = [];
    for (let i = 0; i < Math.max(num_1, num_2); i++) {
        if (num_1 % i == 0 && num_2 % i == 0) {
            arr.push(i); //Добавление элемента в массив
        } 
    }
    const maxnum = Math.max.apply(null, arr)
    console.log((num_1 * num_2) / maxnum);
}