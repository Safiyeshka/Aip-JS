//1
let date = new Date(2020, 3, 0);
console.log(date.getDate(date));

function getLastDay() {
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month !== 1) {
        return lastDays[month]; 
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; // високосный год
        } else {
            return 28; // обычный год
        }
    }
}

//2
let date2 = new Date(2025, 31, 5); 

let day2 = date2.getDay();
let days2 = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days2[day2]);

