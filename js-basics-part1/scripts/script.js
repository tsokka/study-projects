// let year = 2025;
let year = new Date().getFullYear();

let mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.0,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true,
}

let bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2018,
    color: "white",
    hp: 313,
    forSale: false,
}

let audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2021,
    color: "blue",
    hp: 249,
    forSale: true,
}

mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;

let names = mercedes.name + ' ' + mercedes.model + ',' + ' ' + bmw.name + ' ' + bmw.model + ',' + ' ' + audi.name + ' ' + audi.model;
alert('Марка и модель всех авто - ' + names);

let averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
alert('Cреднее арифметическое возрастов всех 3 автомобилей - ' + averageAge);

let atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;
alert('Хотя бы один автомобиль продаётся? - ' + atLeastOneForSale);

let allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;
alert('Все авто младше 5 лет? - ' + allYoungerThanFive);

let atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? - ' + atLeastOneHasLittleHp);

let car = mercedes;
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!');
} else {
    alert('Это - ' + car.name + ' ' + car.model);
}

if (car.carAge) {
    if (car.carAge === 0) {
        alert('Новый автомобиль');
    } else if (car.carAge <= 3) {
        alert('Свежий автомобиль');
    } else {
        alert('Лет этому авто: ' + car.carAge);
    }
}

let consumption = (car.engine > 3.0) ? ('Прожорливый автомобиль') : ('Экономичный автомобиль');
alert(consumption);

let russianColor = car.color;
if (car.color) {
    switch (car.color) {
        case 'black':
            alert('черный');
            break;
        case 'silver':
            alert('серебристый');
            break;
        case 'red':
            alert('красный');
            break;
        case 'white':
            alert('белый');
            break;
        case 'gray':
            alert('серый');
            break;
        case 'blue':
            alert('синий');
            break;
    }
} else {
    alert('Невозможно определить цвет автомобиля')
}