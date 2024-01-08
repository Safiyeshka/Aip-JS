//1

let date1 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date2 = new Date(2010, 1, 15); // 15 февраля 2010 года

let diff = date2 - date1; // вычитаем два объекта с датами друг от друга
console.log(diff); // увидим разницу в миллисекундах.

//2

let date12 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date22 = new Date(2010, 1, 15); // 15 февраля 2010 года

let diff2 = Math.floor((date22 - date12) / (1000 * 60 * 60 * 24)); // вычитаем два объекта с датами друг от друга и переводим разницу в днях
console.log(diff2); // увидим разницу в днях.

//3

let date13 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date23 = new Date(2010, 1, 15); // 15 февраля 2010 года

let diffYears = date23.getFullYear() - date13.getFullYear(); // разница в годах
let diffMonths = date23.getMonth() - date13.getMonth(); // разница в месяцах

let totalDiff = diffYears * 12 + diffMonths; // общая разница в месяцах

console.log(totalDiff); // увидим разницу в месяцах.

//4

let date14 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date24 = new Date(2010, 1, 15); // 15 февраля 2010 года

let diffYears4 = date24.getFullYear() - date14.getFullYear(); // разница в годах

console.log(diffYears4); // увидим разницу в годах.