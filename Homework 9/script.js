task1.onclick = function () {
    let x = 6;
    let y = 15;
    let z = 4;

    console.log(x += y - x++ * z);
    console.log(z = --x - y * 5);
    console.log(y /= x + 5 % z);
    console.log(z = x++ + y * 5);
    console.log(x = y - x++ * z);
}

task2.onclick = function() {
    let a, b, c;
    a = 12; b = 29; c = 17;
    let arr = [a, b, c];
    console.log(`Введённый значения: ${arr}`);
    console.log(`Среднее арифметическое этих чисел: ${(a + b + c) / 3}`)
}

task3.onclick = function() {
    const PI = 3.14;
    const r = 12;
    const h = 6;

    console.log(`Объём цилиндра равен: V = ${PI * r **2 * h}`);
    console.log(`Площадь поверхности цилиндра равна: S = ${2 * PI * r *(r + h)}`);
}