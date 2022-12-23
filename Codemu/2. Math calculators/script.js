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

something.onclick = function () {
    let maxA = +document.getElementById('maxA').value;
    let maxB = +document.getElementById('maxB').value;
    let maxC = +document.getElementById('maxC').value;
    //Формирование массива из введённых значений
    //Вычисление максимального значения и удаление его из массива
    let arr = [maxA, maxB, maxC];
    const MAX = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(MAX), 1);
    console.log (MAX ** 2 == arr[0] ** 2 + arr[1] ** 2)
}

findDiv.onclick = function() {
    let numDiv = +document.getElementById('numDiv').value;
    for (let i = 0; i <= numDiv; i++) {
        if (numDiv % i == 0) {
            console.log(i);
        } continue;
    }
}

sharedDiv.onclick = function() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    for (let i = 0; i < Math.max(num1, num2); i++) {
        if () {
            console.log(i);
        } continue;
    }
}