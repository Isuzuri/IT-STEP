add.onclick = function() {
	let sqadd = document.getElementById("sqadd");
    sqadd.classList.toggle("dis");
}

square.onclick = function() {
  let side = document.getElementById("side_length").value;
	if (side == '') {
    alert(`Из пустоты ничего не посчитать.`)
  } else {
      alert(`
      Площадь квадрата: ${side ** 2}
      Периметр квадрата: ${side * 4}
      `);
      document.getElementById("sqresult").textContent = side;
  };
};

rectangle.onclick = function () {
    let side_a = document.getElementById("side-a").value;
    let side_b = document.getElementById("side-b").value;
    side_a = Number(side_a);
    side_b = Number(side_b);
    alert (`
    Площадь прямугольника: ${side_a * side_b}
    Периметр прямоугольника: ${2 * (side_a + side_b)}
    `);
  
}

circle.onclick = function () {
    const pi = 3.14;
    let radius = document.getElementById("rad").value;
    alert (`
    Площадь круга: ${pi * radius ** 2}
    Длина окружности: ${(2 * pi) * radius}
    `);
}

triangle.onclick = function () {
    let tria_a = Number(document.getElementById("tria-a").value);
    let tria_b = Number(document.getElementById("tria-b").value);
    let tria_c = Number(document.getElementById("tria-c").value);
    let halfP = ((tria_a + tria_b + tria_c) / 2);
    let P = Math.sqrt(halfP * (halfP - tria_a) * (halfP - tria_b) * (halfP - tria_c));
    alert (` Площадь треугольника: ${P} `);
}
