const output = document.querySelector('.output');

const commandsTask1 = document.querySelector('.task1_commands');
document.querySelector('.button_task1').addEventListener('click', () => {
    commandsTask1.classList.toggle('flex');
})

const commandsTask2 = document.querySelector('.task2_commands');
document.querySelector('.button_task2').addEventListener('click', () => {
    commandsTask2.classList.toggle('flex');
})

const commandsTask3 = document.querySelector('.task3_commands');
document.querySelector('.button_task3').addEventListener('click', () => {
    commandsTask3.classList.toggle('flex');
})

// ============================ TASK 1 CONTROL ========================
document.querySelector('.show_info').innerText = auto.manufacturer + ' | ' + auto.model + ' | ' + auto.year + ' | ' + auto.speed +'km/h';
document.querySelector('.distance').oninput = () => path(document.querySelector('.distance input').value);
// ============================ TASK 2 CONTROL ========================
function getValue() {
    firstFraction = new Fraction(+document.querySelector('.first_fraction .numer input').value, +document.querySelector('.first_fraction .denom input').value)
    secondFraction = new Fraction(+document.querySelector('.second_fraction .numer input').value, +document.querySelector('.second_fraction .denom input').value)
}
document.querySelector('.sum').addEventListener('click', () => {
    getValue()
    output.innerText = sumFraction()
})
document.querySelector('.sub').addEventListener('click', () => {
    getValue()
    output.innerText = subFraction()
})
document.querySelector('.mult').addEventListener('click', () => {
    getValue()
    output.innerText = multiplicationFraction()
})
document.querySelector('.divide').addEventListener('click', () => {
    getValue()
    output.innerText = divideFraction()
})
// ============================ TASK 3 CONTROL ========================
document.querySelector('.show_time').addEventListener('click', showTime);
document.querySelector('.add_sec .plus').addEventListener('click', () => changeSec(17));
document.querySelector('.add_sec .minus').addEventListener('click', () => changeSec(-14));
document.querySelector('.add_min .plus').addEventListener('click', () => changeMin(17));
document.querySelector('.add_min .minus').addEventListener('click', () => changeMin(-14));
document.querySelector('.add_hour .plus').addEventListener('click', () => changeHour(1));
document.querySelector('.add_hour .minus').addEventListener('click', () => changeHour(-1));