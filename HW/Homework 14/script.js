let auto = {
    manufacturer: 'Porshe',
    model: 'Taycan',
    year: 2021,
    speed: 100,
}

function showInfo () {
    let path = document.querySelector('div')
    path.innerText = auto.manufacturer + ' ' + auto.model + ' ' + auto.year + ' ' + auto.speed;
}

function path(distance) {
    let result = distance / auto.speed;
    result += Math.floor(result / 4)
    return  result.toFixed(2) + 'h';
}