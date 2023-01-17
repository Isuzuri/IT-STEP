const getCoord = document.getElementById("nav");
const showAreaPlace = document.getElementById("showArea");
const task9Path = document.getElementById('task9');

function createNavBar() {
    getCoord.removeChild(document.getElementById("but-del")); //Удаление элемента с ID but-del из контейнера nav 
    showAreaPlace.style.display = 'flex';
    for (let i = 1; i <= 10; i++) {
        const createTaskButton = document.createElement("button"); // Запись в переменную создание элемента button
        createTaskButton.className = "p-bold"; // Присваивание созданному элементу класса p-bold
        createTaskButton.setAttribute('onclick', (`task${i}Create()`)); //Добавление атрибута onclick 
        createTaskButton.textContent = i; // Запись значения i в содержание созданного элемента
        getCoord.appendChild(createTaskButton); //Добавление созданного элемента в конец контейнера nav
    }   
}

function createInput() {
    const createInputField = document.createElement('input');
    createInputField.setAttribute('id', 'input');
    createInputField.className = 'minicaps';
    showAreaPlace.appendChild(createInputField);
}

function createSubmit(i) {
    const createSubmitButton = document.createElement('button');
    createSubmitButton.innerHTML = 'Submit';
    createSubmitButton.setAttribute('onclick', `task${i}()`)
    showAreaPlace.appendChild(createSubmitButton);
}

function createDesc(i) {
    showAreaPlace.innerHTML = '';
    const createDesciption = document.createElement('h4');
    createDesciption.textContent = `${i}`;
    showAreaPlace.appendChild(createDesciption);
}

function checkedTask(i) {
    let child = getCoord.childNodes;
    child[i].disabled = true;
}

function task1Create() {
    createDesc(`Введи сюда свой возраст`);
    createInput();
    createSubmit(1);
    checkedTask(2);
}

function task2Create() {
    createDesc(`Введи число от 0 до 9 и я покажу спецсимвол`)
    createInput();
    createSubmit(2);
    checkedTask(3);
}

function task3Create() {
    createDesc(`Введи число. Трёхзначное пжлст.`)
    createInput();
    createSubmit(3);
    checkedTask(4);
}

function task4Create() {
    createDesc(`Введи год`)
    createInput();
    createSubmit(4);
    checkedTask(5);
}

function task5Create() {
    createDesc(`Введи пятизначное число`)
    createInput();
    createSubmit(5);
    checkedTask(6);
}

function task6Create() {
    createDesc('Введи кол-во долларов')
    createInput()
    const createButtonDiv = document.createElement('div')
    createButtonDiv.setAttribute('display', 'flex');
    showAreaPlace.appendChild(createButtonDiv);

    const createButton1 = document.createElement('button');
    createButton1.textContent = 'EUR';
    createButton1.setAttribute('onclick', 'inEur()')
    createButtonDiv.appendChild(createButton1);

    const createButton2 = document.createElement('button');
    createButton2.textContent = 'UAH';
    createButton2.setAttribute('onclick', 'inUah()')
    createButtonDiv.appendChild(createButton2);

    const createButton3 = document.createElement('button');
    createButton3.textContent = 'AZN';
    createButton3.setAttribute('onclick', "inAzn()")
    createButtonDiv.appendChild(createButton3);

    checkedTask(7);
}

function task7Create() {
    createDesc(`Введи сумму покупки`)
    createInput();
    createSubmit(7);
    checkedTask(8);
}

function task8Create() {
    createDesc(`Можно ли поместить окружность внутрь квадрата?`)
    const createInputField1 = document.createElement('input');
    createInputField1.setAttribute('id', 'input1');
    createInputField1.className = 'minicaps';
    createInputField1.placeholder = 'Сюда напиши длину окружности';
    showAreaPlace.appendChild(createInputField1);
    const createInputField2 = document.createElement('input');
    createInputField2.setAttribute('id', 'input2');
    createInputField2.className = 'minicaps';
    createInputField2.placeholder = 'А сюда периметр квадрата';
    showAreaPlace.appendChild(createInputField2);
    createSubmit(8);
    checkedTask(9);
}

function task9Create() {
    task9Path.style.display = 'block';
    createSubmit(9);
    checkedTask(10);
}

function task10Create() {
    createDesc(`Введи дату`)
    const createInputField = document.createElement('input');
    createInputField.setAttribute('id', 'input');
    createInputField.setAttribute('type', 'date');
    createInputField.className = 'minicaps';
    showAreaPlace.appendChild(createInputField);
    createSubmit(10);
    checkedTask(11);
}

// =============   Task 1-5   ==================== 
function task1() {
    let getting = +document.getElementById('input').value;
    switch (true) {
        case (getting >= 0 && getting < 12):
            console.log('Хохохо, ты как сюда попал, ребёночек?');
            break;
        case (getting >= 12 && getting < 18):
            console.log('Подростки нынче какие-то ненормальные... Надеюсь ты не один из них');
            break;
        case (getting >= 18 && getting < 60):
            console.log('Ты взрослый. Аренда. Коммуналка. Мобильная связь. Интернет. Еда.')
            break;
        case (getting >= 60):
            console.log('Либо пенсионер, либо рептилоид (если ввёл больше 100 лет)')
            break;
        default: console.log('Ты ввёл что-то не то...')
    }
} 

function task2() {
    let getting = +document.getElementById('input').value;
    switch (getting) {
        case 0: 
            console.log(')');
            break;
        case 1: 
            console.log('!');
            break;
        case 2: 
            console.log('@');
            break;
        case 3: 
            console.log('#');
            break;
        case 4: 
            console.log('$');
            break;
        case 5: 
            console.log('%');
            break;
        case 6: 
            console.log('^');
            break;
        case 7: 
            console.log('&');
            break;
        case 8: 
            console.log('*');
            break;
        case 9: 
            console.log('(');
            break;
        default: console.log('Прочитай что написано выше инпута, умник блин.');
    }
}

function task3() {
    let getting = document.getElementById('input').value;
    getting[0] === getting[1] || getting [1] === getting [2] || getting [0] === getting [2] ?
        console.log('Да, есть одинаковые цифры') :
        console.log('Одинаковых цифр нет');
}

function task4() {
    let getting = +document.getElementById('input').value;
    if (getting % 400 === 0) {
        console.log('Год високосный');
    } else if (getting % 4 === 0 && getting % 100 != 0) {
        console.log('Год високосный');
    } else console.log('Неа, не високосный')
}

function task5() {
    let getting = document.getElementById('input').value;
   ((getting[0] === getting [4]) && (getting[1] === getting [3])) ? 
        console.log('Да, это число-палиндром') :
        console.log('Не палиндром. Если ты вообще число ввёл')
}

// =============   Task 6  ====================
function inEur() {
    let getting = document.getElementById('input').value;
    const course = 0.92396;
    let converted = getting * course;
    console.log(converted.toFixed(2) + '€');
}
function inUah() {
    let getting = document.getElementById('input').value;
    const course = 36.91;
    let converted = getting * course;
    console.log(converted.toFixed(2) + '₴');
}
function inAzn() {
    let getting = document.getElementById('input').value;
    const course = 1.7;
    let converted = getting * course;
    console.log(converted.toFixed(2) + '₼');
}

// =============   Task 7 - 10 ====================
function task7() {
    let getting = +document.getElementById('input').value;
    switch (true) {
        case (getting >= 0 && getting < 200):
            console.log(getting);
            break;
        case (getting >= 200 && getting < 300):
            console.log(getting + (getting * 0.03));
            break;
        case (getting >= 300 && getting < 500):
            console.log(getting + (getting * 0.05));
            break;
        case (getting >= 500):
            console.log(getting + (getting * 0.07));
            break;
        default: console.log('Ещё раз почитай, что от тебя хотят...')
    }
}

function task8() {
    let gettingCircle = +document.getElementById('input1').value;
    let gettingSquare = +document.getElementById('input2').value;
    const PI = 3.14;
    let radFromCircle = gettingCircle / (2 * PI);
    let radfromSquare = gettingSquare / 8;
    radfromSquare >= radFromCircle ? console.log('Окружность поместиться в такой квадрат') : console.log('Такая окружность не поместиться в данный квадрат')
}

function task9() {
    let count = 0;
    let answer1 = document.getElementsByName('q1');
    if (answer1[0].checked) {
        count += 2;
    } else console.log('1-ый вопрос: неверно');
    let answer2 = document.getElementsByName('q2');
    if (answer2[2].checked) {
        count += 2;
    } else console.log('2-ой вопрос: неверно');
    let answer3 = document.getElementsByName('q3');
    if (answer3[0].checked) {
        count += 2;
    } else console.log('3-ий вопрос: неверно');
    console.log(`Всего баллов: ${count}`)
}

function task10() {
    let getting = document.getElementById('input').value;
    let date = new Date(getting);
    date.setDate(date.getDate() + 1);
    console.log(date);
}
